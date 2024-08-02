import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from '../src/Components/Home'
import Register from '../src/Components/Register'
import Profile from '../src/Components/Profile';
import Error from '../src/Components/Error';
import Login from '../src/Components/Login ';


import {
  createBrowserRouter,RouterProvider,} from "react-router-dom";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children: [
      {
        path:"/home",
        element:<Home />
       },
       {
        path:"/register",
        element:<Register />
       },
       {
        path:"/login",
        element:<Login />
       },
       {
        path:"/profile",
        element:<Profile />
       },
       {
        path:"/*",
        element:<Error />
       },
    ]
  },
   
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>       
    <RouterProvider router={router}/>   
  </React.StrictMode>,
)
