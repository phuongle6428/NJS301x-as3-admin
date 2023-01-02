import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate()
  const navigateClick = (e) => {
    let toPage
    if(e.currentTarget.innerText == "Register") {
      toPage = "/register"
    } else if (e.currentTarget.innerText == "Login") {
      toPage = "/login"
    }
    navigate(toPage)
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Admin Ecommerce Website</span>
        <div className="navItems">
          <button className="navButton" onClick={navigateClick}>Register</button>
          <button className="navButton" onClick={navigateClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
