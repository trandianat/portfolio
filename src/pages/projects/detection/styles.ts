import { css } from '@emotion/react';
import { Color, colors } from 'utils/constants';

export const detection = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  img: { display: 'block', height: 200 },
  '.selection': {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    label: { whiteSpace: 'nowrap' },
  },
  '.result': { position: 'relative', width: 'fit-content' },
  '#canvas': { left: 0, position: 'absolute', top: 0 },
  '.confidence': { display: 'flex', flexDirection: 'column', gap: 4 },
  '.error': { color: Color.RED },
  '.text': { font: '.875rem var(--sans)' },
  '@media (min-width: 401px)': {
    button: { width: 'fit-content' },
  },
});

export const object = (index: number) => ({ color: colors[index] });
