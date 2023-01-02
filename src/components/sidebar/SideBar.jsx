import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard, MdPersonOutline, MdOutlineStoreMallDirectory, MdBed, MdLocalShipping, MdOutlineLogout } from "react-icons/md";
import './sidebar.css'
export default function SideBar() {
   const navigate = useNavigate()
   const handleClick = (e) => {
      e.preventDefault()
      localStorage.setItem('as3_user_token', null)
      navigate('/login')
   }
   return (
      <nav className='main-sidebar'>
         <ul className='main-ul'>
            <li>
               <h6>MAIN</h6>
               <ul className='child-ul'>
                  <li>
                     <MdDashboard />
                     <NavLink to={`/`} className={({ isActive }) => {
                        return isActive ? "active" : null
                     }}>Dashboard</NavLink>
                  </li>
               </ul>
            </li>
            <li>
               <h6>LISTS</h6>
               <ul className='child-ul'>
                  <li>
                     <MdPersonOutline />
                     <NavLink to={`products`} className={({ isActive }) => {
                        return isActive ? "active" : null
                     }}>Products</NavLink>
                  </li>
                  {/* <li>
                     <MdOutlineStoreMallDirectory />
                     <NavLink to={`hotel`} className={({ isActive }) => {
                        return isActive ? "active" : null
                     }}>Hotel</NavLink>
                  </li> */}
                  <li>
                     <MdBed />
                     <NavLink to={`room`} className={({ isActive }) => {
                        return isActive ? "active" : null
                     }}>Rooms</NavLink>
                  </li>
                  {/* <li>
                     <MdLocalShipping />
                     <NavLink to={`transaction`} className={({ isActive }) => {
                        return isActive ? "active" : null
                     }}>Transaction</NavLink>
                  </li> */}
               </ul>
            </li>
            {/* <li>
               <h6>NEW</h6>
               <ul className='child-ul'>
                  <li>
                     <MdOutlineStoreMallDirectory />
                     <NavLink to={`add/hotel`} className={({ isActive }) => {
                        return isActive ? "active" : null
                     }}>New Hotel</NavLink>
                  </li>
                  <li>
                     <MdBed />
                     <NavLink to={`add/room`} className={({ isActive }) => {
                        return isActive ? "active" : null
                     }}>New Room</NavLink>
                  </li>
               </ul>
            </li> */}
            <li>
               <h6>USER</h6>
               <ul className='child-ul'>
                  <li>
                     <MdOutlineLogout />
                     <a href='/login' onClick={handleClick}>Logout</a>
                  </li>
               </ul>
            </li>
         </ul>
      </nav>
   )
}
