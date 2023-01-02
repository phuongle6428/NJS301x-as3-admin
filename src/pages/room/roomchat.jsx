import React, { useEffect, useRef, useState } from 'react'
import roomAPI from '../../API/roomAPI'

export default function RoomChat({ data, displayId, socket}) {
   const [inputText, setInputText] = useState('')
   const [messages, setMessages] = useState(data)
   const first = useRef(true)
   useEffect(() => {
      if (first.current) {
         getMessage()
         first.current = false
         socket.on('receive_message', (data) => {
            console.log(data)
            getMessage()
         });
      }
   }, [])
   const getMessage = async () => {
      const response = await roomAPI.getMessageByRoomId(data._id)
      setMessages(response)
   }
   const handleChange = (e) => {
      setInputText(e.target.value)
   }
   const handleSend = async () => {
      const body = {
         roomId: data._id,
         userId: localStorage.getItem('as3_user_id'),
         message: inputText
      }
      await roomAPI.addMessage(body)
      getMessage()
      setInputText('')
   }
   const isDisplay = displayId === data._id ? 'show ' : ''
   let renderContent = messages.message.map((value, index) => {
      if (value.userId == localStorage.getItem('as3_user_id')) {
         return <p className='your-text' key={index}>{value.text}</p>
      } else {
         return <p className='client-text' key={index}>{value.text}</p>
      }
   })
   return (
      <div className={isDisplay + 'message-container'}>
         <div className='message-content'>
            {renderContent}
         </div>
         <div className='input-content'>
            <input type="text" value={inputText} onChange={handleChange} />
            <button onClick={handleSend}>Send</button>
         </div>
      </div>
   )
}
