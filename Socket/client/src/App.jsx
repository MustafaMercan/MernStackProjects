import { useEffect, useState } from 'react'
import { socket } from './socket'

import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { MyForm } from './components/MyForm';
import { Events } from './components/Events';
import { CreateRoom } from './components/CreateRoom';
import './App.css'


function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);


  useEffect(() => {
    console.log('Events:',fooEvents);
  },[fooEvents])
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
      console.log(fooEvents)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect)
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    }
  }, [])

  return (
    <>
      <div className="App">
        <ConnectionState isConnected={isConnected} />
        <Events events = {fooEvents} />
        <ConnectionManager />
        <MyForm />
        <CreateRoom/>
      </div>

    </>
  )
}

export default App
