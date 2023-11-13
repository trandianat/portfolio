import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { Experience } from 'pages/experience';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
  useLocation: jest.fn(),
}));

describe('Experience', () => {
  const mockUseLocation = useLocation as jest.Mock;
  mockUseLocation.mockReturnValue({ pathname: '/' });

  it('should match the snapshot', () => {
    expect(create(<Experience />)).toMatchSnapshot();
  });
});
