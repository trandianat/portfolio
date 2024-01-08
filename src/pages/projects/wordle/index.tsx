import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LinkIcon from 'assets/icons/link';
import { Keyboard } from 'components/keyboard';
import { Link as LinkOut } from 'components/link';
import * as styles from 'pages/projects/wordle/styles';
import answerList from 'pages/projects/wordle/words/answers.txt';
import wordList from 'pages/projects/wordle/words/words.txt';
import { Links, Position } from 'utils/constants';

export const Wordle = (): JSX.Element => {
  let initialGuessLimit = 6;
  const inputLimit = 5;
  const blankRow = Array.from({ length: inputLimit }, () => '');
  const initialGrid = Array.from({ length: initialGuessLimit }, () => blankRow);

  const [answer, setAnswer] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [grid, setGrid] = useState<Array<string[]>>(initialGrid);
  const [guessLimit, setGuessLimit] = useState<number>(initialGuessLimit);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [retry, setRetry] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [words, setWords] = useState<string[]>([]);

  const getAnswer = () => {
    fetch(answerList)
      .then(answers => answers.text())
      .then((answers: string) => {
        const answerArray = answers.split('\n');
        const randomAnswer =
          answerArray[
            Math.floor(Math.random() * (answerArray.length + 1))
          ].toUpperCase();
        setAnswer(randomAnswer);
        setAnswers(answerArray);
      });
  };

  const setClass = (letter: string, index: number, guessNumber: number) => {
    const answerArray = [...answer];
    const guess = guesses[guessNumber];
    const numLettersInAnswer = answerArray.filter(
      char => char === letter
    ).length;
    let numCorrectLetters = 0;
    answerArray.forEach((char, i) => {
      if (char === letter && answer.charAt(i) === guess.charAt(i)) {
        numCorrectLetters++;
      }
    });
    const remainingLetters = numLettersInAnswer - numCorrectLetters;
    const letterIndices = [...guess].reduce(
      (previous, current, currentIndex) => {
        const indexArray = previous;
        if (current === letter && current !== answer.charAt(currentIndex)) {
          indexArray.push(currentIndex);
        }
        return indexArray;
      },
      [] as number[]
    );
    if (letter === answer[index]) {
      return 'correct';
    } else if (
      answer.includes(letter) &&
      letterIndices.indexOf(index) < remainingLetters
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
            : 'on the first try.'
        }`
      );
    } else if (guesses.length >= guessLimit) {
      setRetry(true);
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
    fetch(wordList)
      .then(words => words.text())
      .then((words: string) => setWords(words.split('\n')));
    getAnswer();
  }, []);

  return (
    <div css={styles.wordle}>
      <h2>Wordle</h2>
      <div className="description">
        <p>
          I love The New York Times' game{' '}
          <LinkOut
            icon={<LinkIcon />}
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
          The valid words are from a list created by Donald Knuth as part of{' '}
          <LinkOut
            icon={<LinkIcon />}
            iconPosition={Position.RIGHT}
            text="The Stanford GraphBase: A Platform for Combinatorial Computing"
            url={Links.STANFORD_GRAPHBASE}
          />
          . It contains 5,757 common five-letter words (with some modifications)
          that meet the following criteria:
        </p>
        <ul>
          <li>No proper nouns</li>
          <li>No accent marks, hyphens, or punctuation</li>
          <li>No extremely rare words</li>
        </ul>
        <p>
          The possible answers are from a subset of{' '}
          {answers.length.toLocaleString()} words.
        </p>
        <p>
          Just because I'm a fan of Wordle doesn't mean I'm any good at it, so I
          added unlimited retries if you run out of guesses. If you find any
          bugs, please leave me a <Link to="/projects/notes">note</Link> with
          the word that was your answer.
        </p>
      </div>
      <hr />
      <div className="game">
        <button
          className="reset"
          disabled={!guesses.length && !message}
          onClick={() => {
            getAnswer();
            setGrid(initialGrid);
            setGuessLimit(initialGuessLimit);
            setGuesses([]);
            setInput('');
            setMessage('');
            setShowAnswer(false);
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
        {(message || retry || showAnswer) && (
          <div className="message">
            {message}
            {retry && (
              <div className="retry">
                <p>You're out of tries! Would you like another chance?</p>
                <div className="actions">
                  <button
                    onClick={() => {
                      let tempGrid = [...grid];
                      tempGrid[guesses.length] = blankRow;
                      setGrid(tempGrid);
                      setGuessLimit(guessLimit + 1);
                      setRetry(false);
                    }}
                  >
                    Yes, try again
                  </button>
                  <button
                    onClick={() => {
                      setShowAnswer(true);
                      setRetry(false);
                    }}
                  >
                    No, reveal answer
                  </button>
                </div>
              </div>
            )}
            {showAnswer && (
              <p>
                The word was <b>{answer}</b>.
              </p>
            )}
          </div>
        )}
        <Keyboard
          answer={answer}
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
