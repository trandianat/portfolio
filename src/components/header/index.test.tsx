import { ReactNode } from 'react';
import renderer from 'react-test-renderer';
import { Header } from 'components/header';

jest.mock('components/background', () => ({
  Background: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

describe('Header', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Header />)).toMatchSnapshot();
  });
});
