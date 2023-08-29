import { LexRuntimeService } from '@aws-sdk/client-lex-runtime-service';
import { useEffect } from 'react';
import * as styles from 'pages/projects/chatbot/styles';

export const Chatbot = (): JSX.Element => {
  const lex = new LexRuntimeService({
    credentials: {
      accessKeyId: process.env.REACT_APP_LEX_ACCESS as string,
      secretAccessKey: process.env.REACT_APP_LEX_SECRET as string,
    },
    region: process.env.REACT_APP_REGION,
  });

  useEffect(() => {
    const processInput = async () => {
      await lex.postText(
        {
          botAlias: process.env.REACT_APP_LEX_ALIAS,
          botName: process.env.REACT_APP_LEX_BOT,
          inputText: 'Appointment',
          userId: process.env.REACT_APP_LEX_USER,
        },
        (error: any, data: any) => {
          console.log('data', data);
          console.log('error', error);
        }
      );
    };
    processInput();
  }, []);

  return (
    <div css={styles.chatbot}>
      <h2>Chatbot</h2>
    </div>
  );
};
