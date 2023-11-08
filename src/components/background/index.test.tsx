import { create } from 'react-test-renderer';
import { Background } from 'components/background';

describe('Background', () => {
  it('should match the snapshot', () => {
    expect(create(<Background>Content</Background>)).toMatchSnapshot();
  });
});
