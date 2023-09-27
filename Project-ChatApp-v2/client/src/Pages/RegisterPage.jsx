import React from 'react'
import { useState } from 'react'
import { baseUrl, postRequest } from '../Services/services'

const RegisterPage = () => {

  const [formInformations,setFormInformations] = useState({
    name:"",
    email:"",
    password:"",
  })
  const [errorMessage,setErrorMessage] = useState("")

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
    const response = await postRequest(`${baseUrl}/register`,JSON.stringify(formInformations));
    if(response.error){
      setErrorMessage(response.message)
    }
  }
  return (
    <div>
        <form onChange={formInputHandle} onSubmit={submitHandle}>
          <input type='text' name='name' placeholder='username'/>
          <input type='text' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password'/>
          <button type='submit'>Register</button>
          {
              errorMessage && <p>{errorMessage}</p>
          }
        </form>
      
    </div>
  )
}

export default RegisterPage
