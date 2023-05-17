import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
const router=createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },{
      path:'login',
      element:<Login/>
    },{
      path:'register',
      element:<Register/>
    }
  ]
}


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
