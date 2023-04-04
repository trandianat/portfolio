import { Link, Outlet } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>Diana Tran</div>
      <div>
        <Link to="resume">Resume</Link>
        <Link to="projects">Projects</Link>
      </div>
      <Outlet />
    </header>
  );
};
