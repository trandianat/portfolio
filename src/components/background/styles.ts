import { css } from '@emotion/react';
import { Color } from 'utils/types';

export const background = (backgroundColor: Color) => ({
  backgroundColor,
  padding: '48px 0',
  width: '100%',
});

export const container = {
  margin: '0 auto',
  width: 'var(--desktop)',
  '@media (max-width: 950px)': { width: 650 },
  '@media (max-width: 700px)': { width: 400 },
  '@media (max-width: 450px)': { width: '80%' },
};