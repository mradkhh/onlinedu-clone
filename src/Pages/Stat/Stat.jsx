import { Drawer } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MobileSideMenu from '../../Components/SideMenu/MobileSideMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import './Stat.scss';


const Stat = () => {
  const [visibleSidebar,setVisibleSidebar] = useState(false)

  return (
    <>
    <Header/>
    <div id="stat__page">
      <div className="container flex">
        <SideMenu/>
        <div className="stat">
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
                <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Мой аккаунт</Link></li>
                <li><span className="text-gray-500 mx-2">
                <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                  </span></li>
                <li className="text-grayColor">Мой профиль</li>
              </ol>
            </nav>
            <h4 className="stat__title">Статистика</h4>
            <div className="stat__info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="stat__info-item">
                <h3 className="title">144 часов</h3>
                <p>Всего часов на обучение</p>
                  <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M32.4869 26.5313L27.4164 23.6049V12.9163C27.4164 12.2754 27.1617 11.6607 26.7085 11.2075C26.2553 10.7543 25.6406 10.4997 24.9997 10.4997C24.3587 10.4997 23.7441 10.7543 23.2908 11.2075C22.8376 11.6607 22.583 12.2754 22.583 12.9163V24.9997C22.5829 25.424 22.6945 25.8408 22.9066 26.2083C23.1187 26.5758 23.4239 26.8809 23.7914 27.093L30.0702 30.718C30.3451 30.8769 30.6486 30.98 30.9634 31.0216C31.2782 31.0631 31.5981 31.0422 31.9048 30.9601C32.2115 30.878 32.499 30.7362 32.7509 30.5429C33.0028 30.3496 33.2142 30.1086 33.3729 29.8336C33.5317 29.5586 33.6347 29.2551 33.676 28.9403C33.7174 28.6254 33.6964 28.3056 33.6141 27.9989C33.5318 27.6922 33.3899 27.4048 33.1965 27.153C33.0031 26.9012 32.7619 26.6899 32.4869 26.5313ZM24.9997 0.833008C20.22 0.833008 15.5476 2.25036 11.5734 4.90583C7.59922 7.56129 4.50171 11.3356 2.6726 15.7515C0.843479 20.1674 0.364898 25.0265 1.29737 29.7144C2.22985 34.4022 4.5315 38.7083 7.91127 42.0881C11.291 45.4679 15.5971 47.7695 20.285 48.702C24.9729 49.6345 29.832 49.1559 34.2479 47.3268C38.6638 45.4977 42.4381 42.4001 45.0935 38.426C47.749 34.4518 49.1664 29.7794 49.1664 24.9997C49.1592 18.5925 46.6108 12.4497 42.0802 7.91913C37.5496 3.38855 31.4069 0.840134 24.9997 0.833008ZM24.9997 44.333C21.1759 44.333 17.438 43.1991 14.2587 41.0748C11.0793 38.9504 8.60131 35.9309 7.13802 32.3982C5.67472 28.8655 5.29186 24.9782 6.03784 21.2279C6.78382 17.4776 8.62514 14.0328 11.329 11.3289C14.0328 8.62513 17.4776 6.78381 21.2279 6.03783C24.9782 5.29185 28.8655 5.67471 32.3982 7.138C35.9309 8.6013 38.9504 11.0793 41.0748 14.2586C43.1991 17.438 44.333 21.1759 44.333 24.9997C44.3272 30.1254 42.2884 35.0395 38.6639 38.6639C35.0395 42.2884 30.1254 44.3271 24.9997 44.333Z" fill="#26CAAC" />
                  </svg>
              </div>
              <div className="stat__info-item">
                <h3 className="title">15 часов</h3>
                <p>Использовано часов обучение</p>
                  <svg width={49} height={49} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M31.6539 25.6983L26.5833 22.7719V12.0833C26.5833 11.4424 26.3287 10.8277 25.8755 10.3745C25.4223 9.92128 24.8076 9.66667 24.1667 9.66667C23.5257 9.66667 22.9111 9.92128 22.4578 10.3745C22.0046 10.8277 21.75 11.4424 21.75 12.0833V24.1667C21.7499 24.591 21.8615 25.0078 22.0736 25.3753C22.2857 25.7428 22.5909 26.0479 22.9583 26.26L29.2372 29.885C29.5121 30.0439 29.8156 30.147 30.1304 30.1886C30.4452 30.2301 30.7651 30.2092 31.0718 30.1271C31.3785 30.045 31.666 29.9032 31.9179 29.7099C32.1698 29.5166 32.3812 29.2756 32.5399 29.0006C32.6987 28.7256 32.8017 28.4221 32.843 28.1072C32.8844 27.7924 32.8633 27.4726 32.7811 27.1659C32.6988 26.8592 32.5569 26.5718 32.3635 26.32C32.1701 26.0682 31.9289 25.8569 31.6539 25.6983ZM24.1667 0C19.387 0 14.7146 1.41735 10.7404 4.07282C6.76621 6.72829 3.66871 10.5026 1.83959 14.9185C0.010471 19.3344 -0.46811 24.1935 0.464367 28.8813C1.39684 33.5692 3.69849 37.8753 7.07826 41.2551C10.458 44.6348 14.7641 46.9365 19.452 47.869C24.1399 48.8015 28.999 48.3229 33.4149 46.4938C37.8307 44.6646 41.6051 41.5671 44.2605 37.5929C46.916 33.6188 48.3333 28.9464 48.3333 24.1667C48.3262 17.7595 45.7778 11.6167 41.2472 7.08612C36.7166 2.55554 30.5739 0.00712573 24.1667 0ZM24.1667 43.5C20.3429 43.5 16.605 42.3661 13.4257 40.2417C10.2463 38.1174 7.7683 35.0979 6.30501 31.5652C4.84171 28.0325 4.45885 24.1452 5.20483 20.3949C5.95081 16.6446 7.79213 13.1998 10.4959 10.4959C13.1998 7.79212 16.6446 5.9508 20.3949 5.20482C24.1452 4.45884 28.0325 4.8417 31.5652 6.305C35.0979 7.76829 38.1174 10.2463 40.2418 13.4256C42.3661 16.605 43.5 20.3429 43.5 24.1667C43.4941 29.2924 41.4554 34.2065 37.8309 37.8309C34.2065 41.4554 29.2924 43.4941 24.1667 43.5Z" fill="#F2994A" />
                  </svg>
              </div>
              <div className="stat__info-item">
                <h3 className="title">119 часов</h3>
                <p>Осталось часов на обучение</p>
                  <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M32.4869 26.5313L27.4164 23.6049V12.9163C27.4164 12.2754 27.1617 11.6607 26.7085 11.2075C26.2553 10.7543 25.6406 10.4997 24.9997 10.4997C24.3587 10.4997 23.7441 10.7543 23.2908 11.2075C22.8376 11.6607 22.583 12.2754 22.583 12.9163V24.9997C22.5829 25.424 22.6945 25.8408 22.9066 26.2083C23.1187 26.5758 23.4239 26.8809 23.7914 27.093L30.0702 30.718C30.3451 30.8769 30.6486 30.98 30.9634 31.0216C31.2782 31.0631 31.5981 31.0422 31.9048 30.9601C32.2115 30.878 32.499 30.7362 32.7509 30.5429C33.0028 30.3496 33.2142 30.1086 33.3729 29.8336C33.5317 29.5586 33.6347 29.2551 33.676 28.9403C33.7174 28.6254 33.6964 28.3056 33.6141 27.9989C33.5318 27.6922 33.3899 27.4048 33.1965 27.153C33.0031 26.9012 32.7619 26.6899 32.4869 26.5313ZM24.9997 0.833008C20.22 0.833008 15.5476 2.25036 11.5734 4.90583C7.59922 7.56129 4.50171 11.3356 2.6726 15.7515C0.843479 20.1674 0.364898 25.0265 1.29737 29.7144C2.22985 34.4022 4.5315 38.7083 7.91127 42.0881C11.291 45.4679 15.5971 47.7695 20.285 48.702C24.9729 49.6345 29.832 49.1559 34.2479 47.3268C38.6638 45.4977 42.4381 42.4001 45.0935 38.426C47.749 34.4518 49.1664 29.7794 49.1664 24.9997C49.1592 18.5925 46.6108 12.4497 42.0802 7.91913C37.5496 3.38855 31.4069 0.840134 24.9997 0.833008ZM24.9997 44.333C21.1759 44.333 17.438 43.1991 14.2587 41.0748C11.0793 38.9504 8.60131 35.9309 7.13802 32.3982C5.67472 28.8655 5.29186 24.9782 6.03784 21.2279C6.78382 17.4776 8.62514 14.0328 11.329 11.3289C14.0328 8.62513 17.4776 6.78381 21.2279 6.03783C24.9782 5.29185 28.8655 5.67471 32.3982 7.138C35.9309 8.6013 38.9504 11.0793 41.0748 14.2586C43.1991 17.438 44.333 21.1759 44.333 24.9997C44.3272 30.1254 42.2884 35.0395 38.6639 38.6639C35.0395 42.2884 30.1254 44.3271 24.9997 44.333Z" fill="#26CAAC" />
                  </svg>
              </div>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Stat