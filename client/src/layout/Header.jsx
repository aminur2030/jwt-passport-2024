import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
     <Link to={"/home"}>Home</Link> &nbsp;
     <Link to={"/register"}>Register</Link> &nbsp;
     <Link to={"/login"}>Login</Link> &nbsp;
     <Link to={"/profile"}>Profile</Link> &nbsp;      
     <Link to={"/*"}>Error</Link>       
    </nav>
  )
}

export default Header
