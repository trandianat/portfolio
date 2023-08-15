import { Link } from 'react-router-dom';
import * as styles from 'components/navigation/styles';

export const Navigation = (): JSX.Element => (
  <nav className="sans" css={styles.navigation}>
    <Link to="/">Experience</Link>
    <Link to="projects">Skills</Link>
    <Link to="projects">Projects</Link>
    <Link to="projects">Github</Link>
  </nav>
);
