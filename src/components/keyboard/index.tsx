import { useEffect, useState } from 'react';
import * as styles from 'components/keyboard/styles';
import { Keyboard as Key } from 'utils/constants';

export const Keyboard = ({
  disabled,
  guesses,
  handleSubmit,
  input,
  setInput,
}: {
  disabled: boolean;
  guesses: string[];
  handleSubmit: any;
  input: string;
  setInput: any;
}): JSX.Element => {
  const [rows, setRows] = useState<Array<string[]>>([]);

  const isAction = (key: string): boolean =>
    [Key.DELETE, Key.ENTER].includes(key as Key);
  const isDelete = (key: string): boolean => key === Key.DELETE;
  const isEnter = (key: string): boolean => key === Key.ENTER;

  const setLetterClass = (key: string, rowIndex: number): string => {
    let className = 'letter';
    if (isAction(key)) {
      className += ' action';
      if (rowIndex < rows.length - 1) {
        className += ' primary';
      }
    } else {
      const used = guesses.map(guess => [...guess]).flat();
      if (used.includes(key)) {
        className += ' used';
      }
    }
    return className;
  };

  useEffect(() => {
    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const row3 = [Key.ENTER, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', Key.DELETE];
    const row4 = [Key.ENTER, Key.DELETE];
    setRows([row1, row2, row3, row4]);
  }, []);

  return (
    <div css={styles.keyboard}>
      {rows.map((row, index) => (
        <div className={`row row-${index + 1}`} key={`row-${index + 1}`}>
          {row.map((key: string) => (
            <button
              className={setLetterClass(key, index)}
              key={key}
              onClick={() => {
                if (isDelete(key)) {
                  setInput((input: string) => input.slice(0, -1));
                } else if (isEnter(key)) {
                  handleSubmit();
                } else {
                  setInput((input: string) => input + key);
                }
              }}
              {...(((isDelete(key) && !input.length) ||
                (isEnter(key) && input.length < 5) ||
                (!isAction(key) && input.length === 5) ||
                disabled) && {
                disabled: true,
              })}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
