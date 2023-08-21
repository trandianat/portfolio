import { Fragment } from 'react';
import { Background } from 'components/background';
import { Header } from 'components/header';
import { Job } from 'components/job';
import { Navigation } from 'components/navigation';
import * as styles from 'pages/resume/styles';
import { Color } from 'utils/types';

export const Resume = (): JSX.Element => (
  <Fragment>
    <Header />
    <Background color={Color.GRAY}>
      <Navigation />
      <div css={styles.experience}>
        <Job
          role="Software Development Engineer III & Chapter Lead"
          company="Haven Technologies, July 2021 - Present"
          descriptions={[
            'Manage, foster growth, and do performance reviews for five full-stack developers across two teams',
            'Build and iterate upon new claims application for our primary client, MassMutual',
          ]}
        />
        <div css={styles.group}>
          <h2>Liberty Mutual</h2>
          <p className="sans">
            Technical Development Program & Post-Program Placement
          </p>
          <Job
            role="Senior Software Engineer"
            company="Personal Insurance, Direct Sales, October 2019 - July 2021"
            descriptions={[
              'Innovated on the quoting platform via A/B testing in collaboration with product and UX',
              'Mentored junior software engineers and interns',
            ]}
          />
          <Job
            role="Senior Software Developer"
            company="Personal Insurance, Direct Claims, October 2017 - October 2019"
            descriptions={[
              'Scaled the claim filing application beyond first-party users, e.g., third-party and carriers',
              'Created a website to help different types of claimants decide whether to file a claim',
            ]}
          />
        </div>
      </div>
    </Background>
  </Fragment>
);
