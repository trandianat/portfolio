import LinkOut from 'assets/icons/link';
import { Background } from 'components/background';
import * as styles from 'components/header/styles';
import { Link } from 'components/link';
import { Links, Position, Size } from 'utils/constants';

export const Header = (): JSX.Element => (
  <Background>
    <div css={styles.header}>
      <div css={styles.divider} />
      <div css={styles.name}>
        <div>
          <h1>Diana Tran</h1>
          <p className="sans">Software Engineer</p>
        </div>
        <div css={styles.logo}>
          <div className="content">
            <div className="dot" />
            <div>DT</div>
            <div className="line" />
          </div>
        </div>
      </div>
      <p>
        Results-driven software engineer with 8 years of full-stack experience
        and 1 year of people-management experience. Seeking a frontend-focused
        role that highlights my passion for developing seamless and accessible
        user experiences. Graduated from Boston College in 2014 with a
        bachelor's in Computer Science.{' '}
        <Link
          css={styles.link}
          icon={<LinkOut />}
          iconGap={Size.MEDIUM}
          iconPosition={Position.RIGHT}
          text="Github"
          url={Links.GITHUB}
        />
      </p>
    </div>
  </Background>
);
