import { css } from '@emotion/react';
import { Color } from 'utils/constants';

export const navigation = css({
  backgroundColor: Color.BLACK,
  border: `1px solid ${Color.BLACK}`,
  boxShadow: 'var(--shadow)',
  display: 'flex',
  margin: '-48px 0 36px',
  position: 'sticky',
  textAlign: 'center',
  top: 0,
  zIndex: 1,
  a: {
    color: Color.WHITE,
    flexGrow: 1,
    fontWeight: 'normal',
    padding: '12px 0',
    textDecoration: 'none',
    svg: { fill: Color.WHITE },
    '&.active': {
      backgroundColor: Color.WHITE,
      color: Color.BLACK,
      fontWeight: 500,
      pointerEvents: 'none',
    },
    ':hover': {
      backgroundColor: Color.WHITE,
      color: Color.BLACK,
      svg: { fill: Color.BLACK },
    },
  },
  '@media (max-width: 950px)': { '.external': { display: 'none' } },
  '@media (max-width: 700px)': { a: { fontSize: '.875rem' } },
  '@media (max-width: 450px)': {
    flexDirection: 'column',
    a: {
      letterSpacing: 4,
      padding: '10px 0',
      ':nth-of-type(-n + 2)': { borderBottom: `1px solid ${Color.WHITE}` },
    },
  },
});

export const external = { justifyContent: 'center' };

export const scroll = css({
  backgroundColor: Color.WHITE,
  border: `1px solid ${Color.BLACK}`,
  borderRadius: 20,
  bottom: 16,
  color: Color.BLACK,
  fontSize: '1.5rem',
  fontWeight: 300,
  padding: '6px 11px',
  position: 'fixed',
  right: 16,
  ':hover': {
    backgroundColor: Color.BLACK,
    color: Color.WHITE,
  },
});
