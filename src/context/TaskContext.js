import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import { notifyError, notifySuccess } from "../components/Shownotification";


const TaskContext = createContext();

export const TaskProvider = ({ children}) => {
    const { user } = useContext(AuthContext);
    const [allTasks, setAllTasks]=useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const[latestTask, setLatestTask] = useState(null);


    // add Task
    const addTask = async (formData) =>{
        const config ={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }
        try {
            const response = await fetch(`http://localhost:5001/tasks`,config)
            if(response.status === 201){
                notifySuccess("Task update successfully")
                getAllTasks(user.id);
            }else{
                notifyError("Something went wrong")
            }
        } catch (error) { console.log(error);
      }
    }

    // get all task


    const getAllTasks = async (id) => {
        try{
            const response = await fetch(`http://localhost:5001/tasks?userid=${id}`,{method:"GET"});
            if(response.ok){
                const tasks = await response.json();
                setAllTasks(tasks);
                setRecentTasks(tasks.slice(-3));
                setLatestTask(tasks[tasks.length-1]);
            } else{
                notifyError("someThing went wrong");
            }

        }catch (error) {
            console.log(error);
        }
    }



//Update task

const updateTask = async (formData) => {
    const config ={
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
    }

    try{
    const response = await fetch (`http://localhost:5001/tasks/${formData.id}`,config);
    if (response.ok){
        notifySuccess("Task updated successfully")
        getAllTasks(user.id);
    }else {
        notifyError("Something went wrong")
    }
    } catch(error){
    console.log(error)
    }
}




useEffect(() => {
    if (user){
    getAllTasks(user.id);
    }
},[user])

// delete task
const deleteTask = async (id) => {
    const config ={
        method:"DELETE",
        
    }

    try{
    const response = await fetch (`http://localhost:5001/tasks/${id}`,config);
    if (response.ok){
        notifySuccess("Task deleted successfully");
        getAllTasks(user.id);
    }else {
        notifyError("Something went wrong")
    }
    } catch(error){

    }
}

    return (
        <TaskContext.Provider value ={{
               addTask,
               latestTask,
               recentTasks, 
               allTasks,
               updateTask,
               deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContext