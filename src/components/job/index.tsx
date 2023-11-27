import * as styles from 'components/job/styles';

export const Job = ({
  role,
  company,
  start,
  end,
  skills,
  scope,
  accomplishments,
  indent = false,
}: {
  role: string;
  company: string;
  start: string;
  end: string;
  skills: string[];
  scope: string;
  accomplishments: string[];
  indent?: boolean;
}): JSX.Element => (
  <div css={styles.job(indent)}>
    <div css={styles.verticalDates}>
      <div css={styles.verticalRange}>
        <div className="sans">{end}</div>
        <div className="sans">{start}</div>
      </div>
      <div css={styles.verticalTimeline}>
        <div css={styles.circle} />
        <div css={styles.verticalLine} />
        <div css={styles.circle} />
      </div>
    </div>
    <div css={styles.horizontalDates}>
      <div css={styles.horizontalTimeline}>
        <div css={styles.circle} />
        <div css={styles.horizontalLine} />
        <div css={styles.circle} />
      </div>
      <div css={styles.horizontalRange}>
        <div className="sans">{start}</div>
        <div className="sans">{end}</div>
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
      <p>{scope}</p>
      <ul>
        {accomplishments.map((accomplishment: string) => (
          <li key={accomplishment}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  </div>
);
