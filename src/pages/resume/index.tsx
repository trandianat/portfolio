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
          company="Haven Technologies"
          start="JUL '21"
          end="PRESENT"
          skills={[
            'React',
            'Redux',
            'TypeScript',
            'Angular',
            'CSS',
            'Emotion',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Knex.js',
            'Docker',
            'Kubernetes',
          ]}
          descriptions={[
            'Manage, foster growth, and do performance reviews for five full-stack developers across two teams',
            'Build and iterate upon new claims application for our primary client, MassMutual',
          ]}
          indent
        />
        <div css={styles.group}>
          <h2>Liberty Mutual</h2>
          <p className="program">
            Technical Development Program & Post-Program Placement
          </p>
          <div css={styles.groupJobs}>
            <Job
              role="Senior Software Engineer"
              company="Personal Insurance, Direct Sales"
              start="OCT '19"
              end="JUL '21"
              skills={['React', 'TypeScript', 'GraphQL']}
              descriptions={[
                'Innovated on the quoting platform via A/B testing in collaboration with product and UX',
                'Mentored junior software engineers and interns',
              ]}
            />
            <Job
              role="Senior Software Developer"
              company="Personal Insurance, Direct Claims"
              start="OCT '17"
              end="OCT '19"
              skills={['React', 'GraphQL']}
              descriptions={[
                'Scaled the claim filing application beyond first-party users, e.g., third-party and carriers',
                'Created a website to help different types of claimants decide whether to file a claim',
              ]}
            />
            <Job
              role="Software Developer"
              company="Personal Insurance, Sales Compensation"
              start="AUG '16"
              end="SEP '17"
              skills={['Java', 'Gradle']}
              descriptions={[
                'Migrated legacy batch jobs from on-premise to the cloud',
                'Performed extensive testing to ensure frictionless payments to agents',
              ]}
            />
            <Job
              role="Software Developer"
              company="Specialty Markets, Reinsurance"
              start="FEB '16"
              end="JUL '16"
              skills={['AngularJS']}
              descriptions={[
                'Developed the claims, underwriting, and contact management applications',
                'Contributed to the architecture, design, security, and testing of the three applications',
              ]}
            />
            <Job
              role="IT Analyst II"
              company="Personal Insurance, Publishing & Document Management"
              start="FEB '15"
              end="FEB '16"
              skills={['Dojo']}
              descriptions={[
                'Integrated policy form template retrieval into a document repository application',
                'Mentored teammates on technical design and implementation as Technical Lead',
              ]}
            />
            <Job
              role="IT Analyst"
              company="Commercial Insurance, Reporting, Planning & Analytics"
              start="JUN '14"
              end="FEB '15"
              skills={['Agile']}
              descriptions={[
                'Attended and observed core trainings and milestone events of ongoing lean transformations',
                'Performed user acceptance testing and produced reports on lean metrics',
              ]}
            />
          </div>
        </div>
        <Job
          role="Operations Intern"
          company="Community Economic Development Assistance Corporation"
          start="JUN '13"
          end="MAY '14"
          skills={['HTML', 'CSS', 'Adobe Photoshop']}
          descriptions={[
            "Updated and managed CEDAC's three websites, emails, and contact management system",
            'Processed, peer-reviewed, and sent financial audit confirmations',
          ]}
          indent
        />
      </div>
    </Background>
  </Fragment>
);
