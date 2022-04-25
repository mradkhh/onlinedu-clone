import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Categories from './Pages/Categories/Categories';
import Course from './Pages/Course/Course';
import Drection from './Pages/Drection/Drection';
import Expert from './Pages/Expert/Expert';
import Faq from './Pages/Faq/Faq';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Payment from './Pages/Payment/Payment';
import Edit from './Pages/Profile/Edit';
import Profile from './Pages/Profile/Profile';
import Qualification from './Pages/Qualification/Qualification';
import Stat from './Pages/Stat/Stat';
import Vebinar from './Pages/Vebinar/Vebinar';
import Vebinar2 from './Pages/Vebinar/Vebinar2';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/course' element={<Course />} />
        <Route path='/vebinar' element={<Vebinar />} />
        <Route path='/vebinar2' element={<Vebinar2 />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/expert' element={<Expert />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/stat' element={<Stat />} />
        <Route path='/qualification' element={<Qualification />} />
        <Route path='/drection' element={<Drection />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
