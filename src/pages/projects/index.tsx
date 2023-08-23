import { Link, Route, Routes } from 'react-router-dom';
import Auth from 'components/auth';
import { Content } from 'components/content';
import { Chatbot } from 'pages/projects/chatbot';
import { Detection } from 'pages/projects/detection';
import { Notes } from 'pages/projects/notes';
import * as styles from 'pages/projects/styles';

export const Projects = (): JSX.Element => (
  <Content>
    <div css={styles.auth}>
      {/* <Auth> */}
      <div>Content after login</div>
      <Link to="notes">Notes</Link>
      <Link to="detection">Detection</Link>
      <Link to="chatbot">Chatbot</Link>
      <Routes>
        <Route element={<Notes />} path="notes" />
        <Route element={<Detection />} path="detection" />
        <Route element={<Chatbot />} path="chatbot" />
        {/* <Route element={<Resume />} path="*" /> */}
      </Routes>
      {/* </Auth> */}
    </div>
  </Content>
);
