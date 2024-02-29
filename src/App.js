import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Home from './components/Home';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ComplaintsChat from './components/Complaintschat/ComplaintsChat'

export const BE_URL = "http://localhost:3214"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path= '/chat/:state' element={<ComplaintsChat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
