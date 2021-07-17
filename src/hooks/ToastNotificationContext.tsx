import { createContext, ReactNode, useContext, useState } from "react";

interface ToastNotificationTypes {
  notification: Notification;
  showNotification: boolean;
  showToastNotification: (data: Notification) => void;
  hiddenToastNotification: () => void;
}

interface Notification {
  message: string;
  type: "success" | "error";
}

interface ToastNotificationProviderProps {
  children: ReactNode;
}

const ToastNotificationContext = createContext({} as ToastNotificationTypes);

export function ToastNotificationProvider({
  children,
}: ToastNotificationProviderProps) {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({} as Notification);

  function showToastNotification(data: Notification) {
    setShowNotification(true);
    setNotification(data);
  }

  function hiddenToastNotification() {
    setShowNotification(false);
  }

  return (
    <ToastNotificationContext.Provider
      value={{
        notification,
        showNotification,
        showToastNotification,
        hiddenToastNotification,
      }}
    >
      {children}
    </ToastNotificationContext.Provider>
  );
}

export function useToastNotification() {
  const context = useContext(ToastNotificationContext);
  return context;
}
