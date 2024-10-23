import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminHome';
import LoginPage from './components/user/LoginPage';
import RegisterPage from './components/user/RegisterPage';
import HomePage from './components/user/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admin-home' element={<AdminHome/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
