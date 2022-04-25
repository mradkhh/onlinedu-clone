import { Drawer, Progress } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MobileSideMenu from '../../Components/SideMenu/MobileSideMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import './Qualification.scss';


const Qualification = () => {
  const [visibleSidebar,setVisibleSidebar] = useState(false)

  return (
    <>
    <Header/>
    <div id="qualification__page">
      <div className="container flex">
        <SideMenu/>
        <div className="qualification">
          <nav className="breadcrumb after:rounded-md w-full">
              <ol className="list-reset flex">
                <button onClick={()=> setVisibleSidebar(!visibleSidebar)} className='sidebar-btn' data-type='gray'>
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0913 14H1.90903C1.40694 14 1 13.5523 1 13C1 12.4477 1.40694 12 1.90903 12H14.091C14.5931 12 15 12.4477 15 13C15 13.5523 14.5934 14 14.0913 14Z" fill="#fff" />
                      <path d="M14.0913 9H1.90903C1.40694 9 1 8.55233 1 8C1 7.44767 1.40694 7 1.90903 7H14.091C14.5931 7 15 7.44767 15 8C15.0003 8.55233 14.5934 9 14.0913 9Z" fill="#fff" />
                      <path d="M14.0913 4H1.90903C1.40694 4 1 3.55233 1 3C1 2.44767 1.40694 2 1.90903 2H14.091C14.5931 2 15 2.44767 15 3C15 3.55233 14.5934 4 14.0913 4Z" fill="#fff" />
                    </svg>
                    <Drawer
                      className='mobile-drawer'
                        placement="left"
                        closable={false}
                        onClose={() => setVisibleSidebar(false)}
                        visible={visibleSidebar}
                      >
                        <MobileSideMenu/>
                      </Drawer>
                  </button>
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