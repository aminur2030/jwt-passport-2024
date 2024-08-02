import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();
  const{username,setUsername}=useState("");
  const{password,setPassword}=useState("");
  const handleRegister =()=>{
    axios.post("http://localhost:2000/register",{username,password})
    .then(()=>{
      console.log("user is registered");
      navigate("/login")
    })
    .catch((error)=>{
      console.log(error)
      navigate("/register")
    })
  }

  return (
    <div>
    <h2> Register Route</h2>
    <input 
    type="text" 
    placeholder="username" 
    value={username} 
    onChange={(e)=>{setUsername(e.target.value)      
    }} required />
    <input 
    type="password" 
    placeholder="password" 
    value={password} 
    onChange={(e)=>{setPassword(e.target.value)      
    }} required />

    <button type="submit" onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
