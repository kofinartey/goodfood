import { useCallback, useState } from "react";

export function useNotifications() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notifications = [
    {
      id: 1,
      message: "You have an update",
      timeSince: "1 hour ago",
      read: true,
    },
    { id: 2, message: "Second Update", timeSince: "4 hour ago", read: true },
    { id: 3, message: "Third Update", timeSince: "2 hour ago", read: false },
    { id: 4, message: "Fourth Update", timeSince: "1 hour ago", read: true },
  ];

  const unreadNotifications = notifications.filter((n) => !n.read);

  const handleNotificationButtonClick = useCallback(() => {
    setIsNotificationsOpen(!isNotificationsOpen);
  }, [isNotificationsOpen]);

  return {
    data: {
      isNotificationsOpen,
      notifications,
      unreadNotifications,
    },
    actions: {
      handleNotificationButtonClick,
    },
  };
}
