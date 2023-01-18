import React from "react";

//* Images *// 
import chatImg from '../images/selectImg.png'

const SelectChat = () => {
  return (
    <div className="chatSize flex flex-col gap-10 text-4xl">
      <p className="textGradient text-center font-bold" >Select a Channel to start your Chat</p>
      <div className="flex justify-center" >
        <img src={chatImg} alt="selec image for selection" className="w-[500px]" />
      </div>
    </div>
  );
};

export default SelectChat;
