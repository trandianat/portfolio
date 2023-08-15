import { ReactNode } from 'react';
import { Background } from 'components/background';
import * as styles from 'components/header/styles';

export const Header = ({ children }: { children: ReactNode }): JSX.Element => (
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
      {children}
    </div>
  </Background>
);
