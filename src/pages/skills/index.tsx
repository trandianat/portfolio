import { Background } from 'components/background';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import { Fragment } from 'react';
import { Color } from 'utils/types';

export const Skills = (): JSX.Element => (
  <Fragment>
    <Header>
      Empathetically driven software engineer and manager with 9 years of
      experience developing customer-centric solutions in collaboration with
      business, technology, QA, and UX partners, and 2 years of experience
      managing software engineers. Graduated from Boston College in 2014 with a
      bachelor's in Computer Science.
    </Header>
    <Background color={Color.GRAY}>
      <Navigation />
    </Background>
  </Fragment>
);
