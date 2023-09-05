import { css } from '@emotion/react';

export const detection = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  img: { height: 'auto', width: '100%' },
  '.select': {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    label: { whiteSpace: 'nowrap' },
  },
  '@media (min-width: 401px)': {
    button: { width: 'fit-content' },
    img: { height: 200, width: 'fit-content' },
  },
});
