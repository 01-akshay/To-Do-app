import React, { useContext, useState } from 'react'

import { Link, NavLink ,Outlet } from 'react-router-dom'
import TaskForm from '../components/TaskForm'
import TaskContext from '../context/TaskContext'
import { formatdate } from '../Helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const CreateTask = () => {
  const {latestTask, recentTasks} = useContext(TaskContext);
  const [isUpdate, setIsUpdate] = useState(false);


  const edit = () => {
    setIsUpdate(true);
  }


  return (
  <div className='container-fluid wrapper'>
   <div className='row h-100'>
      <div className='h-100 d-flex col-lg-6 bg-primary justify-content-center align-items-center text-white flex-column'>
      <div className="w-50">
       <TaskForm isUpdate={isUpdate}  data={latestTask} setIsUpdate={setIsUpdate} />
       </div>
   
      </div>

      <div className='h-100 d-flex col-lg-6 justify-content-center align-items-center flex-column'>
         
         <div className='card w-75 rounded-0 bg-primary text-white mb-4'> 
          {latestTask ? (
           <div className='card-body'>
              <div className='d-flex align-items-center'>
              <div className='ps-5'> 
                  <h4 className='  border-bottom border-info border-3'>Latest Task</h4>
                  </div>
                  <button onClick={edit} className='btn btn-info ms-auto edit-task'><FontAwesomeIcon icon={faPenToSquare}/>Edit Task</button>
                 </div>  
                 <h5>{latestTask.title}</h5>
                 <p>{latestTask.description}</p>
                 
                 <div className='d-flex align-items-center text-warning'>
                  <p>Modified On: {formatdate(latestTask.modifiedon)}</p>
                  <p className='ms-auto'>Due On: {formatdate(latestTask.duedate)}</p>
               </div>
               </div>
               ):(
                <div className="card-body">
               <p>No Task Available</p>
               </div>
               )}
        
            </div>      
          
         <div className='card bg-primary w-75 rounded-0'>   
          <div className='card-body'>
            <h3 className='text-white mb-2'>Recently Added</h3>
            <hr className='text-secondary mb-4'/>

               <div className='mb-3'>
               {
                  recentTasks ? recentTasks.map((item)=> (
                  <div key={item.id} className='d-flex align-items-center border-1 text-white'>
                  <p>{item.title}</p>
                  <p className='ms-auto text-warning'>{formatdate(item.duedate)}</p>
                  </div>
                  ))
                  :<p>NO tasks to show</p>
               }

               </div> 

               <Link to="/task-list" className='text-info p-2 text-warning text-decoration-none'>View All</Link>
                      </div>
        </div>

     </div>
     </div>
  </div>
  )
  }
export default CreateTask