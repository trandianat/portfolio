import { css } from '@emotion/react';
import { Color } from 'utils/types';

export const header = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 36,
});

export const divider = { backgroundColor: Color.BLACK, height: 2 };

export const name = { display: 'flex', justifyContent: 'space-between' };

export const logo = css({
  backgroundColor: Color.BLACK,
  borderRadius: '50%',
  color: Color.WHITE,
  display: 'flex',
  fontSize: '2rem',
  height: 100,
  letterSpacing: 3,
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
});

export const link = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: 6,
  '@media (min-width: 701px)': { display: 'none' },
};
