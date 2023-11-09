import { ReactNode } from 'react';
import { create } from 'react-test-renderer';
import { Header } from 'components/header';

jest.mock('components/background', () => ({
  Background: ({ children }: { children: ReactNode }) => (
    <div className="background">{children}</div>
  ),
}));

describe('Header', () => {
  it('should match the snapshot', () => {
    expect(create(<Header />)).toMatchSnapshot();
  });
});
