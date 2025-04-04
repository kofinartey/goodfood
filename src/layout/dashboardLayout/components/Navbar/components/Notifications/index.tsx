import { NotificationIcon } from "../../../../../../assets/icons";

export function Notifications() {
  const notifications = [{ id: 1, message: "You have update", read: false }];

  const unreadNotifications = notifications.filter((n) => !n.read);

  return (
    <div className="relative">
      <NotificationIcon height={20} width={20} />
      {unreadNotifications.length > 0 ? (
        <div className="w-3 h-3 rounded-full bg-[#EC5252] absolute top-[-5px] right-0 border-2 border-white"></div>
      ) : null}
    </div>
  );
}
