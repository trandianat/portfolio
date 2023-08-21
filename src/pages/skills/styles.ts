import { css } from '@emotion/react';

export const skills = css({
  display: 'flex',
  gap: 48,
  '@media (max-width: 405px)': { flexDirection: 'column', gap: 24 },
});
