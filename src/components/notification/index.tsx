import { PropsWithChildren } from 'react';
import * as styles from 'components/notification/styles';
import { Status } from 'utils/constants';

export const Notification = ({
  children,
  variant = Status.DEFAULT,
}: PropsWithChildren<{ variant?: Status }>): JSX.Element => {
  return <div css={styles.notification(variant)}>{children}</div>;
};
