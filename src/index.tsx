import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Experience } from 'pages/experience';
import { Projects } from 'pages/projects';
import { Books } from 'pages/projects/books';
import { Chatbot } from 'pages/projects/chatbot';
import { Detection } from 'pages/projects/detection';
import { Notes } from 'pages/projects/notes';
import { Wedding } from 'pages/projects/wedding';
import { Wordle } from 'pages/projects/wordle';
import { Skills } from 'pages/skills';
import NotificationProvider from 'utils/notification';
import config from './aws-exports';
import 'styles.css';

Amplify.configure(config);
const root = createRoot(document.getElementById('root') as Element);
root.render(
  <NotificationProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Experience />} path="/" />
        <Route element={<Skills />} path="skills" />
        <Route element={<Projects />} path="projects">
          <Route element={<Books />} path="books" />
          <Route element={<Chatbot />} path="chatbot" />
          <Route element={<Detection />} path="detection" />
          <Route element={<Notes />} path="notes" />
          <Route element={<Wedding />} path="wedding" />
          <Route element={<Wordle />} path="wordle" />
          <Route element={<Navigate to="/projects" />} path="*" />
        </Route>
        <Route element={<Navigate to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  </NotificationProvider>
);
