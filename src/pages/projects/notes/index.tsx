import { API } from 'aws-amplify';
import { useEffect, useRef, useState } from 'react';
import { createNote, deleteNote, updateNote } from 'graphql/mutations';
import { listNotes } from 'graphql/queries';
import Trash from 'assets/icons/trash';
import * as styles from 'pages/projects/notes/styles';

type Note = {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  updatedAt: string;
  __typename: string;
};

export const Notes = (): JSX.Element => {
  const [content, setContent] = useState<{ [content: string]: string }>({});
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState<{ [title: string]: string }>({});

  const useOutsideClick = (callback: any) => {
    const ref = useRef<any>(null);
    useEffect(() => {
      const handleClick = (event: any) => {
        const titleInputs = document.getElementsByClassName('title');
        const contentInputs = document.getElementsByTagName('textarea');
        if (titleInputs.length + contentInputs.length > 1) {
          setTitle({});
          setContent({});
        }
        // console.log('event.target', event.target);
        // console.log('ref.current', ref.current);
        // console.log('event.target.innerText', event.target.innerText);
        // console.log('ref.current?.value', ref.current?.value);
        if (event.target.innerText === ref.current?.value) {
          // pass
        } else if (event.target === ref.current) {
          // pass
        } else if (event?.target?.innerText === ref?.current?.innerText) {
          // pass
        } else {
          callback();
        }
      };
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
    return ref;
  };

  const handleClickOutside = () => {
    setTitle({});
    setContent({});
  };

  const ref = useOutsideClick(handleClickOutside);

  const getNotes = async () => {
    const {
      data: {
        listNotes: { items },
      },
    } = (await API.graphql({ query: listNotes })) as any;
    const dates = items.map((item: Note) => item.updatedAt);
    const sortedDates = dates.sort(
      (a: string, b: string) => Date.parse(b) - Date.parse(a)
    );
    const sortByUpdated = sortedDates.map((date: string) =>
      items.find((item: Note) => item.updatedAt === date)
    );
    setNotes(sortByUpdated);
  };

  const addNote = async (description: string, name: string) => {
    const result = await API.graphql({
      query: createNote,
      variables: { input: { description, name } },
    });
    getNotes();
  };

  const editNote = async ({ description, id, name }: Partial<Note>) => {
    const result = await API.graphql({
      query: updateNote,
      variables: {
        input: {
          id,
          ...(description && { description }),
          ...(name && { name }),
        },
      },
    });
    getNotes();
  };

  const removeNote = async (id: string) => {
    const result = await API.graphql({
      query: deleteNote,
      variables: { input: { id } },
    });
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div css={styles.notes}>
      <h2>Notes</h2>
      <p>
        The notes are stored in <b>DynamoDB</b> and are added, edited, removed,
        and retrieved via <b>GraphQL</b>. You can click on the title or content
        of a note to edit it. The notes are sorted by latest update date, so
        notes are moved to the top of the list when they are updated.
      </p>
      <button onClick={() => addNote('Note', 'Title')}>Add note</button>
      <div css={styles.cards}>
        {notes.length ? (
          notes.map(({ createdAt, description, id, name, updatedAt }: Note) => (
            <div css={styles.card} key={id}>
              <div
                className="trash"
                onClick={() => {
                  removeNote(id);
                  setTitle({});
                  setContent({});
                }}
              >
                <Trash />
              </div>
              {title[id] ? (
                <input
                  className="title"
                  id={id}
                  onBlur={() => {
                    if (title[id] !== description) {
                      editNote({ id, name: title[id] });
                    }
                    setTitle({});
                  }}
                  onChange={({ target: { value } }) => {
                    setTitle({ ...title, [id]: value });
                  }}
                  onKeyDown={(event: any) => {
                    if (event.key === 'Enter') {
                      document.getElementById(id)?.blur();
                    }
                  }}
                  ref={ref}
                  value={title[id]}
                />
              ) : (
                <h3
                  className="name"
                  onClick={() => {
                    setTitle({ ...title, ...{ [id]: name } });
                  }}
                  ref={ref}
                >
                  {name}
                </h3>
              )}
              {content[id] ? (
                <textarea
                  onBlur={() => {
                    if (content[id] !== description) {
                      editNote({ id, description: content[id] });
                    }
                    setContent({});
                  }}
                  onChange={({ target: { value } }) => {
                    setContent({ ...content, [id]: value });
                  }}
                  onKeyDown={(event: any) => {
                    if (event.key === 'Enter') {
                      document.getElementById(id)?.blur();
                    }
                  }}
                  ref={ref}
                  rows={8}
                  value={content[id]}
                />
              ) : (
                <p
                  className="description"
                  onClick={() =>
                    setContent({ ...content, ...{ [id]: description } })
                  }
                  ref={ref}
                >
                  {description}
                </p>
              )}
              <div css={styles.footer}>
                <p>
                  <span>Created</span>: {createdAt}
                </p>
                <p>
                  <span>Updated</span>: {updatedAt}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div css={styles.empty}>No notes found</div>
        )}
      </div>
    </div>
  );
};
