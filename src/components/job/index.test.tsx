import { create } from 'react-test-renderer';
import { Job } from 'components/job';

describe('Job', () => {
  it('should match the snapshot', () => {
    expect(
      create(
        <Job
          role="Role"
          company="Company"
          start="Start"
          end="End"
          skills={['Skill 1', 'Skill 2']}
          scope="Scope"
          accomplishments={['Accomplishment 1', 'Accomplishment 2']}
        />
      )
    ).toMatchSnapshot();
  });
});
