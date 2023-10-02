import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRequest, baseUrl } from '../Services/services';
import { updateFlag } from '../Redux/UpdateFlag/updateFlagSlice';

const ChatUsers = () => {

    const [userChats, setUserChats] = useState([]);
    const user = useSelector((state) => state.user);
    const { flag } = useSelector((state) => state.flag);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!user) return

        const getChat = async () => {
            const response = await getRequest(`${baseUrl}/chats/${user.id}`);
            if (response.error) return

            const promiseUsers = response.map(async (element) => {

                const targetID = element.members.filter(id => id !== user.id)[0];
                const targetUser = await getRequest(`${baseUrl}/user/${targetID}`);
                return targetUser;
            })

            Promise.all(promiseUsers)
                .then((users) => {
                    setUserChats(users);
                })
                .catch(err => console.log(err));
        }
        getChat();
    }, [flag]);
    return (
        <div>
            <p>Chat users start  </p>
            {
                userChats?.length === 0 && <p>There is no chatting.</p>
            }
                {
                    flag && <p>flag</p>
                }

            {
                userChats?.map((element, index) => {
                    return (
                        <div key={index} >
                            {element?.name}
                        </div>
                    )


                })
            }


            <p>Chat users end</p>

        </div>
    )
}

export default ChatUsers
