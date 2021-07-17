import { useEffect } from "react";
import { useToastNotification } from "../../hooks/ToastNotificationContext";
import { Container } from "./styles";

interface ToastNotificationProps {
  notification: {
    message: string;
    type: "success" | "error";
  };
}

export function ToastNotification({ notification }: ToastNotificationProps) {
  const { hiddenToastNotification, showNotification } = useToastNotification();

  useEffect(() => {
    setTimeout(() => {
      hiddenToastNotification();
    }, 5 * 1000);
  }, [hiddenToastNotification]);

  return showNotification ? (
    <Container type={notification.type}>{notification.message}</Container>
  ) : (
    <></>
  );
}
