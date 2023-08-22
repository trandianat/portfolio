import { css } from '@emotion/react';

export const skills = css({
  display: 'flex',
  gap: 48,
  '@media (max-width: 425px)': { flexDirection: 'column', gap: 24 },
});
