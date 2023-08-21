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
          <p className="program">
            Technical Development Program & Post-Program Placement
          </p>
          <div css={styles.groupJobs}>
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
            <Job
              role="Software Developer"
              company="Personal Insurance, Sales Compensation, August 2016 - September 2017"
              descriptions={[
                'Migrated legacy batch jobs from on-premise to the cloud',
                'Performed extensive testing to ensure frictionless payments to agents',
              ]}
            />
            <Job
              role="Software Developer"
              company="Specialty Markets, Reinsurance, February 2016 - July 2016"
              descriptions={[
                'Developed the claims, underwriting, and contact management applications',
                'Contributed to the architecture, design, security, and testing of the three applications',
              ]}
            />
            <Job
              role="IT Analyst II"
              company="Personal Insurance, Publishing & Document Management, February 2015 - February 2016"
              descriptions={[
                'Integrated policy form template retrieval into a document repository application',
                'Mentored teammates on technical design and implementation as Technical Lead',
              ]}
            />
            <Job
              role="IT Analyst"
              company="Commercial Insurance, Reporting, Planning & Analytics, June 2014 - February 2015"
              descriptions={[
                'Attended and observed core trainings and milestone events of ongoing lean transformations',
                'Performed user acceptance testing and produced reports on lean metrics',
              ]}
            />
          </div>
        </div>
        <Job
          role="Operations Intern"
          company="Community Economic Development Assistance Corporation, June 2013 - May 2014"
          descriptions={[
            "Updated and managed CEDAC's three websites, emails, and contact management system",
            'Processed, peer-reviewed, and sent financial audit confirmations',
          ]}
        />
      </div>
    </Background>
  </Fragment>
);
