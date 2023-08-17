import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Projects } from 'pages/projects';
import { Resume } from 'pages/resume';
import config from './aws-exports';
import 'styles.css';

Amplify.configure(config);
const root = createRoot(document.getElementById('root') as Element);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Resume />} path="/" />
      <Route element={<Projects />} path="projects" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  </BrowserRouter>
);
