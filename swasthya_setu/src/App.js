import Appointment from './pages/Appointment/Appointment.jsx';
import Login from './pages/authentication/login.jsx'
import Home from './pages/Home/Home.jsx'
import Signup from './pages/authentication/signUp.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import User from './pages/Home/User.jsx';
function App() {
  return (
    <>
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/signUp' element={<Signup/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
