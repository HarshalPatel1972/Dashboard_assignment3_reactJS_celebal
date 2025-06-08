import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

// Mock data for notifications
const notificationData = [
  {
    message: "New order has been placed",
    time: "9:08 AM",
    icon: "🛒",
    iconBg: "#0F75D2", // Blue
  },
  {
    message: "You have new message",
    time: "11:56 AM",
    icon: "✉️",
    iconBg: "#00C292", // Green
  },
  {
    message: "Your order is placed",
    time: "4:39 PM",
    icon: "📦",
    iconBg: "#FF5C8E", // Red
  },
  {
    message: "New registration received",
    time: "1:12 AM",
    icon: "📝",
    iconBg: "#7352FF", // Purple
  },
];

const Notification = () => {
  const { handleClick, setIsClicked } = useStateContext();

  // Function to close the notification popover
  const handleCloseNotifications = () => {
    setIsClicked({
      chat: false,
      cart: false,
      userProfile: false,
      notification: false,
      themeSettings: false,
    });
  };

  return (
    <div className="popover-panel notification-panel">
      <div className="popover-header">
        <p className="font-semibold text-xl">Notifications</p>
        <button
          type="button"
          onClick={handleCloseNotifications}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="close-popover-btn"
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="notifications-list">
        {notificationData.map((item, index) => (
          <div key={index} className="notification-item">
            <div
              className="notification-icon-wrapper"
              style={{ backgroundColor: item.iconBg }}
            >
              <span className="notification-icon">{item.icon}</span>
            </div>
            <div>
              <p className="font-semibold">{item.message}</p>
              <p className="text-gray-500 text-sm">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
