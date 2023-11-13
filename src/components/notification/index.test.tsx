import { create } from 'react-test-renderer';
import { Notification } from 'components/notification';

describe('Navigation', () => {
  it('should match the snapshot', () => {
    expect(create(<Notification>Message</Notification>)).toMatchSnapshot();
  });
});
