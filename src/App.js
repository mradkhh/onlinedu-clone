import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Categories,
  Course,
  Drection,
  Edit,
  Expert,
  Faq,
  Home,
  NotFound,
  Payment,
  Profile,
  Qualification,
  Stat,
  Vebinar,
  Vebinar2,
} from 'Pages/index';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import option from 'Services/Aos';
import './App.css';
import './i18n';

function App() {
  useEffect(() => {
    AOS.init({ ...option });
  }, []);
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
