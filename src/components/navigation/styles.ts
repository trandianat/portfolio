import { Color } from 'utils/types';

export const navigation = {
  backgroundColor: Color.BLACK,
  border: `1px solid ${Color.BLACK}`,
  display: 'flex',
  justifyContent: 'space-between',
  margin: '-48px 0 36px',
  a: {
    color: Color.WHITE,
    padding: '12px 48px',
    textDecoration: 'none',
    ':hover': { backgroundColor: Color.WHITE, color: Color.BLACK },
  },
};
