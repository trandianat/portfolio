import { css } from '@emotion/react';
import { Color } from 'utils/constants';

export const chatbot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const conversation = css({
  border: `1px solid ${Color.BLACK}`,
  display: 'flex',
  flexDirection: 'column',
});

export const messages = css({
  backgroundColor: Color.WHITE,
  display: 'flex',
  flexDirection: 'column',
  font: '.875rem var(--sans)',
  gap: 12,
  height: 250,
  lineHeight: '18px',
  overflow: 'auto',
  padding: 12,
  '.message': {
    borderRadius: 18,
    padding: '8px 16px',
    width: 'fit-content',
    '&.auto': {
      border: `1.5px solid ${Color.RED}`,
      color: Color.RED,
      fontWeight: 500,
      textAlign: 'right',
    },
    '&.bot': { backgroundColor: Color.GRAY, textAlign: 'left' },
    '&.user': {
      alignSelf: 'end',
      backgroundColor: Color.BLUE,
      color: Color.WHITE,
      textAlign: 'right',
    },
  },
});

export const inputs = css({
  boxShadow: `0 -1px 8px -2px ${Color.DARK_GRAY}`,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'space-between',
  padding: 12,
  input: {
    flexGrow: 1,
    '@media (min-width: 451px)': { flexGrow: 2 },
    '@media (max-width: 450px)': { width: '100%' },
  },
  '.buttons': {
    display: 'flex',
    flexGrow: 1,
    gap: 8,
    button: { flexGrow: 1 },
    '@media (max-width: 300px)': { flexDirection: 'column' },
  },
});
