import React from 'react'
import  { Toaster, toast } from 'react-hot-toast'

const NotificationProvider = () => {
  return <Toaster position="top-center" reverseOrder={false} />; 

};
// Utility functions for triggering notification
   export const notifySuccess = (message) => toast.success(message);
export const notifyError = (message) => toast.error(message);
  


export default NotificationProvider;