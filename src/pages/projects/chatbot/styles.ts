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
  height: 200,
  lineHeight: '18px',
  overflow: 'auto',
  padding: '12px 12px 16px',
  '.message': {
    borderRadius: 18,
    maxWidth: '75%',
    padding: '8px 16px',
    width: 'fit-content',
    '&.auto': {
      alignSelf: 'end',
      border: `1.5px solid ${Color.RED}`,
      color: Color.RED,
      fontWeight: 500,
    },
    '&.bot': {
      backgroundColor: Color.GRAY,
      border: `1px solid ${Color.DARK_GRAY}`,
    },
    '&.user': {
      alignSelf: 'end',
      backgroundColor: Color.BLUE,
      border: `1px solid ${Color.NAVY}`,
      color: Color.WHITE,
      textAlign: 'right',
    },
  },
});

export const inputs = css({
  backgroundColor: Color.GRAY,
  boxShadow: `0 -1px 8px -2px ${Color.DARK_GRAY}`,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'space-between',
  padding: 12,
  input: {
    flexGrow: 1,
    '@media (min-width: 451px)': { flexGrow: 3 },
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
