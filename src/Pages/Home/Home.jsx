import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Hero from './Sections/Hero'
import Partner from './Sections/Partner'
import Comments from './Sections/Comments'
import About from './Sections/About'
import Validity from './Sections/Validity'
import Popular from './Sections/Popular'
import Vebinar from './Sections/Vebinar'
import Professor from './Sections/Professor'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <div className="container">
        <nav className="breadcrumb mt-6 mb-8 rounded-md w-full">
            <ol className="list-reset flex">
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li><Link to={"/course"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Менеджмент</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li><Link to={"/categories"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Категории </Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li><Link to={"/vebinar"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Вебинары </Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li><Link to={"/vebinar2"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Вебинары 2 </Link></li>
            </ol>
          </nav>
        </div>
        <Hero/>
        <Partner/>
        <Comments/>
        <About/>
        <Validity/>
        <Popular/>
        <Vebinar/>
        <Professor/>
        <Footer/>
    </>
  )
}

export default Home