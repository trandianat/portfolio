import { Link, Outlet, useLocation } from 'react-router-dom';
import Chat from 'assets/icons/chat';
import Note from 'assets/icons/note';
import Photo from 'assets/icons/photo';
import Wedding from 'assets/icons/wedding';
import Auth from 'components/auth';
import { Content } from 'components/content';
import * as styles from 'pages/projects/styles';
import isProjects from 'utils/projects';

type Project = {
  description: string;
  icon: JSX.Element;
  name: string;
  path: string;
};

export const Projects = (): JSX.Element => {
  const { pathname } = useLocation();
  const pages: Project[] = [
    {
      description: 'CRUD operations in the form of a to-do list',
      icon: <Note />,
      name: 'Notes',
      path: 'notes',
    },
    {
      description: 'Detect objects in images by percentages of confidence',
      icon: <Photo />,
      name: 'Detection',
      path: 'detection',
    },
    {
      description: 'AI for scheduling appointments',
      icon: <Chat />,
      name: 'Chatbot',
      path: 'chatbot',
    },
    {
      description: 'I made my wedding website!',
      icon: <Wedding />,
      name: 'Wedding',
      path: 'wedding',
    },
  ];
  return (
    <Content>
      <div css={styles.auth}>
        <Auth>
          {isProjects(pathname) && (
            <div css={styles.projects}>
              {pages.map(({ description, icon, name, path }: Project) => (
                <Link css={styles.card} key={name} to={path}>
                  {icon}
                  <div css={styles.project}>
                    <h2>{name}</h2>
                    <p className="description">{description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <Outlet />
        </Auth>
      </div>
    </Content>
  );
};
