import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
  const { logout } = props
  return (
    <div>
      <Link to="/home">Home</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar