import { useContext, useRef } from 'react';
import TaskForm from './TaskForm';
import { formatdate } from '../Helper';
import TaskContext from '../context/TaskContext';


const Popup = ({task}) => {
  const { deleteTask } = useContext(TaskContext);
 const {type, data } = task;
 const closeBtn = useRef(null);

  return (
    <div className="modal" tabIndex="-1" id="task-popup">
  <div className="modal-dialog">
    <div className="modal-content text-white bg-black">
      <div className="modal-header">
        <h5 className="modal-title">Tasks</h5>
        <button ref={closeBtn} type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close" >X</button>
      </div>
      <div className="modal-body">
      {
        type === "view" ?                     
                       
       <div>
       <h5>{data?.title}</h5>
                         <p>{data?.description}</p>    
                         <div className='d-flex align-items-center text-warning'>
                          <p>Modified On: {formatdate(data?.modifiedon)}</p>
                          <p className='ms-auto'>Due On: {formatdate(data?.duedate)}</p>
                       </div>
       </div>
       :type ==="edit"?
       <div>
          <TaskForm isUpdate={true} data={data} closeBtn={closeBtn} isPopup={true} />
       </div>
        :
       <div className="py-2">
            <p>Do you really want to delete this task??</p>
            <div className='d-flex justify-content-end'>
              <button onClick={() => {deleteTask(data.id)}} className="btn btn-danger"  data-bs-dismiss="modal">Yes</button>
              <button className="btn btn-warning ms-2" data-bs-dismiss="modal" >No</button>
            </div>
       </div>
      }
      </div>
     
    </div>
  </div>
</div>
  )
}

export default Popup