import { createContext, useEffect, useRef, useState} from "react"
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../components/Shownotification";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);

     //useNavigate hook is used to add redirection to page in a function.
     const navigate = useNavigate();


     //Registor user
     const handleRegister = async (formData) => {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
  
      const checkUserResponse = await fetch(`http://localhost:5001/users?email=${formData.email}`, { method: "GET"});
       if (checkUserResponse.ok) {
        const user = await checkUserResponse.json();
        if (user.length > 0){
          notifySuccess("user already exist");
        } else{
          const response = await  fetch('http://localhost:5001/users', config);
          if( response.status === 201){
            const user = await response.json();
            localStorage.setItem("todouser", JSON.stringify(user))
            setUser(user);
            notifySuccess("user registered successfully")
            navigate("/task-list")
          }
          else{
            notifyError("something went wrong, please try again");
          }
        }
       }else {
        notifyError ("something went wrong")
       }
  
  
    }


     // login user
     const handleLogin = async (formData) => {
      const response = await fetch(`http://localhost:5001/users?email=${formData.email}&password=${formData.password}`, { method: "GET"});
      if (response.ok) {
        const user = await response.json();
        if(user.length > 0){
          localStorage.setItem("todouser",JSON.stringify(user[0]))
          setUser (user[0])
            notifySuccess("Login successfully");
            navigate("/task-list")
        }else {
          notifyError("Email/Password is incorrect");
        }
      } else {
              notifyError("Something went wrong, please try again")
      }
     }


     //logout
     const logout = () => {
      setUser(null);
      localStorage.removeItem("todouser");
      navigate("/login");

     }

     const checkUserStatus = async (email) => {
      const response = await fetch(`http://localhost:5001/users?email=${email}`,{mathod:"GET"});
      if(response.ok){
       const user = await response.json();
       if(user.length > 0){
          setUser(user[0]);
          
       } else{
       localStorage.removeItem("todouser")
       

       }
     }else{
           notifyError("somthing went wrong")
      }
    }

    //update user profile ---->
    const updateUserProfile = async (formData) => {
      const config = {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
      }
      try {
          const response = await fetch(`http://localhost:5001/users/${formData.userid}`, config);
          if (response.ok) {
              notifySuccess('profile updated successfully')
              const user = await response.json();
              setUser(user);
              localStorage.setItem("todouser", JSON.stringify(user));
          }
          else {
              notifyError('something went wrong')
          }
      } catch (error) {

      }
  }





      useEffect(() => {
        const local =JSON.parse(localStorage.getItem("todouser"));
        if (local){
         checkUserStatus(local.email);
        }
      },[])

    return(
        <AuthContext.Provider value={{
         user,
         handleLogin,
         handleRegister,
         logout,
         updateUserProfile
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;