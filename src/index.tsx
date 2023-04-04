import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import { Resume } from 'pages/resume';
import { Projects } from 'pages/projects';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Header />} path="/">
        <Route element={<Resume />} path="resume" />
        <Route element={<Projects />} path="projects" />
      </Route>
    </Routes>
  </BrowserRouter>
);
