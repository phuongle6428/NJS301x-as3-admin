import { Button, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import roomAPI from '../../API/roomAPI'
import './room.css'
import RoomChat from './roomchat'
import io from 'socket.io-client';
const socket = io('https://njs-301x-as3-nodejs-tutwcqxix-phuongle6428.vercel.app/');

export default function Room() {
  const [rooms, setRooms] = useState([])
  const [displayId, setDisplayId] = useState('')
  const first = useRef(true)
  useEffect(() => {
    if(first.current) {
      getAllRoom()
      first.current = false
      socket.on('new-chat-room', (data) => {
        console.log(data)
        getAllRoom()
     });
   }
  }, [])
  async function getAllRoom() {
    let response = await roomAPI.getAllRoom()
    setRooms(response)
  }
  const handleDisplay = (e) => {
    const Id = e.target.getAttribute('data-id')
    setDisplayId(Id)
  }
  let roomNav = []
  let roomChat = []
  if (rooms.length > 0) {
    roomNav = rooms.map(value => {
      socket.emit('join-room', { roomId: value._id })
      return (
        <div onClick={handleDisplay} key={value._id} data-id={value._id}>Room {value._id}</div>
      )
    })
    roomChat = rooms.map(data => {
      return <RoomChat data={data} key={data._id} socket={socket} displayId={displayId} />
    })
  }

  return (
    <div className='room'>
      <div className='chat-room-nav'>
        {roomNav}
      </div>
      {roomChat}
    </div>
  )
}
