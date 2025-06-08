import React from "react";
import { MdOutlineCancel } from "react-icons/md"; // Close icon
import { useStateContext } from "../contexts/ContextProvider";

// Mock data for user profile items
const userProfileData = [
  {
    icon: "👤",
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: "✉️",
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 246)",
  },
  {
    icon: "💳",
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 0)",
  },
];

const UserProfile = () => {
  const { currentColor, setIsClicked } = useStateContext();

  // Function to close the user profile popover
  const handleCloseUserProfile = () => {
    setIsClicked({
      chat: false,
      cart: false,
      userProfile: false,
      notification: false,
      themeSettings: false,
    });
  };

  return (
    <div className="popover-panel user-profile-panel">
      <div className="popover-header">
        <p className="font-semibold text-xl">User Profile</p>
        <button
          type="button"
          onClick={handleCloseUserProfile}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="close-popover-btn"
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="user-info-header">
        <img
          className="rounded-full w-20 h-20"
          src="https://api.dicebear.com/7.x/pixel-art/svg?seed=HarshalLarge&size=80" // Larger avatar for profile
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl"> Harshal</p>
          <p className="text-gray-500 text-sm"> Administrator </p>
          <p className="text-gray-500 text-sm font-semibold">
            {" "}
            mygmail@gmail.com{" "}
          </p>
        </div>
      </div>

      <div className="user-profile-actions">
        {userProfileData.map((item, index) => (
          <div key={index} className="user-profile-action-item">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="user-profile-icon-btn"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          className="place-order-btn" // Reusing button style from cart
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
