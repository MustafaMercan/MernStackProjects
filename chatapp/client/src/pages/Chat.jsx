import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/userChat";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {

    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, userChatsError } = useContext(ChatContext);

    return (
        <Container>
            {userChats?.length < 1 ? null : (
                <Stack direction="horizontal" gap={4} className="align-items-start">
                    <Stack className="flex-grow-0 messages-box pe-3" gap={3}>
                        {userChats?.map((chat, index) => {
                            return (
                                <div key={index}>
                                    <UserChat chat={chat} user={user} />
                                </div>
                            )
                        })}
                    </Stack>
                    {isUserChatsLoading && <p>Loading Chats...</p>}
                    <p>ChatBox</p>


                </Stack>)}
        </Container>
    );
}

export default Chat;