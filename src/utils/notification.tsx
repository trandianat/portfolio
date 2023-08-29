import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Notification } from 'components/notification';
import { Status } from 'utils/constants';

type NotificationType = {
  message: JSX.Element | string;
  variant: Status;
};

export const NotificationContext = createContext({
  notify: (_: NotificationType) => {},
});

export default function NotificationProvider({ children }: PropsWithChildren) {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const latestNotification: NotificationType =
    notifications[notifications.length - 1];

  const context = {
    notify: useCallback(
      (notification: NotificationType) =>
        setNotifications([...notifications, notification]),
      []
    ),
  };

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (notifications.length) {
      interval = setInterval(
        () => setNotifications(notifications.slice(1)),
        3000
      );
    }
    return () => clearInterval(interval);
  }, [notifications]);

  return (
    <NotificationContext.Provider value={context}>
      {children}
      {latestNotification && (
        <Notification variant={latestNotification.variant}>
          {latestNotification.message}
        </Notification>
      )}
    </NotificationContext.Provider>
  );
}
