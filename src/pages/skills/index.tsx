import { Fragment } from 'react';
import { Background } from 'components/background';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import * as styles from 'pages/skills/styles';
import { Color } from 'utils/types';

export const Skills = (): JSX.Element => {
  const primary = [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS/Sass',
    'PostgreSQL',
    'AWS',
    'REST APIs',
    'Git',
    'CI/CD',
    'Agile',
  ];
  const familiar = [
    'Accessibility',
    'Node.js',
    'MongoDB',
    'Webpack',
    'Docker',
    'Kubernetes',
    'Redux',
    'Angular',
    'Java',
    'GraphQL',
  ];
  return (
    <Fragment>
      <Header />
      <Background color={Color.GRAY}>
        <Navigation />
        <div css={styles.skills}>
          <div>
            <h2>Primarily used:</h2>
            <ul>
              {primary.map((skill: string) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Familiar with:</h2>
            <ul>
              {familiar.map((skill: string) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Background>
    </Fragment>
  );
};
