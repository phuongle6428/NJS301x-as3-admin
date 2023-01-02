import React, { useState } from 'react'
import "./logreg.css";

export default function LogRegForm({ type, handleForm }) {
  const [form, setForm] = useState({})
  const handleChange = (e) => {
    let target = { ...form, [e.currentTarget.name]: e.currentTarget.value }
    setForm(target)
  }
  return (
    <>
      <form action="" className='logregForm' onSubmit={(e) => handleForm(e, form)}>
        <h1>{type ? "Login" : "Sign Up"}</h1>
        {type ? null :
          <>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" onChange={handleChange} name="fullname" id="fullname" value={form?.fullname ? form.fullname : ""} />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" onChange={handleChange} name="phone" id="phone" value={form?.phone ? form.phone : ""} />
          </>
        }
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={handleChange} name="email" id="email" value={form?.email ? form.email : ""} />
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={handleChange} name="password" id="password" value={form?.password ? form.password : ""} />
        <button>{type ? "Login" : "Create Acccout"}</button>
      </form>
    </>
  )
}
