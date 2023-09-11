import { css } from '@emotion/react';
import { Color } from 'utils/constants';

export const notes = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  '@media (min-width: 701px)': { button: { width: 'fit-content' } },
});

export const cards = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const card = css({
  backgroundColor: Color.WHITE,
  border: `1px solid ${Color.BLACK}`,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: '12px 16px',
  position: 'relative',
  h3: {
    fontWeight: 600,
    width: 'calc(100% - 32px)',
    wordWrap: 'break-word',
    ':hover': { backgroundColor: Color.GRAY },
  },
  input: {
    font: '1rem var(--serif)',
    fontWeight: 600,
    padding: '2px 6px',
    width: 'calc(100% - 48px)',
  },
  textarea: { resize: 'none' },
  '.description': {
    wordWrap: 'break-word',
    ':hover': { backgroundColor: Color.GRAY },
  },
  '.trash': {
    borderRadius: 16,
    height: 16,
    padding: 8,
    position: 'absolute',
    right: 12,
    top: 8,
    ':hover': { backgroundColor: Color.GRAY, cursor: 'pointer' },
  },
  ':hover': {
    boxShadow: 'var(--shadow)',
  },
});

export const footer = {
  font: '.75rem var(--sans)',
  span: { fontWeight: 500 },
};

export const empty = {
  backgroundColor: Color.WHITE,
  border: `1px solid ${Color.BLACK}`,
  boxShadow: 'var(--shadow)',
  padding: '12px 16px',
};
