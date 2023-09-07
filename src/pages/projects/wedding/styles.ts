import { css } from '@emotion/react';

export const wedding = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  h3: { fontFamily: 'var(--serif-italic)', marginBottom: -8 },
  '.images': {
    display: 'flex',
    gap: 12,
    img: { display: 'block', flexGrow: 1, width: '100%' },
    '&.desktop': { '@media (max-width: 950px)': { flexDirection: 'column' } },
    '&.mobile': {
      '@media (min-width: 951px)': { img: { maxHeight: 300 } },
      '@media (max-width: 350px)': {
        flexDirection: 'column',
        img: { maxHeight: 'none' },
      },
    },
  },
});
