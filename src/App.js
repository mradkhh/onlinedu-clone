import "./App.css";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Course from './Pages/Course/Course'
import Vebinar from './Pages/Vebinar/Vebinar'
import Vebinar2 from './Pages/Vebinar/Vebinar2'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/course" element={<Course />} />
        <Route path="/vebinar" element={<Vebinar />} />
        <Route path="/vebinar2" element={<Vebinar2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
