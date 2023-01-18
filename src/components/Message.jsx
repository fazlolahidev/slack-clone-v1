import React from "react";

const Message = ({ message, username, date, time, userPhoto }) => {

  return (
    <div className="flex items-center gap-2">
      <img
        src={userPhoto}
        alt="user image"
        className="w-12 h-12 rounded-xl object-cover"
      />

      <div>
        <h4>
          <span className="text-sm font-bold">{username}</span>{" "}
          <span className="text-[10px] text-gray-600">{time}</span>{" "}
        </h4>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Message;
