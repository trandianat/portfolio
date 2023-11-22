import { Content } from 'components/content';
import * as styles from 'pages/skills/styles';
import { Fragment } from 'react';

export const Skills = (): JSX.Element => {
  const skills = {
    Languages: [
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Node.js',
      'Angular',
      'GraphQL',
      'Java',
      'XML',
    ],
    Libraries: [
      'React',
      'Redux',
      'Express',
      'Emotion',
      'Sass',
      'Knex.js',
      'Storybook',
      'Handlebars',
      'Dojo',
    ],
    Testing: ['Jest', 'React Testing Library', 'Cypress', 'Enzyme'],
    Databases: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Oracle', 'MySQL'],
    Other: [
      'Agile',
      'Accessibility',
      'Webpack',
      'Docker',
      'Kubernetes',
      'AWS',
      'Git',
    ],
  };
  return (
    <Content>
      <div className="desktop" css={styles.skills}>
        {Object.entries(skills).map((list: any) => (
          <div key={list[0]}>
            <h2>{list[0]}</h2>
            <ul>
              {list[1].map((skill: string) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mobile" css={styles.skills}>
        {Object.entries(skills).map((list: (string | string[])[]) => (
          <div key={list[0] as string}>
            <h2>{list[0]}</h2>
            <hr />
            <p>
              {(list[1] as string[]).map(
                (skill: string, index: number) =>
                  `${skill}${index === list[1].length - 1 ? '' : ', '}`
              )}
            </p>
          </div>
        ))}
      </div>
    </Content>
  );
};
