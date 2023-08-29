import { css } from '@emotion/react';
import { Color, Status } from 'utils/constants';
import { color } from 'utils/map';

export const notification = (variant: Status) =>
  css({
    backgroundColor: Color.WHITE,
    border: `1px solid ${color(variant)}`,
    borderLeft: `8px solid ${color(variant)}`,
    borderRadius: 6,
    bottom: 24,
    boxShadow: 'var(--shadow)',
    color: color(variant),
    font: '.875rem var(--sans)',
    left: 24,
    maxWidth: 'calc(80% - 12px)',
    padding: '12px 16px',
    position: 'fixed',
    wordWrap: 'break-word',
  });
