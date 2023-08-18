import { css } from '@emotion/react';
import { Color } from 'utils/types';

export const navigation = css({
  backgroundColor: Color.BLACK,
  border: `1px solid ${Color.BLACK}`,
  display: 'flex',
  justifyContent: 'space-between',
  margin: '-48px 0 36px',
  a: {
    color: Color.WHITE,
    fontWeight: 'normal',
    padding: '12px 48px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: Color.WHITE,
      color: Color.BLACK,
      svg: { fill: Color.BLACK },
    },
    svg: { fill: Color.WHITE },
  },
  'a.github': { alignItems: 'center', display: 'flex', gap: 6 },
  '@media (max-width: 950px)': {
    a: { padding: '12px 24px' },
  },
  '@media (max-width: 700px)': {
    fontSize: '.825rem',
    a: { ':last-child': { display: 'none' } },
  },
  '@media (max-width: 450px)': {
    flexDirection: 'column',
    a: { borderBottom: `1px solid ${Color.WHITE}` },
  },
  '@media (max-width: 350px)': {
    fontSize: '.825rem',
  },
});
