import React, { useEffect, useState } from "react";
import { socket } from "../socket";

export function CreateRoom(){
    
    const [roomName,setRoomName] = useState("");
    const [serverMessage, setServerMessage] = useState("")

    useEffect(() => {
        socket.on('roomInformation',(data) => {
            console.log(data)
            setServerMessage(data?.message);
        })
    },[])

    const newRoom = () => {
        socket.emit('create-room',{userName:socket.id,roomName})
    }
    return(
        <>
        
            <input placeholder="room-name" onChange={(e) => setRoomName(e.target.value)}/>
            <button onClick={() => {newRoom()}}>Create New Room</button>
            {
                serverMessage && <p>{serverMessage}</p> 
            }
        </>
    )
}