import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Projects } from 'pages/projects';
import { Chatbot } from 'pages/projects/chatbot';
import { Detection } from 'pages/projects/detection';
import { Notes } from 'pages/projects/notes';
import { Resume } from 'pages/resume';
import { Skills } from 'pages/skills';
import config from './aws-exports';
import 'styles.css';

Amplify.configure(config);
const root = createRoot(document.getElementById('root') as Element);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Resume />} path="/" />
      <Route element={<Skills />} path="skills" />
      <Route element={<Projects />} path="projects">
        <Route element={<Chatbot />} path="chatbot" />
        <Route element={<Detection />} path="detection" />
        <Route element={<Notes />} path="notes" />
        <Route element={<Navigate to="/projects" />} path="*" />
      </Route>
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  </BrowserRouter>
);
