import { Color } from 'utils/types';

export const auth = {
  'button.amplify-button': { marginTop: 18 },
  'button.amplify-button--disabled': {
    backgroundColor: Color.DARK_GRAY,
    border: `1px solid ${Color.DARK_GRAY}`,
    ':hover': { color: Color.WHITE, cursor: 'default' },
  },
  'button.amplify-field__show-password': { display: 'none' },
  'fieldset.amplify-flex': {
    border: 0,
    display: 'flex',
    gap: 16,
    margin: 0,
    padding: 0,
  },
  legend: { fontSize: '1.75rem' },
  'svg.amplify-loader': { display: 'none' },
};
