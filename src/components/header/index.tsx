import LinkIcon from 'assets/icons/link';
import { Background } from 'components/background';
import * as styles from 'components/header/styles';

export const Header = (): JSX.Element => (
  <Background>
    <div css={styles.header}>
      <div css={styles.divider} />
      <div css={styles.name}>
        <div>
          <h1>Diana Tran</h1>
          <h2 className="sans">Software Engineer & Manager</h2>
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
        Empathetically driven software engineer and manager with 9 years of
        experience developing customer-centric solutions in collaboration with
        business, technology, QA, and UX partners, and 2 years of experience
        managing software engineers. Graduated from Boston College in 2014 with
        a bachelor's in Computer Science.{' '}
        <a
          css={styles.link}
          href="https://github.com/trandianat"
          target="_blank"
        >
          <span>Github</span>
          <LinkIcon />
        </a>
      </p>
    </div>
  </Background>
);
