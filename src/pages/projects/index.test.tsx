import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { Projects } from 'pages/projects';

const mockSignOut = jest.fn();
jest.mock('@aws-amplify/ui-react', () => ({
  withAuthenticator:
    (Auth: FunctionComponent<PropsWithChildren<{}>>) =>
    ({ children }: { children: ReactNode }) =>
      <Auth>{children}</Auth>,
  useAuthenticator: () => ({ signOut: mockSignOut }),
}));

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
  Outlet: () => <div>Outlet</div>,
  useLocation: jest.fn(),
}));

describe('Projects', () => {
  const mockUseLocation = useLocation as jest.Mock;
  mockUseLocation.mockReturnValue({ pathname: '/' });

  it('should match the snapshot', () => {
    expect(create(<Projects />)).toMatchSnapshot();
  });
});
