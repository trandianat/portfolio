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
        Results-driven team player with 8 years of full-stack experience and 1
        year of management experience. Detail-oriented documentation expert who
        is eager to fail fast, learn, and iterate. Well versed in the software
        development lifecycle including design thinking, architecture and system
        design, testing, and monitoring. Graduated from Boston College in 2014
        with a bachelor's degree in Computer Science.{' '}
        <span css={styles.links}>
          <Link
            icon={<LinkOut />}
            iconGap={Size.MEDIUM}
            iconPosition={Position.RIGHT}
            text="LinkedIn"
            url={Links.LINKEDIN}
          />{' '}
          &{' '}
          <Link
            icon={<LinkOut />}
            iconGap={Size.MEDIUM}
            iconPosition={Position.RIGHT}
            text="Github"
            url={Links.GITHUB}
          />
        </span>
      </p>
    </div>
  </Background>
);
