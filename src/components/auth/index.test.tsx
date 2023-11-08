import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { create } from 'react-test-renderer';
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
  useLocation: jest.fn(),
}));

describe('Auth', () => {
  const component = <Auth>Content shown after login</Auth>;
  const mockUseLocation = useLocation as jest.Mock;
  mockUseLocation.mockReturnValue({ pathname: '/projects/notes' });

  it('should match the snapshot', () => {
    expect(create(component)).toMatchSnapshot();
  });

  it('should show the ≪ Back link on a specific project page', () => {
    const render = create(component).root;
    expect(render.findByType('a').props.children).toBe('≪ Back');
  });

  it('should not show the ≪ Back link on the projects page', () => {
    mockUseLocation.mockReturnValue({ pathname: '/projects' });
    const render = create(component).root;
    expect(render.findAllByProps({ to: '/projects' }).length).toBe(0);
  });
});
