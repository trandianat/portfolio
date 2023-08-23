import { Color } from 'utils/constants';

export const background = (backgroundColor: Color) => ({
  backgroundColor,
  padding: '48px 0',
  width: '100%',
  ...(backgroundColor === Color.GRAY && { flexGrow: 1 }),
});

export const container = {
  margin: '0 auto',
  width: 'var(--desktop)',
  '@media (max-width: 950px)': { width: 650 },
  '@media (max-width: 700px)': { width: 400 },
  '@media (max-width: 450px)': { width: '80%' },
};
