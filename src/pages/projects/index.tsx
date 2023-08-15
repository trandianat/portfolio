import { Fragment } from 'react';
import { Background } from 'components/background';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import { Color } from 'utils/types';

export const Projects = (): JSX.Element => (
  <Fragment>
    <Header>Test description</Header>
    <Background color={Color.GRAY}>
      <Navigation />
      Projects
    </Background>
  </Fragment>
);
