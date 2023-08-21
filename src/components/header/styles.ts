import { css } from '@emotion/react';
import { Color } from 'utils/types';

export const header = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 36,
});

export const divider = { backgroundColor: Color.BLACK, height: 2 };

export const name = css({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 700px)': { flexDirection: 'column-reverse', gap: 24 },
});

export const logo = css({
  backgroundColor: Color.BLACK,
  borderRadius: '50%',
  color: Color.WHITE,
  display: 'flex',
  fontSize: '2rem',
  height: 100,
  letterSpacing: 3,
  minHeight: 100,
  minWidth: 100,
  width: 100,
  '.content': {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    margin: 'auto',
  },
  '.dot': {
    backgroundColor: Color.WHITE,
    borderRadius: '50%',
    height: 4,
    margin: '0 auto',
    width: 4,
  },
  '.line': {
    backgroundColor: Color.WHITE,
    height: 1,
    margin: '0 auto',
    width: 24,
  },
  '@media (max-width: 700px)': { margin: '0 auto' },
});

export const link = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: 6,
  '@media (min-width: 701px)': { display: 'none' },
};
