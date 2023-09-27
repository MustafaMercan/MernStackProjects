import MainPage from "./Pages/MainPage"
import RegisterPage from "./Pages/RegisterPage"
import LoginPage from "./Pages/LoginPage"
import ChatPage from "./Pages/ChatPage"
import {Routes,Route, Navigate} from "react-router-dom"



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element = {<MainPage/>}/>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/register" element = {<RegisterPage/>}/>
        <Route path="/user/:id" element={<ChatPage/>}/>
        <Route path="*" replace element={ <Navigate to="/"/>}/>
      </Routes>
      
    </div>
  )
}

export default App
