import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminHome';
import LoginPage from './components/user/LoginPage';
import RegisterPage from './components/user/RegisterPage';
import HomePage from './components/user/HomePage';
import SinglePage from './components/user/SinglePage';
import ProfilePage from './components/user/ProfilePage';
import BookingPage from './components/user/BookingPage';
import BookingView from './components/admin/BookingView';
import About from './components/user/About';
import Contact from './components/user/Contact';
import Navbar from './components/user/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admin-home' element={<AdminHome/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/gyms/:id' element={<SinglePage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/bookings' element={<BookingPage/>}/>
      <Route path='/view-booking' element={<BookingView/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/nav' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
