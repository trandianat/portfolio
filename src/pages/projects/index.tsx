import { Link, Outlet, useLocation } from 'react-router-dom';
import Book from 'assets/icons/book';
import Chat from 'assets/icons/chat';
import Letter from 'assets/icons/letter';
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
  const projects: Project[] = [
    {
      description:
        'Create, read, update, and delete notes sorted by latest update',
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
      description:
        'Conversational artificial intelligence for scheduling appointments',
      icon: <Chat />,
      name: 'Chatbot',
      path: 'chatbot',
    },
    {
      description:
        'A website for my wedding guests to RSVP and find more information',
      icon: <Wedding />,
      name: 'Wedding',
      path: 'wedding',
    },
    {
      description:
        "Search for New York Times' best-selling books by date and category",
      icon: <Book />,
      name: 'Books',
      path: 'books',
    },
    {
      description: 'A recreation of the popular New York Times word game',
      icon: <Letter />,
      name: 'Wordle',
      path: 'wordle',
    },
  ];
  return (
    <Content>
      <div css={styles.auth}>
        <Auth>
          {isProjects(pathname) && (
            <div css={styles.projects}>
              {projects.map(({ description, icon, name, path }: Project) => (
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
