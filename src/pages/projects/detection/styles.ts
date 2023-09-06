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

export const results = css({
  display: 'flex',
  gap: 20,
  '@media (max-width: 700px)': { flexDirection: 'column', gap: 16 },
});

export const image = css({
  position: 'relative',
  width: 'fit-content',
  img: { display: 'block', height: 200 },
  '#canvas': { left: 0, position: 'absolute', top: 0 },
});

export const objects = {
  backgroundColor: Color.WHITE,
  border: `1px solid ${Color.DARK_GRAY}`,
  display: 'grid',
  font: '.875rem var(--sans)',
  gap: '8px 18px',
  gridTemplateColumns: 'auto auto',
  height: 'fit-content',
  padding: 16,
  width: 'fit-content',
  hr: { gridColumn: '1 / span 2', margin: '2px 0' },
  '.heading': { fontWeight: 500, letterSpacing: 0.5 },
};

export const object = (index: number) => ({
  color: colors[index],
  fontWeight: 500,
});
