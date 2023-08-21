import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Projects } from 'pages/projects';
import { Resume } from 'pages/resume';
import { Skills } from 'pages/skills';
import config from './aws-exports';
import 'styles.css';

Amplify.configure(config);
const root = createRoot(document.getElementById('root') as Element);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Resume />} path="*" />
      <Route element={<Skills />} path="skills" />
      <Route element={<Projects />} path="projects" />
    </Routes>
  </BrowserRouter>
);
