import { LexRuntimeService } from '@aws-sdk/client-lex-runtime-service';
import { ChangeEvent, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import * as styles from 'pages/projects/chatbot/styles';
import { lexInputConfig, lexRuntimeConfig, Persona } from 'utils/constants';

type Message = {
  from: Persona.AUTO | Persona.BOT | Persona.USER;
  input: string;
};

export const Chatbot = (): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const empty = input.length < 1;
  const whitespace = input.length > 0 && !input.trim();
  const lex = new LexRuntimeService(lexRuntimeConfig);

  const handleError = () => {
    setError(true);
    setMessages([
      ...messages,
      {
        from: Persona.AUTO,
        input: 'Chatbot error detected. Please try again later.',
      },
    ]);
  };

  const send = async () => {
    try {
      await lex.postText(
        { ...lexInputConfig, inputText: input },
        (_: Error, data: any) => {
          if (data) {
            if (data.dialogState === 'ReadyForFulfillment') {
              setMessages([
                ...messages,
                { from: Persona.USER, input },
                {
                  from: Persona.BOT,
                  input: `Your ${data.slots.AppointmentType} appointment has been scheduled on ${data.slots.Date} at ${data.slots.Time}.`,
                },
              ]);
            } else {
              setMessages([
                ...messages,
                { from: Persona.USER, input },
                { from: Persona.BOT, input: data.message },
              ]);
            }
          } else {
            handleError();
          }
        }
      );
      setInput('');
    } catch {
      handleError();
    }
  };

  useEffect(() => {
    const history = document.getElementById('messages') as HTMLElement;
    history.scrollTop = history.scrollHeight;
  }, [messages]);

  return (
    <div css={styles.chatbot}>
      <h2>Chatbot</h2>
      <p>
        This is an <b>Amazon Lex</b> chatbot that schedules appointments. The
        chatbot uses <b>machine learning</b> to process user input and fulfill
        three "slots"—appointment type, date, and time—before confirming an
        appointment. Feel free to chat with it and see how it responds.
      </p>
      <div css={styles.conversation}>
        <div css={styles.messages} id="messages">
          {!messages.length && <h3>Try asking for an appointment!</h3>}
          {messages.length > 0 &&
            messages.map(({ from, input }: Message) => (
              <div className={`message ${from}`} key={v4()}>
                {input}
              </div>
            ))}
        </div>
        <div css={styles.inputs}>
          <input
            disabled={error}
            maxLength={100}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setInput(event.target.value)
            }
            onKeyDown={event => {
              if (event.key === 'Enter') {
                document.getElementById('send')?.click();
              }
            }}
            placeholder="Type a message..."
            value={input}
          />
          <div className="buttons">
            <button
              disabled={empty || error || whitespace}
              id="send"
              onClick={() => send()}
            >
              Send
            </button>
            <button
              onClick={() => {
                setError(false);
                setInput('');
                setMessages([]);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
