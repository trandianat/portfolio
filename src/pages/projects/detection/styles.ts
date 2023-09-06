import { css } from '@emotion/react';
import { Color } from 'utils/constants';

export const detection = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  img: { display: 'block', height: 'auto', width: '100%' },
  '.selection': {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    label: { whiteSpace: 'nowrap' },
  },
  '.result': { height: 200, position: 'relative' },
  '#canvas': { height: '100%', left: 0, position: 'absolute', top: 0 },
  '.confidence': { display: 'flex', flexDirection: 'column', gap: 4 },
  '.error': { color: Color.RED },
  '.text': { font: '.875rem var(--sans)' },
  '@media (min-width: 401px)': {
    button: { width: 'fit-content' },
    img: { height: '100%', width: 'fit-content' },
  },
});
