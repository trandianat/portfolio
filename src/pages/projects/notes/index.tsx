import { API } from 'aws-amplify';
import { useContext, useEffect, useRef, useState } from 'react';
import Trash from 'assets/icons/trash';
import { createNote, deleteNote, updateNote } from 'graphql/mutations';
import { listNotes } from 'graphql/queries';
import * as styles from 'pages/projects/notes/styles';
import { Status } from 'utils/constants';
import { NotificationContext } from 'utils/notification';

type Note = {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  updatedAt: string;
  __typename: string;
};

export const Notes = (): JSX.Element => {
  const { notify } = useContext(NotificationContext);
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState<{ [title: string]: string }>({});
  const [content, setContent] = useState<{ [content: string]: string }>({});

  const locale = 'en-US';

  const useOutsideClick = (callback: Function) => {
    const ref = useRef<any>(null);
    useEffect(() => {
      const handleClick = (event: any) => {
        const titleClicked = event.target.innerText === ref.current?.value; // When h3 becomes input
        const contentClicked =
          event.target.innerText === ref.current?.innerText; // When p becomes textarea
        const inputClicked = event.target === ref.current; // When input or textarea is clicked
        if (!titleClicked && !contentClicked && !inputClicked) {
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

  const addNote = async (name: string, description: string) => {
    try {
      await API.graphql({
        query: createNote,
        variables: { input: { description, name } },
      });
      notify({ message: <p>New note added</p>, variant: Status.SUCCESS });
      getNotes();
    } catch {
      notify({ message: <p>Failed to add new note</p>, variant: Status.ERROR });
    }
  };

  const editNote = async ({ description, id, name }: Partial<Note>) => {
    try {
      await API.graphql({
        query: updateNote,
        variables: {
          input: {
            id,
            ...(name && { name }),
            ...(description && { description }),
          },
        },
      });
      notify({ message: <p>Note saved</p>, variant: Status.SUCCESS });
      getNotes();
    } catch {
      notify({ message: <p>Failed to save note</p>, variant: Status.ERROR });
    }
  };

  const removeNote = async (id: string) => {
    try {
      await API.graphql({
        query: deleteNote,
        variables: { input: { id } },
      });
      notify({ message: <p>Note removed</p>, variant: Status.SUCCESS });
      getNotes();
    } catch {
      notify({ message: <p>Failed to remove note</p>, variant: Status.ERROR });
    }
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
        notes are moved to the top of the list when they are updated. Feel free
        to add a note with suggestions for improvement on any of my projects!
      </p>
      <div>
        <p className="serif-italic">In progress:</p>
        <ul>
          <li>
            When clicking into a note's content, place the cursor at the end of
            the input (like how the cursor is placed at the end of the title)
          </li>
          <li>
            When deleting all of the text in a title or content, do not exit the
            input field
          </li>
          <li>Replace TypeScript "any" types</li>
          <li>Slide updated notes to the top of the list</li>
          <li>Error handling</li>
        </ul>
      </div>
      <button onClick={() => addNote('Untitled', 'Edit note')}>Add note</button>
      <div css={styles.cards}>
        {notes.length ? (
          notes.map(({ createdAt, description, id, name, updatedAt }: Note) => {
            const createdDate = new Date(createdAt);
            const updatedDate = new Date(updatedAt);
            const formattedCreatedDate = `${createdDate.toLocaleDateString(
              locale
            )} ${createdDate.toLocaleTimeString(locale)}`;
            const formattedUpdatedDate = `${updatedDate.toLocaleDateString(
              locale
            )} ${updatedDate.toLocaleTimeString(locale)}`;
            return (
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
                    autoFocus
                    className="title"
                    id={id}
                    onBlur={() => {
                      if (title[id] !== name) {
                        editNote({ id, name: title[id] });
                      }
                      setTitle({});
                    }}
                    onChange={({ target: { value } }) =>
                      setTitle({ ...title, [id]: value })
                    }
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
                    onClick={() => setTitle({ ...title, ...{ [id]: name } })}
                    ref={ref}
                  >
                    {name}
                  </h3>
                )}
                {content[id] ? (
                  <textarea
                    autoFocus
                    id={id}
                    onBlur={() => {
                      if (content[id] !== description) {
                        editNote({ id, description: content[id] });
                      }
                      setContent({});
                    }}
                    onChange={({ target: { value } }) =>
                      setContent({ ...content, [id]: value })
                    }
                    onKeyDown={(event: any) => {
                      if (event.key === 'Enter') {
                        document.getElementById(id)?.blur();
                      }
                    }}
                    ref={ref}
                    rows={4}
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
                    <span>Created</span>: {formattedCreatedDate}
                  </p>
                  <p>
                    <span>Updated</span>: {formattedUpdatedDate}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="serif-italic" css={styles.empty}>
            No notes found
          </div>
        )}
      </div>
    </div>
  );
};
