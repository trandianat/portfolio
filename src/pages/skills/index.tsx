import { Background } from 'components/background';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import { Fragment } from 'react';
import { Color } from 'utils/types';

export const Skills = (): JSX.Element => (
  <Fragment>
    <Header />
    <Background color={Color.GRAY}>
      <Navigation />
    </Background>
  </Fragment>
);
