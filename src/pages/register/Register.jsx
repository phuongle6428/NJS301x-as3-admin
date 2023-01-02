import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogRegForm from '../../components/LogRegForm/LogReg'
import Navbar from '../../components/navbar/Navbar'
import authAPI from '../../API/authAPI'

export default function Register() {
  const navigate = useNavigate()
  const handleRegister = async (e, form) => {
    e.preventDefault();
    let response = await authAPI.postSignUp(form)
    if(response) {
      navigate('/login')
    } else {
      alert(response)
    }
  }
  return (
    <>
      <Navbar />
      <LogRegForm type={0} handleForm={handleRegister} />
    </>
  )
}
