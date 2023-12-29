import { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LinkIcon from 'assets/icons/link';
import { Link as LinkOut } from 'components/link';
import * as styles from 'components/navigation/styles';
import { Links, Position, Size } from 'utils/constants';

export const Navigation = (): JSX.Element => {
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);

  const pages = [
    { name: 'Experience', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
  ];

  const isExperience = (path: string): boolean =>
    path === '/' && !pathname.substring(1);

  const isParentPage = (path: string): boolean =>
    path !== '/' && path === pathname;

  const isSubPage = (path: string): boolean => {
    const pathWithoutSlash = path.substring(1);
    const page = pathname.substring(1);
    return (
      !!pathWithoutSlash &&
      pathWithoutSlash === page.substring(0, page.indexOf('/'))
    );
  };

  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > window.innerHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <Fragment>
      <nav className="sans" css={styles.navigation} id="navigation">
        {pages.map(({ name, path }: { name: string; path: string }) => (
          <Link
            key={name}
            to={path}
            {...((isExperience(path) ||
              isParentPage(path) ||
              isSubPage(path)) && {
              className: 'active',
            })}
          >
            {name}
          </Link>
        ))}
        <LinkOut
          className="external"
          css={styles.external}
          icon={<LinkIcon />}
          iconGap={Size.LARGE}
          iconPosition={Position.LEFT}
          text="LinkedIn"
          url={Links.LINKEDIN}
        />
        <LinkOut
          className="external"
          css={styles.external}
          icon={<LinkIcon />}
          iconGap={Size.LARGE}
          iconPosition={Position.LEFT}
          text="Github"
          url={Links.GITHUB}
        />
      </nav>
      {scroll && (
        <button
          aria-label="Back to top"
          css={styles.scroll}
          onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
        >
          &uarr;
        </button>
      )}
    </Fragment>
  );
};
