import { css } from '@emotion/react';
import { Color } from 'utils/types';

export const job = (indent: boolean) =>
  css({
    display: 'flex',
    gap: 16,
    ...(indent && { paddingLeft: 24 }),
  });

export const dates = { display: 'flex', gap: 12 };

export const range = css({
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 500,
  justifyContent: 'space-between',
  minWidth: 70,
  padding: '8px 0',
  textAlign: 'right',
  whiteSpace: 'nowrap',
});

export const timeline = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 0',
});

export const circle = {
  backgroundColor: Color.WHITE,
  border: `2px solid ${Color.DARK_GRAY}`,
  borderRadius: 8,
  minHeight: 8,
  minWidth: 8,
};

export const line = {
  backgroundColor: Color.DARK_GRAY,
  height: '100%',
  width: 2,
};

export const role = css({
  display: 'flex',
  flexDirection: 'column',
  h2: { fontFamily: 'var(--serif-italic)' },
  ul: { marginTop: 6 },
});
