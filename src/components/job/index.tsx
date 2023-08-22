import * as styles from 'components/job/styles';

export const Job = ({
  role,
  company,
  start,
  end,
  skills,
  descriptions,
  indent = false,
}: {
  role: string;
  company: string;
  start: string;
  end: string;
  skills: string[];
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
      <div css={styles.skills}>
        {skills.map((skill: string) => (
          <div css={styles.skill} key={skill}>
            {skill}
          </div>
        ))}
      </div>
      <ul>
        {descriptions.map((description: string) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  </div>
);
