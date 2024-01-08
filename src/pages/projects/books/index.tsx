import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'components/link';
import * as styles from 'pages/projects/books/styles';
import { nyTimesConfig } from 'utils/constants';

export const Books = (): JSX.Element => {
  const [allBooks, setAllBooks] = useState<{ [x: string]: string }[]>([]);
  const [books, setBooks] = useState<{ [x: string]: string }[]>([]);
  const [category, setCategory] = useState<string>('');
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [date, setDate] = useState<string>('');
  const [dateChanged, setDateChanged] = useState<boolean>(false);
  const [defaultDate, setDefaultDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const duration = (weeks: number): string => {
    if (weeks > 52) {
      const years = Math.floor(weeks / 52);
      const weeksLeft = weeks - years * 52;
      return `${years} year${years === 1 ? '' : 's'}${
        weeksLeft > 0
          ? ` and ${weeksLeft} week${weeksLeft === 1 ? '' : 's'}`
          : ''
      }`;
    }
    return `${weeks} week${weeks === 1 ? '' : 's'}`;
  };

  useEffect(() => {
    if (category) {
      setBooks(
        allBooks.filter(
          ({ category_encoded }: Record<string, string>) =>
            category === category_encoded
        )
      );
    }
  }, [category]);

  useEffect(() => {
    if (date) {
      fetch(
        `${nyTimesConfig.apiUrl}?api-key=${nyTimesConfig.apiKey}&published_date=${date}`
      )
        .then(response => response.json())
        .then(({ results }) => {
          if (results !== undefined && Object.keys(results).length) {
            setCategories({});
            const sortedCategories = results.lists
              .map((list: Record<string, unknown>) => [
                list.list_name_encoded,
                list.display_name,
              ])
              .sort((a: string, b: string) => {
                if (a[1] < b[1]) {
                  return -1;
                } else if (a[1] > b[1]) {
                  return 1;
                } else {
                  return 0;
                }
              });
            sortedCategories.forEach(([key, value]: string[]) =>
              setCategories(categories => ({ ...categories, [key]: value }))
            );
            const bookResults: { [x: string]: string }[] = [];
            results.lists.forEach(
              (list: {
                books: { [x: string]: string }[];
                list_name_encoded: string;
              }) =>
                bookResults.push(
                  ...list.books.map((book: Record<string, unknown>) => ({
                    ...book,
                    category_encoded: list.list_name_encoded,
                  }))
                )
            );
            setAllBooks(bookResults);
            setBooks(bookResults);
          } else {
            setAllBooks([]);
            setBooks([]);
            setCategories({});
            setMessage('No results found for the selected publication date');
          }
        });
    }
  }, [date]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
    setDefaultDate(formattedDate);
    setDate(formattedDate);
  }, []);

  return (
    <div css={styles.books}>
      <h2>Books</h2>
      <p>
        Search for New York Times' best-selling books by the date that the
        best-seller list was published and by category. Best-seller lists are
        published each week, so the selected date will correspond to the list
        published for that week.
      </p>
      <div className="search">
        <div className="filter">
          <label htmlFor="id">Publication date:</label>
          <input
            defaultValue={defaultDate}
            id="date"
            min="2008-06-01"
            max={defaultDate}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              setCategory('');
              setMessage('');
              (
                document.getElementById('category') as HTMLSelectElement
              ).selectedIndex = 0;
              const validDate =
                /(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/;
              if (validDate.test(value)) {
                setDate(value);
              } else {
                setDate('');
                setCategories({});
                setMessage('Invalid publication date');
              }
              if (!dateChanged) {
                setDateChanged(true);
              }
            }}
            type="date"
          />
        </div>
        <div className="filter">
          <label htmlFor="category">Category:</label>
          <select
            defaultValue=""
            id="category"
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              setBooks(allBooks);
              setCategory(event.target.value);
            }}
            {...(!Object.keys(categories).length && { disabled: true })}
          >
            <option disabled value="">
              Select a category
            </option>
            {Object.entries(categories).map(([key, value]: string[]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            setCategory('');
            setDate(defaultDate);
            setDateChanged(false);
            setMessage('');
            (document.getElementById('date') as HTMLInputElement).value =
              defaultDate;
            (
              document.getElementById('category') as HTMLSelectElement
            ).selectedIndex = 0;
          }}
          {...(!dateChanged && !category && { disabled: true })}
        >
          Reset
        </button>
      </div>
      {category && (
        <div className="books">
          {books.map(
            ({
              author,
              book_image,
              buy_links,
              category_encoded,
              description,
              primary_isbn13,
              rank,
              title,
              weeks_on_list,
            }: {
              [x: string]: any;
            }) => (
              <div
                className="book"
                key={`${category_encoded}-${primary_isbn13}`}
              >
                <img src={book_image} />
                <div className="details">
                  <div className="header">
                    <div className="title">
                      <h3>{title}</h3>
                      <p>{author}</p>
                      {weeks_on_list > 0 && (
                        <p>{duration(weeks_on_list)} on best-seller list</p>
                      )}
                    </div>
                    <div className="rank">{rank}</div>
                  </div>
                  {(description || buy_links) && <hr />}
                  {description && <p>{description}</p>}
                  <div className="purchase">
                    <p>Purchase:</p>
                    {buy_links.map((link: Record<string, string>) => (
                      <Link key={link.name} text={link.name} url={link.url} />
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};
