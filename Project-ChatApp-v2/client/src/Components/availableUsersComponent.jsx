import React, { useEffect ,useState} from 'react'
import {baseUrl,getRequest,postRequest} from '../Services/services'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateFlag } from '../Redux/UpdateFlag/updateFlagSlice'

const AvailableUsersComponent = () => {

  const {id} = useParams();
  const [chats,setChats] = useState([]);
  const [avaliableChats,setAvaliableChats] = useState([]);


  const user = useSelector((state) =>state.user);
  const {flag} = useSelector((state) => state.flag);
  const dispatch = useDispatch();
  //console.log('user -> ',user)

  useEffect(() => {
    const getUsers = async() => {

      const response = await getRequest(`${baseUrl}/users`);
      const {users} = response;
      //console.log('users -> ',users)
      const potentialChats = users.filter((u)=> {
        if(user.id){
           if(u?._id === user?.id) return false;
           let flag = chats.some((c) =>{
            return c.members[0] === u?._id || c.members[1] === u?._id
          })
          //console.log(flag)
           return !flag  
        }   
      } )
      setAvaliableChats(potentialChats)
    }  
    getUsers()
  },[chats])

  useEffect(() => {
    const getChats = async() => {
      const response = await getRequest(`${baseUrl}/chats/${id}`)
      setChats(response)
      
    }
    getChats();

  },[])
  
  const createChat = async(element) => {
    const members = [element._id,user.id];
    const response = await postRequest(`${baseUrl}/createChat`,JSON.stringify({members}));
    
    if(response?.error) return;

    const updateAvaliableChats = avaliableChats.filter(user => user._id !== element._id);
    setAvaliableChats(updateAvaliableChats);
    dispatch(updateFlag());

  }


  return (
    <div>
        <p>available user start</p>
        {
          avaliableChats?.map((element,index) => {
            return(
              <div key = {index} onClick={createChat.bind(this,element)}> 
                {element?.name}
              </div>
            )
          })
        }
        <p>available user end</p> 
    </div>
  )
}

export default AvailableUsersComponent
