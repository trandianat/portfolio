import renderer from 'react-test-renderer';
import { Job } from 'components/job';

describe('Job', () => {
  it('should match the snapshot', () => {
    expect(
      renderer.create(
        <Job
          role="Role"
          company="Company"
          start="Start"
          end="End"
          skills={['Skill 1', 'Skill 2']}
          descriptions={['Description 1', 'Description 2']}
        />
      )
    ).toMatchSnapshot();
  });
});
