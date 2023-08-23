import { Link, Outlet, useLocation } from 'react-router-dom';
import Auth from 'components/auth';
import { Content } from 'components/content';
import * as styles from 'pages/projects/styles';
import LinkIcon from 'assets/icons/link';

export const Projects = (): JSX.Element => {
  const { pathname } = useLocation();
  const pages = [
    {
      name: 'Notes',
      path: 'notes',
      description: 'CRUD operations in the form of a to-do list',
    },
    {
      name: 'Detection',
      path: 'detection',
      description: 'Detect objects in images by percentages of confidence',
    },
    {
      name: 'Chatbot',
      path: 'chatbot',
      description: 'AI for scheduling appointments',
    },
  ];
  return (
    <Content>
      <div css={styles.auth}>
        <Auth>
          {['/projects', '/projects/'].includes(pathname) && (
            <div css={styles.projects}>
              {pages.map(
                ({
                  description,
                  name,
                  path,
                }: {
                  description: string;
                  name: string;
                  path: string;
                }) => (
                  <Link css={styles.card} key={name} to={path}>
                    <LinkIcon />
                    <div css={styles.project}>
                      <p className="name">{name}</p>
                      <p className="description">{description}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          )}
          <Outlet />
        </Auth>
      </div>
    </Content>
  );
};
