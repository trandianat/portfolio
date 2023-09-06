import { css } from '@emotion/react';
import { Color, colors } from 'utils/constants';

export const detection = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  button: { width: 'fit-content' },
  '.error': { color: Color.RED, font: '.875rem var(--sans)' },
});

export const dropdown = css({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  label: { whiteSpace: 'nowrap' },
});

export const image = css({
  position: 'relative',
  width: 'fit-content',
  img: { display: 'block', height: 200 },
  '#canvas': { left: 0, position: 'absolute', top: 0 },
});

export const objects = {
  display: 'grid',
  font: '.875rem var(--sans)',
  gap: '8px 18px',
  gridTemplateColumns: 'auto auto',
  width: 'fit-content',
  '.heading': { fontWeight: 600, letterSpacing: 0.5 },
  '.divider': {
    backgroundColor: Color.BLACK,
    gridColumn: '1 / span 2',
    height: 1,
  },
};

export const object = (index: number) => ({
  color: colors[index],
  fontWeight: 600,
});
