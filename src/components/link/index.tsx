import { PropsWithChildren, ReactNode } from 'react';
import * as styles from 'components/link/styles';
import { Position, Size } from 'utils/constants';

export const Link = ({
  children,
  icon,
  iconGap = Size.SMALL,
  iconPosition = Position.RIGHT,
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
  <a
    css={styles.link(iconGap, iconPosition)}
    href={url}
    target="_blank"
    {...rest}
  >
    {iconPosition === Position.LEFT && <span className="icon">{icon}</span>}
    <span className="text">{text}</span>
    {iconPosition === Position.RIGHT && <span className="icon">{icon}</span>}
  </a>
);
