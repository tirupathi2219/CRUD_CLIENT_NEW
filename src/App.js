import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Home from './components/Home';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import ComplaintsChat from './components/Complaintschat/ComplaintsChat'
import { Suspense, lazy } from 'react';
import Denomcalculator from './components/Denomcalculator';

export const BE_URL = "http://localhost:8000"

function App() {
  const ComplaintsChat = lazy(()=> import('./components/Complaintschat/ComplaintsChat'))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path= '/denom-calc' element={<Denomcalculator />} />
        <Route path= '/chat' element={<Suspense fallback={<h1>Loading......</h1>}><ComplaintsChat/></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
