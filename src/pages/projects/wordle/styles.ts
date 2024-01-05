import { Color } from 'utils/constants';

export const wordle = {
  display: 'grid',
  gap: 16,
  '.description': { display: 'grid', gap: 8 },
  '.game': {
    display: 'grid',
    gap: 16,
    width: 'fit-content',
    '.grid': {
      display: 'grid',
      gap: 6,
      margin: '0 auto',
      '.row': {
        display: 'grid',
        gap: 6,
        gridTemplateColumns: 'repeat(5, min-content)',
        '.space': {
          alignItems: 'center',
          backgroundColor: Color.WHITE,
          border: `1px solid ${Color.BLACK}`,
          display: 'grid',
          font: '2rem var(--sans)',
          height: 64,
          justifyContent: 'center',
          width: 64,
          '&.correct': { backgroundColor: Color.LIGHT_GREEN },
          '&.incorrect': { backgroundColor: Color.DARK_GRAY },
          '&.incorrect-space': { backgroundColor: Color.YELLOW },
          '@media (max-width: 450px)': {
            fontSize: '1.5rem',
            height: 48,
            width: 48,
          },
        },
      },
    },
    '.message': {
      background: Color.WHITE,
      border: `1px solid ${Color.BLACK}`,
      display: 'grid',
      font: '.875rem var(--sans)',
      gap: 12,
      gridTemplateColumns: 'auto',
      padding: 16,
      '.retry': {
        display: 'grid',
        gap: 12,
        '.actions': {
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(2, 1fr)',
          '@media (max-width: 450px)': { gridTemplateColumns: 'auto' },
        },
      },
    },
    '@media (max-width: 700px)': {
      width: '100%',
      '.grid': { margin: '0 auto' },
    },
  },
};
