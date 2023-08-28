import { PropsWithChildren, ReactNode } from 'react';
import * as styles from 'components/link/styles';
import { Position, Size } from 'utils/constants';

export const Link = ({
  children,
  icon,
  iconGap = Size.MEDIUM,
  iconPosition,
  text,
  url,
  ...rest
}: PropsWithChildren<{
  icon?: ReactNode;
  iconGap?: Size;
  iconPosition?: Position;
  text: string;
  url: string;
  [rest: string]: unknown;
}>): JSX.Element => (
  <a css={styles.link(iconGap)} href={url} target="_blank" {...rest}>
    {iconPosition === Position.LEFT && icon}
    {text}
    {iconPosition === Position.RIGHT && icon}
  </a>
);
