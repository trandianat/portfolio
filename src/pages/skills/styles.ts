import { css } from '@emotion/react';

export const skills = css({
  '&.desktop': {
    display: 'grid',
    gap: 12,
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    '@media (max-width: 700px)': { display: 'none' },
  },
  '&.mobile': {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    div: { display: 'flex', flexDirection: 'column', gap: 6 },
    '@media (min-width: 701px)': { display: 'none' },
  },
});
