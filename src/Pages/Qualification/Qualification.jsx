import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SideMenu from '../../Components/SideMenu/SideMenu'
import { Progress } from 'antd';
import './Qualification.scss'

const Qualification = () => {
  return (
    <>
    <Header/>
    <div id="qualification__page">
      <div className="container flex">
        <SideMenu/>
        <div className="qualification">
          <nav className="breadcrumb after:rounded-md w-full">
              <ol className="list-reset flex">
                <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
                <li><span className="text-gray-500 mx-2">></span></li>
                <li><Link to={"/myaccount"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Мой аккаунт</Link></li>
                <li><span className="text-gray-500 mx-2">></span></li>
                <li className="text-grayColor">Квалификация</li>
              </ol>
            </nav>
            <h4 className="qualification__title">Квалификация</h4>
            <div className="qualification__progress">
              <div className='qualification__title'>
                <h6>Пройдено 84 часов 20 минут (67%)</h6>
                <h6>Всего 144 часов 35 минут</h6>
              </div>
              <Progress percent={50} status="active" />
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Qualification