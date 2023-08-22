import { Link, useLocation } from 'react-router-dom';
import LinkIcon from 'assets/icons/link';
import * as styles from 'components/navigation/styles';

export const Navigation = (): JSX.Element => {
  const { pathname } = useLocation();
  const pages = [
    { name: 'Experience', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
  ];
  return (
    <nav className="sans" css={styles.navigation}>
      {pages.map(({ name, path }: { name: string; path: string }) => (
        <Link
          key={name}
          to={path}
          {...((pathname === path ||
            (name === 'Experience' && !pathname.substring(1))) && {
            className: 'active',
          })}
        >
          {name}
        </Link>
      ))}
      <a
        css={styles.external}
        href="https://github.com/trandianat"
        target="_blank"
      >
        <LinkIcon />
        Github
      </a>
    </nav>
  );
};
