import React, { useState } from "react";

//* Firestore *//
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

//* Firebase Hooks *//
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const ChatInput = ({ channelName, channelId }) => {
  const [inputValue, setInputValue] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    const docData = {
      message: inputValue,
      timestamp: Timestamp.fromDate(new Date()),
      userPhoto: user?.photoURL,
      username: user?.displayName,
    };

    addDoc(collection(db, "channels", `${channelId}`, "messages"), docData);
    setInputValue('')
  };

  return (
    <div className="mt-auto border-black p-1 flex items-center justify-center">
      <form onSubmit={sendMessage} className="p-2">
        <input
          type="text"
          placeholder={`Message #${channelName?.toLowerCase()}`}
          onChange={(e) => setInputValue(e.target.value)}
          className="border w-[50vw] p-2"
          value={inputValue}
        />
        <button type="submit" className="hidden">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
