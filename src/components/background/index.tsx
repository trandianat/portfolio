import { PropsWithChildren } from 'react';
import * as styles from 'components/background/styles';
import { Color } from 'utils/constants';

export const Background = ({
  children,
  color = Color.WHITE,
}: PropsWithChildren<{ color?: Color }>): JSX.Element => (
  <div css={styles.background(color)}>
    <div css={styles.container}>{children}</div>
  </div>
);
