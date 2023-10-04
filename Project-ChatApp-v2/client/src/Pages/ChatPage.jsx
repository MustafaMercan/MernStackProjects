import React from 'react'

import AvailableUsersComponent from "../Components/availableUsersComponent"
import { useParams } from 'react-router-dom'
import ChatUsers from '../Components/chatUsers'
import { socket } from '../socket/socket'
import { useEffect } from 'react'


const ChatPage = () => {




  return (
    <div>
        <AvailableUsersComponent/>
        <ChatUsers/>
      
    </div>
  )
}

export default ChatPage
