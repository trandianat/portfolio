import { css } from '@emotion/react';
import { Color } from 'utils/types';

export const job = (indent: boolean) =>
  css({
    display: 'flex',
    gap: 16,
    ...(indent && { '@media (min-width: 451px)': { paddingLeft: 24 } }),
    '@media (max-width: 450px)': { flexDirection: 'column', gap: 2 },
  });

export const verticalDates = css({
  display: 'flex',
  gap: 12,
  '@media (max-width: 450px)': { display: 'none' },
});

export const verticalRange = css({
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 500,
  justifyContent: 'space-between',
  minWidth: 70,
  padding: '8px 0',
  textAlign: 'right',
  whiteSpace: 'nowrap',
});

export const verticalTimeline = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 0',
});

export const horizontalDates = css({
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 500,
  gap: 2,
  '@media (min-width: 451px)': { display: 'none' },
});

export const verticalLine = {
  backgroundColor: Color.DARK_GRAY,
  height: '100%',
  width: 2,
};

export const horizontalRange = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const horizontalTimeline = {
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-between',
};

export const horizontalLine = {
  backgroundColor: Color.DARK_GRAY,
  height: 2,
  width: '100%',
};

export const circle = {
  backgroundColor: Color.WHITE,
  border: `2px solid ${Color.DARK_GRAY}`,
  borderRadius: 8,
  minHeight: 8,
  minWidth: 8,
};

export const role = css({
  display: 'flex',
  flexDirection: 'column',
});

export const skills = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  margin: '6px 0',
});

export const skill = css({
  backgroundColor: Color.BLACK,
  borderRadius: 12,
  color: Color.WHITE,
  font: '.685rem var(--sans)',
  letterSpacing: 1,
  padding: '2px 8px',
  textTransform: 'uppercase',
});
