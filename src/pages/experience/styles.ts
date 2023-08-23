import { css } from '@emotion/react';

export const experience = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  '.sans': { fontSize: '.875rem', letterSpacing: 1 },
});

export const group = {
  border: '1px dotted black',
  padding: '16px 24px',
  '.company': { fontFamily: 'var(--serif)' },
};

export const groupJobs = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginTop: 22,
});
