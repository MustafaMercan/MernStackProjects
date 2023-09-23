import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/userChat";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../components/chat/potentialChats"
import ChatBox from "../components/chat/chatBox";

const Chat = () => {

    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateCurrentChat } = useContext(ChatContext);

    return (
        <Container>
            <PotentialChats/>
            {userChats?.length < 1 ? null : (
                <Stack direction="horizontal" gap={4} className="align-items-start">
                    <Stack className="flex-grow-0 messages-box pe-3" gap={3}>
                        {userChats?.map((chat, index) => {
                            return (
                                <div key={index} onClick={() => updateCurrentChat(chat)}>
                                    <UserChat chat={chat} user={user} />
                                </div>
                            )
                        })}
                    </Stack>
                    {isUserChatsLoading && <p>Loading Chats...</p>}
                    <ChatBox/>


                </Stack>)}
        </Container>
    );
}

export default Chat;