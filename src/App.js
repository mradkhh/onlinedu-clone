import "./App.css";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Course from './Pages/Course/Course'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
