import { Link, Outlet } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>Diana Tran</div>
      <nav>
        <Link to="resume">Resume</Link>
        <Link to="projects">Projects</Link>
      </nav>
      <Outlet />
    </header>
  );
};
