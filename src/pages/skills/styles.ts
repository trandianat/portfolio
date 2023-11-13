import { css } from '@emotion/react';

export const skills = css({
  display: 'flex',
  fontFamily: 'var(--sans)',
  gap: 48,
  lineHeight: '24px',
  '@media (max-width: 450px)': { flexDirection: 'column', gap: 24 },
});
