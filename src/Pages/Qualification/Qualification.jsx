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
                <li><span className="text-gray-500 mx-2">
                  <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                  </span></li>
                <li><Link to={"/myaccount"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Мой аккаунт</Link></li>
                <li><span className="text-gray-500 mx-2">
                  <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                  </span></li>
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