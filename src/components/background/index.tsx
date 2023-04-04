import React from 'react';
import * as styles from 'components/background/styles';
import { Variant } from 'utils/types';

export const Background = ({ children }: any): JSX.Element => {
  return (
    <div css={styles.background}>
      <div css={styles.container}>{children}</div>
    </div>
  );
};
