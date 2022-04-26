import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import './i18n';
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
      delay: 200,
      debounceDelay: 50,
      duration: 1000,
      disableMutationObserver: false
    })
  }, [])
  return (
    <I18nextProvider>
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
          <Route path='/dashboard/' element={<Profile />} />
          <Route path='/dashboard/profile' element={<Profile />} />
          <Route path='/dashboard/edit' element={<Edit />} />
          <Route path='/dashboard/stat' element={<Stat />} />
          <Route path='/dashboard/qualification' element={<Qualification />} />
          <Route path='/dashboard/drection' element={<Drection />} />
          <Route path='/dashboard/payment' element={<Payment />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
