import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

import header from './assets/header.png'
import macbookSVG from './assets/macbook.svg'
import ButtonComponent from './components/ButtonComponent'
import ScreenComponent from './components/ScreenComponent'

import {Route,Routes, Navigate} from 'react-router';
import HomePage from './pages/HomePage'
import RecordingPage from './pages/RecordingPage'

function App() {

  const [configVideo,setConfigVideo] = useState({
    video:false,
    audio:false,
    screen:false
  })

  useEffect(() => {
    console.log(configVideo);
  },[configVideo])



  return (
    <>

    <Routes>
      <Route path='/' element = {<HomePage setConfigVideo = {setConfigVideo}/>} />
      <Route path='/screen-capture' element={<RecordingPage configVideo = {configVideo}/>} />
    </Routes>
      

    </>
  )
}

export default App
