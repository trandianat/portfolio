import { Content } from 'components/content';
import { Job } from 'components/job';
import * as styles from 'pages/experience/styles';

export const Experience = (): JSX.Element => (
  <Content>
    <div css={styles.experience}>
      <Job
        role="Software Development Engineer III & Chapter Lead"
        company="Haven Technologies"
        start="JUL '21"
        end="AUG '23"
        skills={[
          'React',
          'Redux',
          'TypeScript',
          'Angular',
          'CSS',
          'Emotion',
          'Storybook',
          'Handlebars',
          'Jest',
          'Cypress',
          'React Testing Library',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Knex.js',
          'Docker',
          'Kubernetes',
          'Agile',
          'SaaS',
        ]}
        descriptions={[
          'Led development of accessibility, authentication, and notifications for claims applications, reducing the average claim process from 1 month manually to 3 days digitally for our primary client, MassMutual',
          'Fostered professional growth and performed annual reviews for 5 full-stack developers across 2 teams',
          'Served as a frontend subject matter expert for annuity, disability insurance, and claims product teams',
        ]}
        indent
      />
      <div css={styles.group}>
        <h2 className="company">Liberty Mutual</h2>
        <p className="sans">
          Technical Development Program & Post-Program Placement
        </p>
        <div css={styles.groupJobs}>
          <Job
            role="Senior Software Engineer"
            company="Direct Sales & Claims"
            start="OCT '17"
            end="JUL '21"
            skills={[
              'React',
              'Redux',
              'TypeScript',
              'Node.js',
              'Express',
              'GraphQL',
              'DynamoDB',
              'MongoDB',
              'Jest',
              'Enzyme',
              'Lambdas',
              'Agile',
            ]}
            descriptions={[
              'Improved quote conversion rate via design-thinking ideation and failing fast by rapidly launching A/B tests',
              'Expanded customer base and confidence by scaling the claim-filing application to serve third-party claimants and carriers, and creating an application to guide different types of claimants in deciding whether to file a claim',
              'Assisted in career growth by mentoring junior software engineers and interns',
            ]}
          />
          <Job
            role="Software Developer"
            company="Sales Compensation & Reinsurance"
            start="FEB '16"
            end="SEP '17"
            skills={['AngularJS', 'Java', 'Gradle', 'Oracle', 'MySQL', 'Agile']}
            descriptions={[
              'Reduced spending and optimized processing speed by migrating batch jobs from on-premise to the cloud',
              'Boosted insurer productivity by developing claims, underwriting, and contact management platforms',
            ]}
          />
          <Job
            role="Technology Associate"
            company="Publishing & RPA (Reporting, Planning & Analytics)"
            start="JUN '14"
            end="FEB '16"
            skills={['Dojo', 'Java', 'SOAP', 'XML', 'SharePoint', 'Waterfall']}
            descriptions={[
              'Promoted policy-issuing efficiency by integrating form templates into a centralized document repository portal',
              'Increased company-wide engagement in organizational lean transformation efforts by participating in change initiatives and publishing knowledge-sharing articles',
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
          'Raised community awareness of corporate mission by updating websites and contact management system, and coding engaging emails and event invitations with on-brand graphics',
        ]}
        indent
      />
    </div>
  </Content>
);
