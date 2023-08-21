import * as styles from 'components/job/styles';

export const Job = ({
  role,
  company,
  descriptions,
}: {
  role: string;
  company: string;
  descriptions: string[];
}): JSX.Element => (
  <div css={styles.job}>
    <h2>{role}</h2>
    <p className="sans">{company}</p>
    <ul>
      {descriptions.map((description: string) => (
        <li>{description}</li>
      ))}
    </ul>
  </div>
);
