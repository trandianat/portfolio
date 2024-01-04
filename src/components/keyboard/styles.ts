import { css } from '@emotion/react';
import { Color } from 'utils/constants';

export const keyboard = css({
  display: 'flex',
  flexDirection: 'column',
  font: '1.25rem var(--sans)',
  gap: 4,
  width: 'fit-content',
  '.row': {
    display: 'flex',
    gap: 4,
    justifyContent: 'center',
    '.letter': {
      borderRadius: 4,
      height: 32,
      padding: 4,
      width: 28,
      '&.action': {
        width: 'auto',
        '@media (max-width: 450px)': {
          width: 80,
          '&.primary': { display: 'none' },
        },
      },
      '&.used': { backgroundColor: Color.WHITE, color: Color.BLACK },
    },
  },
  '@media (max-width: 700px)': { margin: '0 auto' },
  '@media (min-width: 451px)': { '.row-4': { display: 'none' } },
  '@media (max-width: 400px)': { gap: 2, '.row': { gap: 2 } },
});
