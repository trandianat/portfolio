import { css } from '@emotion/react';
import { Color } from 'utils/constants';

export const navigation = css({
  backgroundColor: Color.BLACK,
  border: `1px solid ${Color.BLACK}`,
  boxShadow: `0 4px 8px -2px ${Color.DARK_GRAY}`,
  display: 'flex',
  margin: '-48px 0 36px',
  position: 'sticky',
  textAlign: 'center',
  top: 0,
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
  '@media (max-width: 700px)': {
    fontSize: '.875rem',
    a: { ':last-child': { display: 'none' } },
  },
  '@media (max-width: 450px)': {
    flexDirection: 'column',
    a: {
      letterSpacing: 4,
      padding: '10px 0',
      ':nth-of-type(-n + 2)': { borderBottom: `1px solid ${Color.WHITE}` },
      '&.active': { fontWeight: 600 },
    },
  },
});

export const external = {
  alignItems: 'center',
  display: 'flex',
  gap: 6,
  justifyContent: 'center',
};
