import { Fragment, ReactNode } from 'react';
import { Background } from 'components/background';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import { Color } from 'utils/constants';

export const Content = ({ children }: { children: ReactNode }): JSX.Element => (
  <Fragment>
    <Header />
    <Background color={Color.GRAY}>
      <Navigation />
      {children}
    </Background>
  </Fragment>
);
