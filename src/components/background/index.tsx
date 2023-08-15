import React from 'react';
import * as styles from 'components/background/styles';
import { Color } from 'utils/types';

export const Background = ({
  children,
  color = Color.WHITE,
}: React.PropsWithChildren<{ color?: Color }>): JSX.Element => {
  return (
    <div css={styles.background(color)}>
      <div css={styles.container}>{children}</div>
    </div>
  );
};
