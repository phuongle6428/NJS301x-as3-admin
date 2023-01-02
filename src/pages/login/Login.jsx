import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogRegForm from '../../components/LogRegForm/LogReg'
import Navbar from '../../components/navbar/Navbar'
import authAPI from '../../API/authAPI'

export default function Login() {
  const navigate = useNavigate()
  const handleLogin = async (e, form) => {
    e.preventDefault();
    let response = await authAPI.postSignIn(form)
    if(response) {
      let token = response.token
      localStorage.setItem("as3_user_token", token)
      localStorage.setItem("as3_user_id", response.userId)
      navigate('/')
    } else {
      alert(response)
    }
  }
  return (
    <>
      <Navbar />
      <LogRegForm type={1} handleForm={handleLogin} />
    </>
  )
}
