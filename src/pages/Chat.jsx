import React from 'react'

//* Components *//
import ChatDetails from '../components/ChatDetails'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Chat = () => {

  return (
    <div>
      <Header />

      <div className="flex">
        <Sidebar />

        <ChatDetails />
      </div>
    </div>
  )
}

export default Chat