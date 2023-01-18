import React from "react";

//* Router *//
import { useNavigate } from "react-router-dom";

//* Firesotore *//
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const SidebarOption = ({ id, Icon, title, addChannel }) => {
  const navigate = useNavigate();

  const addChannelFn = async () => {
    const channelName = prompt("Please add channel name: ");

    if (channelName) {
      const docRef = await addDoc(collection(db, "channels"), {
        name: channelName
      });
    }
  };

  const selectChannelFn = () => {
    if (id) {
      navigate(`/channels/${id}`);
    }
  };

  return (
    <div
      onClick={addChannel ? addChannelFn : selectChannelFn}
      className="hover:bg-[#340e36] hover:opacity-90 cursor-pointer p-2 text-sm flex items-center"
    >
      {Icon ? (
        <h3 className="flex items-center">
          <Icon sx={{ width: 18, height: 18 }} className="mr-2" />{" "}
          <span>{title}</span>
        </h3>
      ) : (
        <h3 className="flex items-center">
          <span className="mx-2 mt-1">#</span> <span>{title}</span>
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
