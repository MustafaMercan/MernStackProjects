import React, { useEffect ,useState} from 'react'
import {baseUrl,getRequest} from '../Services/services'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

const AvailableUsersComponent = () => {

  const {id} = useParams();
  const [chats,setChats] = useState([]);
  const [avaliableChats,setAvaliableChats] = useState([]);
  const user = useSelector((state) =>state.user);
  console.log('user -> ',user)




  useEffect(() => {
    const getUsers = async() => {

      const response = await getRequest(`${baseUrl}/users`);
      const {users} = response;
      console.log('users -> ',users)
      const potentialChats = users.filter((u)=> {
        if(user.id){
           if(u?._id === user?.id) return false;
           let flag = chats.some((c) =>{
            return c.members[0] === u?._id || c.members[1] === u?._id
          })
          console.log(flag)
           return !flag  
        }   
      } )
      console.log('avaliable',potentialChats)
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


  return (
    <div>
        <p>available user start</p>


        <p>available user end</p> 
    </div>
  )
}

export default AvailableUsersComponent
