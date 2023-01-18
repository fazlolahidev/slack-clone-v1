import React, { useEffect, useState } from "react";

//* Components *//
import Message from "./Message";
import ChatInput from "./ChatInput";

//* Utils *//
import { timestampToDate } from "../utils/timeConverter";
import { sortByDateAsc } from "../utils/sortDate";

//* Router *//
import { useNavigate, useParams } from "react-router-dom";

//* MUI *//
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

//* Firestore *//
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const ChatDetails = () => {
  const navigate = useNavigate();
  const [channelName, setChannelName] = useState(null);
  const [messages, setMessages] = useState([]);
  const { channelId } = useParams();

  let flag = true;

  useEffect(() => {
    setMessages([]);

    const channelMessages = onSnapshot(
      collection(db, "channels", `${channelId}`, "messages"),
      (doc) => {
        const messagesArray = [];

        doc.forEach((data) => {
          const dateTime = timestampToDate(data);
          messagesArray.push({
            id: data.id,
            date: dateTime.shortDate,
            time: dateTime.shortTime,
            fullDate: dateTime.fullDate,
            ...data.data(),
          });
        });

        setMessages(sortByDateAsc(messagesArray));
      }
    );

    const cName = onSnapshot(
      doc(db, "channels", `${channelId}`),
      (doc) => {
        setChannelName(doc?.data()?.name)
      }
    );
  }, [channelId]);


  return (
    <div className="chatSize flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-2">
        {/* Left */}
        <div>
          <h4 className="flex items-center gap-1">
            <strong>#{channelName && channelName}</strong>
            <StarBorderIcon fontSize="small" />
          </h4>
        </div>

        {/* Right */}
        <div>
          <p className="flex items-center gap-1">
            <span>Details</span>
            <InfoOutlinedIcon fontSize="small" />
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 flex flex-col gap-3 overflow-y-auto">
        {messages.map((msg) => {
          return (
            <Message
              key={msg.id}
              username={msg.username}
              userPhoto={msg.userPhoto}
              message={msg.message}
              time={msg.time}
              date={msg.date}
            />
          );
        })}
      </div>

      {/* ChatInput */}
      <ChatInput channelName={channelName} channelId={channelId} />
    </div>
  );
};

export default ChatDetails;
