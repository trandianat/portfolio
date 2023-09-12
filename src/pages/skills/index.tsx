import { Content } from 'components/content';
import * as styles from 'pages/skills/styles';

export const Skills = (): JSX.Element => {
  const primary = [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Emotion',
    'PostgreSQL',
    'AWS',
    'REST APIs',
    'Git',
    'CI/CD',
    'Agile',
  ];
  const familiar = [
    'Accessibility',
    'Sass',
    'Node.js',
    'MongoDB',
    'Webpack',
    'Docker',
    'Kubernetes',
    'Redux',
    'GraphQL',
    'Angular',
    'Java',
    'Waterfall',
  ];
  return (
    <Content>
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
    </Content>
  );
};
