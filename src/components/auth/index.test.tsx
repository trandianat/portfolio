import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import renderer from 'react-test-renderer';
import Auth from 'components/auth';

jest.mock('@aws-amplify/ui-react', () => ({
  withAuthenticator:
    (Auth: FunctionComponent<PropsWithChildren<{}>>) =>
    ({ children }: { children: ReactNode }) =>
      <Auth>{children}</Auth>,
  useAuthenticator: () => ({ signOut: jest.fn() }),
}));

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
  useLocation: () => ({ pathname: '/path' }),
}));

describe('Auth', () => {
  it('should match the snapshot', () => {
    expect(
      renderer.create(<Auth>Content shown after login</Auth>)
    ).toMatchSnapshot();
  });
});
