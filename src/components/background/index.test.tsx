import renderer from 'react-test-renderer';
import { Background } from 'components/background';

describe('Background', () => {
  it('should match the snapshot', () => {
    const render = renderer.create(<Background />).toJSON();
    expect(render).toMatchSnapshot();
  });
});
