import { Content } from 'components/content';
import { Job } from 'components/job';
import * as styles from 'pages/experience/styles';

export const Experience = (): JSX.Element => (
  <Content>
    <div css={styles.experience}>
      <Job
        role="Software Development Engineer III"
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
        scope="Served as a frontend subject matter expert (SME) for annuity, disability insurance, and claims product teams. Fostered professional growth and performed annual reviews for 5 full-stack developers across 2 teams."
        accomplishments={[
          'Led architectural design and development of accessibility, authentication, and notifications for claims applications, reducing the average claim process from 1 month manually to 1 week digitally for the primary client, MassMutual',
          'Promoted to Chapter Lead (software engineering manager) in 2022',
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
            scope="Iterated upon quote and claims applications with fail-fast mentality by rapidly launching A/B tests. Assisted in career growth as a mentor for junior software engineers and interns."
            accomplishments={[
              'Improved conversion rate by ideating on and leading development of a quote status feature and a guided policy builder across 4 micro-frontends',
              'Expanded customer base beyond first-party claimants by scaling claims application to accommodate third-party claimants and carriers',
              'Boosted customer confidence by creating an application to guide different types of claimants in deciding whether to file a claim',
            ]}
          />
          <Job
            role="Software Developer"
            company="Sales Compensation & Reinsurance"
            start="FEB '16"
            end="SEP '17"
            skills={['AngularJS', 'Java', 'Gradle', 'Oracle', 'MySQL', 'Agile']}
            scope="Monitored and ensured frictionless monthly insurance agent compensation transactions and statements. Enhanced insurer productivity by developing reinsurance claims, underwriting, and contact management applications."
            accomplishments={[
              'Reduced company spending and optimized processing speed by migrating sales compensation batch jobs from on-premise servers to the cloud',
              'Researched and implemented unit testing solution for reinsurance applications',
            ]}
          />
          <Job
            role="Technology Associate"
            company="Publishing & RPA (Reporting, Planning & Analytics)"
            start="JUN '14"
            end="FEB '16"
            skills={['Dojo', 'Java', 'SOAP', 'XML', 'SharePoint', 'Waterfall']}
            scope="Selected for rotational entry-level Technical Development Program. Designated as Technical Lead on a team with 4 fellow program participants."
            accomplishments={[
              'Promoted policy-issuing efficiency by integrating a formerly manual process of gathering form templates into a centralized document repository portal',
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
        scope="Managed office operations by maintaining contact management system, and answering incoming phone calls and directing them to the appropriate extensions."
        accomplishments={[
          'Raised community awareness of corporate mission by crafting and distributing engaging emails and event invitations with on-brand graphics',
        ]}
        indent
      />
    </div>
  </Content>
);
