// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const ProtectedRoute=(props) => {
//   const { Component }= props;
//   const navigate = useNavigate();
//   useEffect(() =>{
//     let login = localStorage.getItem('todouser');
//     if(!login){
//       navigate('/login');
//     }
//   });

//   return (
//     <div>
//     <Component />
//     </div>
//   )
// }

// export default ProtectedRoute


import  { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const navigate = useNavigate();

     const checkUserStatus = async (email) => {
          const response = await fetch(`http://localhost:5001/users?email=${email}`,{mathod:"GET"});
          if(response.ok){
           const user = await response.json();
           if(user.length > 0){
            setIsLoggedIn(true)
           
           } else{
           Navigate("/");
           
    
           }
         }else{
               alert("somthing went wrong")
          }
        }
    
    
    
    
    
          useEffect(() => {
            const local =JSON.parse(localStorage.getItem("todouser"));
            if (local){
             checkUserStatus(local.email);
            }
          },[])
          return(
            isLoggedIn ?
            children:
            <div className="h-full d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>

              </div>
            </div>
          )
          }

export default ProtectedRoute