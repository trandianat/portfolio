import { css } from '@emotion/react';
import { Color } from 'utils/constants';

export const books = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  '.search': {
    border: `1px solid ${Color.BLACK}`,
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'auto 1fr auto',
    padding: 16,
    '.filter': {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      '#category': { padding: 10 },
    },
    '@media (max-width: 700px)': {
      gridTemplateColumns: 'auto',
      button: { width: 'fit-content' },
    },
  },
  '.books': {
    display: 'grid',
    gap: 12,
    gridTemplateColumns: '1fr',
    '.book': {
      backgroundColor: Color.WHITE,
      border: `1px solid ${Color.BLACK}`,
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'min-content auto',
      padding: 24,
      img: { width: 100 },
      '.details': {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        '.header': {
          display: 'flex',
          gap: 12,
          justifyContent: 'space-between',
          h3: { letterSpacing: 1 },
          p: { font: '.9rem var(--sans)' },
          '.title': { display: 'flex', flexDirection: 'column', gap: 4 },
          '.rank': { fontSize: '2rem' },
        },
        '.purchase': { columnGap: 10, display: 'flex', flexWrap: 'wrap' },
      },
      '@media (max-width: 450px)': {
        gridTemplateColumns: 'auto',
        img: { margin: '0 auto', width: '75%' },
      },
      '@media (max-width: 350px)': { img: { width: '100%' } },
    },
  },
  '.message': {
    backgroundColor: Color.WHITE,
    border: `1px solid ${Color.BLACK}`,
    padding: 16,
  },
});
