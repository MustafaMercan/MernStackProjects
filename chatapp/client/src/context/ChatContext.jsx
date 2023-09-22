import { createContext, useEffect, useState } from "react";
import { getRequest, baseUrl } from "../services/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChats, setUserChats] = useState(null) 
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);

    useEffect(() => {
        
        const getUserChat = async()=> {
            if(user?._id){
                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
                setIsUserChatsLoading(false);

                if(response.error){
                    return setUserChatsError(response);
                }
                setUserChats(response);
            }
        }
        getUserChat();

    },[user])
    return <ChatContext.Provider value={{
        userChats,
        isUserChatsLoading,
        userChatsError
    }}>{children}</ChatContext.Provider>
}