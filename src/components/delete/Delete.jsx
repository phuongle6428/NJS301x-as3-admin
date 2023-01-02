import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Delete({ _id , callData, api}) {
   const navigate = useNavigate()
   const [showModal, setShowModal] = useState(false)
   const [isAvail, setIsAvail] = useState(false)
   const handleClick = async (e) => {
      if(isAvail) {
         return 
      }
      let response = await fetch(`http://localhost:5000/admin/${api}`, {
         method: "DELETE",
         headers: {
            'Content-Type': "application/json"
         },
         body: JSON.stringify({_id: _id}) 
      })
      let data = await response.json()
      if(data) {
         setShowModal(false)
         callData()
      }
   }
   const handleShowModal = async () => {
      let params = new URLSearchParams()
      params.append('_id', _id)
      let response = await fetch(`http://localhost:5000/admin/transaction/${api}?${params}`)
      let data = await response.json()
      if (data.length > 0) {
         setIsAvail(true)
      } else {
         setIsAvail(false)
      }
      setShowModal(true)
   }
   return (
      <>
         <Modal
            title="Basic Modal"
            open={showModal}
            onOk={handleClick}
            onCancel={() => setShowModal(false)}
            okButtonProps={{disabled: isAvail}}
         >
            {isAvail ? `This ${api} still have transaction active` : "Are you sure want to delete"}
         </Modal>
         <Button className='delete-btn' onClick={handleShowModal} >
            Delete
         </Button>
      </>
   )
}
