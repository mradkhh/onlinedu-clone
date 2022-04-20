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
            <div className="qualification__progress-head">
              <div className='title'>
                <h6>Пройдено 84 часов 20 минут (67%)</h6>
                <h6>Всего 144 часов 35 минут</h6>
              </div>
              <Progress strokeWidth={6} showInfo={false} strokeColor="#26CAAC" percent={67} status="active" />
            </div>
            <div className="qualification__progress-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={43} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={15} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={75} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={1} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={27} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={0} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={81} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={11} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
              <div className="item">
                <Progress strokeWidth={6} strokeColor="#26CAAC" type="circle" percent={56} width={70} />
                <div className="info">
                  <h6 className="title">Политика Узбекистана</h6>
                  <p>15 часов на обучение</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Qualification