import { css } from '@emotion/react';
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

export const projects = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const card = {
  backgroundColor: Color.WHITE,
  border: `1px solid ${Color.BLACK}`,
  display: 'flex',
  fontWeight: 'normal',
  gap: 12,
  padding: 12,
  textDecoration: 'none',
  svg: { minHeight: 64, minWidth: 64 },
  '.name': { font: '1.5rem var(--serif-italic)', letterSpacing: 1 },
  '.description': { font: '.875rem var(--sans)' },
  ':hover': { '.name': { textDecoration: 'underline' } },
};

export const project = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});
