import { create } from 'react-test-renderer';
import { Content } from 'components/content';

jest.mock('components/header', () => ({
  Header: () => <div>Header</div>,
}));

jest.mock('components/navigation', () => ({
  Navigation: () => <div>Navigation</div>,
}));

describe('Content', () => {
  it('should match the snapshot', () => {
    expect(create(<Content>Content</Content>)).toMatchSnapshot();
  });
});
