import { Fragment } from 'react';
import Auth from 'components/auth';
import { Background } from 'components/background';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import * as styles from 'pages/projects/styles';
import { Color } from 'utils/types';

export const Projects = (): JSX.Element => (
  <Fragment>
    <Header />
    <Background color={Color.GRAY}>
      <Navigation />
      <div css={styles.auth}>
        <Auth>
          <div>Content after login</div>
        </Auth>
      </div>
    </Background>
  </Fragment>
);
