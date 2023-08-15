import { Fragment } from 'react';
import { Background } from 'components/background';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import * as styles from 'pages/resume/styles';
import { Color } from 'utils/types';

export const Resume = (): JSX.Element => (
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
      <div css={styles.experience}>
        <div>
          <h2 css={{ fontFamily: 'var(--serif-italic)' }}>
            Software Development Engineer III & Chapter Lead
          </h2>
          <p className="sans">Haven Technologies, July 2021 - Present</p>
          <ul css={{ marginTop: 12 }}>
            <li>
              Manage, foster growth, and do performance reviews for five
              full-stack developers across two teams
            </li>
            <li>
              Build and iterate upon new claims application for our primary
              client, MassMutual
            </li>
          </ul>
        </div>
        <div>
          <h2 css={{ fontFamily: 'var(--serif-italic)' }}>
            Senior Software Engineer
          </h2>
          <p className="sans">
            Personal Insurance, Direct Sales, October 2019 - July 2021
          </p>
          <ul css={{ marginTop: 12 }}>
            <li>
              Innovated on the quoting platform via A/B testing in collaboration
              with product and UX
            </li>
            <li>Mentored junior software engineers and interns</li>
          </ul>
        </div>
        <div>
          <h2 css={{ fontFamily: 'var(--serif-italic)' }}>
            Senior Software Developer
          </h2>
          <p className="sans">
            Personal Insurance, Direct Claims, October 2017 - October 2019
          </p>
          <ul css={{ marginTop: 12 }}>
            <li>
              Scaled the claim filing application beyond first-party users,
              e.g., third-party and carriers
            </li>
            <li>
              Created a website to help different types of claimants decide
              whether to file a claim
            </li>
          </ul>
        </div>
      </div>
    </Background>
  </Fragment>
);
