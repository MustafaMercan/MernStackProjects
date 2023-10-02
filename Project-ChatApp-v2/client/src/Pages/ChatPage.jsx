import React from 'react'

import AvailableUsersComponent from "../Components/availableUsersComponent"
import { useParams } from 'react-router-dom'
import ChatUsers from '../Components/chatUsers'
const ChatPage = () => {
  return (
    <div>
        <AvailableUsersComponent/>
        <ChatUsers/>
      
    </div>
  )
}

export default ChatPage
