import { Color } from 'utils/types';

export const navigation = {
  backgroundColor: Color.BLACK,
  display: 'flex',
  gap: 24,
  justifyContent: 'space-between',
  margin: '-48px 0 36px',
  padding: '12px 48px',
  a: {
    color: Color.WHITE,
    textDecoration: 'none',
    ':hover': { textDecoration: 'underline' },
  },
};
