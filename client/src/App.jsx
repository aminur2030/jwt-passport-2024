import React from 'react'
import Header from './layout/Header'
import { Outlet } from 'react-router-dom'




const App = () => {
  return (
    <div>  
  <h1>Aminur Rahaman</h1>
  <Header />
  <Outlet />
    </div>
  )
}

export default App
