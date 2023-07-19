import React, { useContext } from "react";
import add from '../img/add.png'
import Input from './Input'
import Messages from './Messages'
import cam from '../img/cam.png'
import more from '../img/more.png'
import { ChatContext } from "../context/ChatContext";



export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
    <div className="chatInfo">
    <span>{data.user?.displayName}</span>
      <div className="chatIcons">
        <img src={cam} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
      </div>
    </div>
   <Messages/>
    <Input/>
  </div>
  )
}

export default Chat