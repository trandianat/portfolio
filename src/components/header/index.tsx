import { Link, Outlet } from 'react-router-dom';
import { Background } from 'components/background';
import * as styles from 'components/header/styles';

export const Header = (): JSX.Element => {
  return (
    <Background>
      <header>
        <div css={styles.divider} />
        <div>Diana Tran</div>
        <nav>
          <Link to="resume">Resume</Link>
          <Link to="projects">Projects</Link>
        </nav>
        <Outlet />
      </header>
    </Background>
  );
};
