import React from 'react'
import logo from '../Assets/logo.png'
import { Link, NavLink ,Outlet } from 'react-router-dom'

const Home = () => {
  return (
   <div className='container-fluid wrapper'>
   <div className='row h-100'>
    <div className='h-100 d-flex col-lg-6 bg-primary justify-content-center align-items-center text-white flex-column'>

    <h1 className='text-center display-4 text-uppercase'>
       An App to<br/>
        make your life<br/>
        <span className='display-2'>Organised</span>
    </h1>
    <img className='img-fluid w-50' src={logo} alt='logo' />
    </div>

    <div className='h-100 d-flex col-lg-6 justify-content-center align-items-center flex-column'>
      
      <div className='card w-50 rounded-0'>
      <div className='card-header bg-transparent rounded-0 p-0 border-0 d-flex'>
       <NavLink to="/login" className={(e) =>{return  e.isActive?"blue":"white"} }>Login</NavLink>
       <NavLink to="/register" className={(e) =>{return  e.isActive?"blue":"white"} }>Register</NavLink>
      </div>

      <div className='card-body'>
      <Outlet />
      </div>

      </div>
</div>

   </div>
   </div>
  )
}

export default Home

