import { NotificationIcon } from "../../../../../../assets/icons";
import { useNotifications } from "./useNotifications";

export function Notifications() {
  const {
    data: { isNotificationsOpen, notifications, unreadNotifications },
    actions: { handleNotificationButtonClick },
  } = useNotifications();

  return (
    <>
      <div className="relative">
        <button onClick={handleNotificationButtonClick}>
          <NotificationIcon height={20} width={20} />
          {unreadNotifications.length > 0 ? (
            <div className="w-3 h-3 rounded-full bg-[#EC5252] absolute top-[-5px] right-0 border-2 border-white"></div>
          ) : null}
        </button>
      </div>

      {isNotificationsOpen ? (
        <div className="z-10 flex flex-col absolute top-[65px] right-0 bg-[#b9c3ff] text-sm text-w">
          {notifications.map((n, index) => (
            <div
              key={n.id}
              className=""
              onClick={handleNotificationButtonClick}
            >
              <div className="flex justify-between items-center p-6 m-2 rounded-lg hover:bg-[#dfe3fc]">
                <p className="mr-14">{n.message}</p>
                <p>{n.timeSince}</p>
              </div>
              {index + 1 < notifications.length ? (
                <div className="bg-white h-[1px]" />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {/* Options overlay */}
      {isNotificationsOpen ? (
        <div
          className="w-screen h-screen absolute left-0 top-0"
          onClick={handleNotificationButtonClick}
        />
      ) : null}
    </>
  );
}
