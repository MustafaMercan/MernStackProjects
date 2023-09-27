import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../Redux/User/userSlice';
import { baseUrl,postRequest } from '../Services/services';
import {Navigate} from "react-router-dom"

const LoginPage = () => {

  const [errorMessage,setErrorMessage] = useState("")


    const user = useSelector((state) =>state.user);
    const dispatch = useDispatch();

    const [formInformations,setFormInformations] = useState({})

    const formInputHandle = (event) => {
      setFormInformations(
        () => {
          const updatedObject = {
            ...formInformations,
            [event.target.name]:event.target.value
          }
          return updatedObject;
        }
      )
    }
    const submitHandle = async(event) => {
      event.preventDefault();
      const response = await postRequest(`${baseUrl}/login`,JSON.stringify(formInformations));
      if(response.error){
        setErrorMessage(response.message)
      }
      if(response && response.user) dispatch(loginUser(response.user))
    }
  return (


        <div>
          {
            user.id && <Navigate to ={`/user/${user.id}`} />
          }
        <form onChange={formInputHandle} onSubmit={submitHandle}>
          <input type='text' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password'/>
          <button type='submit'>Login</button>
          {
              errorMessage && <p>{errorMessage}</p>
          }
          
        </form>
       
      
    </div>

  )
}

export default LoginPage

/*v
    
    <div>
        Login Page
        <button onClick={() => dispatch(loginUser({name:"mustafa",email:"email",id:"id"}))}>Click Me </button>   
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.id}</p>

        </div>
*/
