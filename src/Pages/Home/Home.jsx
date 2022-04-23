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
        {/* <div className="container">
          <h6>This site is building now. All pages here.</h6>
            <ol className="list-reset">
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><Link to={"/course"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Менеджмент</Link></li>
              <li><Link to={"/categories"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Категории </Link></li>
              <li><Link to={"/vebinar"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Вебинары </Link></li>
              <li><Link to={"/vebinar2"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Вебинары 2 </Link></li>
              <li><Link to={"/faq"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Часто задаваемые вопросы</Link></li>
              <li><Link to={"/expert"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">экспертов</Link></li>
              <li><Link to={"/profile"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Мой профиль</Link></li>
              <li><Link to={"/edit"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Edit</Link></li>
              <li><Link to={"/stat"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Stat</Link></li>
              <li><Link to={"/qualification"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Qualification</Link></li>
              <li><Link to={"/drection"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Drection</Link></li>
              <li><Link to={"/payment"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Payment</Link></li>
            </ol>
            <h3>Official site:
            <a href="https://onlinedu.uz/" className="text-blueColor text-[20px] font-medium hover:text-greenColor"> onlinedu.uz</a>
            </h3>
        </div> */}
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