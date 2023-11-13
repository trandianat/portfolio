import { create } from 'react-test-renderer';
import { Link } from 'components/link';

describe('Link', () => {
  it('should match the snapshot', () => {
    expect(
      create(<Link text="Text" url="http://example.com" />)
    ).toMatchSnapshot();
  });
});
