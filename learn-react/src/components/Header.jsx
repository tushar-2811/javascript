import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello , Header</h1>

      <button onClick={() => navigate('/')} >Home</button>
      <button onClick={() => navigate('/dashboard')} >Dashboard</button>
    </div>
  )
}

export default Header
