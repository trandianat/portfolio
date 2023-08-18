import { Link } from 'react-router-dom';
import LinkIcon from 'assets/icons/link';
import * as styles from 'components/navigation/styles';

export const Navigation = (): JSX.Element => (
  <nav className="sans" css={styles.navigation}>
    <Link to="/">Experience</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
    <a className="github" href="https://github.com/trandianat" target="_blank">
      <LinkIcon />
      <span>Github</span>
    </a>
  </nav>
);
