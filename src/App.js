import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import TaskList from './Pages/TaskList';
import CreateTask from './Pages/CreateTask';
import Profile from './Pages/Profile';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './components/Navbar';
import Login from './auth/Login';
import Register from './auth/Register';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import { TaskProvider } from './context/TaskContext';
import NotificationProvider from './components/Shownotification';


function App() {
 return(
  <BrowserRouter>
  <NotificationProvider/>
  <AuthProvider>
  <TaskProvider>
  <Navbar />
    <Routes>
    
    <Route path="/" element={<Navigate to="/login" />} />
      <Route path='/' element={<Home />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/task-list' element={<ProtectedRoute><TaskList/></ProtectedRoute>}></Route>
      <Route  path='/create-task' element={<ProtectedRoute><CreateTask/></ProtectedRoute>}></Route>
      <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    </TaskProvider>
    </AuthProvider>
      
  </BrowserRouter>
 )
}

export default App;
