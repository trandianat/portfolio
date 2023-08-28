import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Notification } from 'components/notification';
import { Status } from './constants';

export const NotificationContext = createContext({
  addNotification: (notification: any) => console.log(notification),
  notification: null,
  removeNotification: () => {},
});

export default function NotificationProvider({ children }: PropsWithChildren) {
  const [notification, setNotification] = useState(null);

  const addNotification = (notification: any) => setNotification(notification);
  const removeNotification = () => setNotification(null);

  const context = {
    addNotification: useCallback(
      (notification: any) => addNotification(notification),
      []
    ),
    notification,
    removeNotification: useCallback(() => removeNotification(), []),
  };

  useEffect(() => {
    let interval: any;
    if (notification) {
      interval = setInterval(() => removeNotification(), 2000);
    }
    return () => clearInterval(interval);
  }, [notification]);

  return (
    <NotificationContext.Provider value={context}>
      {children}
      {notification && (
        <Notification variant={Status.ERROR}>{notification}</Notification>
      )}
    </NotificationContext.Provider>
  );
}
