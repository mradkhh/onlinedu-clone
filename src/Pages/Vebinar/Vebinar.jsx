import { Link } from 'react-router-dom'
import './Vebinar.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import VebinarCard from '../../Components/Cards/VebinarCard'
import './Vebinar.scss'
import Paginations from '../../Components/Paginations/Paginations'

const Vebinar = () => {
  return (
    <>
        <Header/>
        <section id="vebinar__page">
          <div className="container">
          <nav className="breadcrumb mt-6 mb-8 rounded-md w-full">
            <ol className="list-reset flex">
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li className="text-grayColor">Вебинары</li>
            </ol>
          </nav>
          <div className="vebinar">
            <h3 className='vebinar__title'>Вебинары</h3>
            <div className="vabinar__items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VebinarCard
               image={"/Images/vebinar1.jpg"}
               date='24.12.2020 в 20:30'
               title="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько"
               />
              <VebinarCard
               image={"/Images/vebinar2.jpg"}
               date='24.12.2020 в 20:30'
               title="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько"
               />
              <VebinarCard
               image={"/Images/vebinar3.jpg"}
               date='24.12.2020 в 20:30'
               title="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько"
               />
              <VebinarCard
               image={"/Images/vebinar4.jpg"}
               date='24.12.2020 в 20:30'
               title="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько"
               />
              <VebinarCard
               image={"/Images/vebinar5.jpg"}
               date='24.12.2020 в 20:30'
               title="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько"
               />
              <VebinarCard
               image={"/Images/vebinar6.jpg"}
               date='24.12.2020 в 20:30'
               title="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько"
               />
            </div>
          </div>
          <div className="vebinar__pagination">
            <Paginations count={5}/>
          </div>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Vebinar