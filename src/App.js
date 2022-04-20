import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Pages/Categories/Categories';
import Course from './Pages/Course/Course';
import Expert from './Pages/Expert/Expert';
import Faq from './Pages/Faq/Faq';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';
import Vebinar from './Pages/Vebinar/Vebinar';
import Vebinar2 from './Pages/Vebinar/Vebinar2';
import Edit from './Pages/Profile/Edit'
import Stat from './Pages/Stat/Stat';
import Qualification from './Pages/Qualification/Qualification';

function App() {
  return (
    <BrowserRouter>
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
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
