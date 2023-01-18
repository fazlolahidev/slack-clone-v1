import React, { useEffect, useState } from "react";

//* Components *//
import SidebarOption from "./SidebarOption";
import LineBreak from "./LineBreak";

//* MUI *//
import Avatar from "@mui/material/Avatar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

//* Firestore *//
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

//* Firebase Hooks *//
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

//* Firebase *//
import { signOut } from "firebase/auth";
import Logout from "./Logout";

const Sidebar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "channels"), (doc) => {
      const channelsArray = [];

      doc.forEach((data) => {
        channelsArray.push({ id: data.id, name: data.data().name });
      });

      setChannels(channelsArray);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleShowLogout = () => {
    setShowLogout((pre) => !pre);
  };

  return (
    <aside className="sidebarSize text-white bg-primary-slack">
      <LineBreak sideTop />
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-3">
        {/* Left Side */}
        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-1 relative">
            <span className="truncate w-36">{user?.email}</span>
            <KeyboardArrowDownIcon
              onClick={handleShowLogout}
              fontSize="small"
              className="cursor-pointer"
            />
            <Logout show={showLogout} />
          </h2>
          <h3 className="flex items-center text-sm">
            <FiberManualRecordIcon
              className="text-green-600"
              sx={{ width: 12, height: 12 }}
            />
            <span> {user?.displayName}</span>
            <Avatar
              src={user.photoURL}
              sx={{ width: 22, height: 22, marginLeft: "8px" }}
            />
          </h3>
        </div>

        {/* Right Side */}
        <div>
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
            <CreateIcon fontSize="small" className="text-black" />
          </div>
        </div>
      </div>

      <LineBreak />

      <SidebarOption title={"Threads"} Icon={InsertCommentIcon} />
      <SidebarOption title={"Mentions & reactions"} Icon={InboxIcon} />
      <SidebarOption title={"Saved items"} Icon={DraftsIcon} />
      <SidebarOption title={"Channel browser"} Icon={BookmarkBorderIcon} />
      <SidebarOption title={"People & user groups"} Icon={PeopleAltIcon} />
      <SidebarOption title={"Apps"} Icon={AppsIcon} />
      <SidebarOption title={"File browser"} Icon={FileCopyIcon} />

      <LineBreak />
      <SidebarOption title={"Channels"} Icon={ExpandMoreIcon} />
      <LineBreak />

      <SidebarOption title={"Add channle"} Icon={AddIcon} addChannel />
      {/* Connect to the db and show all channels */}
      {channels?.map((item) => {
        return <SidebarOption key={item.id} title={item.name} id={item.id} />;
      })}
    </aside>
  );
};

export default Sidebar;
