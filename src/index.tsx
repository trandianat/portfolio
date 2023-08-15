import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Projects } from 'pages/projects';
import { Resume } from 'pages/resume';
import 'styles.css';

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
