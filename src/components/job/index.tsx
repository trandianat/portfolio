import * as styles from 'components/job/styles';

export const Job = ({
  role,
  company,
  start,
  end,
  descriptions,
  indent = false,
}: {
  role: string;
  company: string;
  start: string;
  end: string;
  descriptions: string[];
  indent?: boolean;
}): JSX.Element => (
  <div css={styles.job(indent)}>
    <div css={styles.dates}>
      <div css={styles.range}>
        <div className="sans">{end}</div>
        <div className="sans">{start}</div>
      </div>
      <div css={styles.timeline}>
        <div css={styles.circle} />
        <div css={styles.line} />
        <div css={styles.circle} />
      </div>
    </div>
    <div css={styles.role}>
      <h2>{role}</h2>
      <p className="sans">{company}</p>
      <ul>
        {descriptions.map((description: string) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  </div>
);
