import { css } from '@emotion/react';
import { Color } from 'utils/types';

export const navigation = css({
  backgroundColor: Color.BLACK,
  border: `1px solid ${Color.BLACK}`,
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
    ':hover': {
      backgroundColor: Color.WHITE,
      color: Color.BLACK,
      svg: { fill: Color.BLACK },
    },
  },
  '@media (max-width: 700px)': {
    fontSize: '.825rem',
    a: { ':last-child': { display: 'none' } },
  },
  '@media (max-width: 450px)': {
    flexDirection: 'column',
    a: {
      letterSpacing: 4,
      ':nth-child(-n + 2)': { borderBottom: `1px solid ${Color.WHITE}` },
    },
  },
});

export const external = {
  alignItems: 'center',
  display: 'flex',
  gap: 6,
  justifyContent: 'center',
};
