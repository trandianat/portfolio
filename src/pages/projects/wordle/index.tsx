import { useEffect, useState } from 'react';
import LinkOut from 'assets/icons/link';
import { Keyboard } from 'components/keyboard';
import { Link } from 'components/link';
import * as styles from 'pages/projects/wordle/styles';
import wordList from 'pages/projects/wordle/words.txt';
import { Links, Position } from 'utils/constants';

export const Wordle = (): JSX.Element => {
  const guessLimit = 6;
  const inputLimit = 5;
  const initialGrid = Array.from({ length: guessLimit }, () =>
    Array.from({ length: inputLimit }, () => '')
  );

  const [answer, setAnswer] = useState<string>('');
  const [grid, setGrid] = useState<Array<string[]>>(initialGrid);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [words, setWords] = useState<string[]>([]);

  const getAnswer = () => {
    fetch(wordList)
      .then(words => words.text())
      .then((text: string) => {
        const wordArray = text.split('\n');
        const randomWord =
          wordArray[
            Math.floor(Math.random() * (wordArray.length + 1))
          ].toUpperCase();
        setWords(wordArray);
        setAnswer(randomWord);
      });
  };

  const setClass = (letter: string, index: number, guessNumber: number) => {
    if (letter === answer[index]) {
      return 'correct';
    } else if (
      answer.includes(letter) &&
      guesses[guessNumber].split('').filter(char => char === letter).length <=
        answer.split('').filter(char => char === letter).length
    ) {
      return 'incorrect-space';
    }
    return 'incorrect';
  };

  const handleSubmit = () => {
    setMessage('');
    if (words.includes(input.toLowerCase())) {
      setGuesses(guesses => [...guesses, input]);
    } else {
      setMessage(`${input} is not a valid word. Please try again.`);
      setInput('');
    }
  };

  useEffect(() => {
    if (answer && input === answer) {
      setMessage(
        `Congratulations! You guessed the word ${
          guesses.length > 1
            ? `in ${guesses.length} tries.`
            : 'on the first try!'
        }`
      );
    } else if (guesses.length >= guessLimit) {
      setMessage(`Try again! The word was ${answer}.`);
    }
    setInput('');
  }, [guesses]);

  useEffect(() => {
    if (guesses.length < guessLimit) {
      let tempGrid = [...grid];
      let tempRow = [...input];
      for (let i = tempRow.length; i < inputLimit; i++) {
        tempRow[i] = '';
      }
      tempGrid[guesses.length] = tempRow;
      setGrid(tempGrid);
    }
  }, [input]);

  useEffect(() => {
    getAnswer();
  }, []);

  return (
    <div css={styles.wordle}>
      <h2>Wordle</h2>
      <div className="description">
        <p>
          I love The New York Times' game{' '}
          <Link
            icon={<LinkOut />}
            iconPosition={Position.RIGHT}
            text="Wordle"
            url={Links.WORDLE}
          />
          , so I wanted to try recreating it. You get six chances to guess a
          five-letter word.
        </p>
        <ul>
          <li>If a space becomes gray, that letter is not in the word</li>
          <li>
            If a space becomes yellow, that letter is in the word, but it is in
            a different spot
          </li>
          <li>
            If a space becomes green, that letter is correct and in the correct
            spot
          </li>
        </ul>
        <p>
          The possible words are from a list created by Donald Knuth as part of{' '}
          <Link
            icon={<LinkOut />}
            iconPosition={Position.RIGHT}
            text="The Stanford GraphBase: A Platform for Combinatorial Computing"
            url={Links.STANFORD_GRAPHBASE}
          />
          . It contains 5,757 common five-letter words that meet the following
          criteria:
        </p>
        <ul>
          <li>No proper nouns</li>
          <li>No accent marks, hyphens, or punctuation</li>
          <li>No extremely rare words</li>
        </ul>
      </div>
      <hr />
      <div className="game">
        <button
          className="reset"
          disabled={!guesses.length && !message}
          onClick={() => {
            getAnswer();
            setGrid(initialGrid);
            setGuesses([]);
            setInput('');
            setMessage('');
          }}
        >
          Reset
        </button>
        <div className="grid">
          {grid.map((row: string[], rowIndex: number) => (
            <div className="row" key={`row-${rowIndex + 1}`}>
              {row.map((space: string, spaceIndex: number) => (
                <div
                  className={`space${
                    rowIndex < guesses.length
                      ? ` ${setClass(space, spaceIndex, rowIndex)}`
                      : ''
                  }`}
                  key={`row-${rowIndex + 1}-space-${spaceIndex + 1}`}
                >
                  {space}
                </div>
              ))}
            </div>
          ))}
        </div>
        {message && <p className="message">{message}</p>}
        <Keyboard
          disabled={guesses.includes(answer) || guesses.length >= guessLimit}
          guesses={guesses}
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
        />
      </div>
    </div>
  );
};
