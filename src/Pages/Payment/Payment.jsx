import { Link } from 'react-router-dom'
import Select from 'react-select'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SideMenu from '../../Components/SideMenu/SideMenu'
import './Payment.scss'

const Payment = () => {
  return (
    <>
    <Header/>
    <div id="payment__page">
      <div className="container flex">
        <SideMenu/>
        <div className="payment">
          <nav className="breadcrumb after:rounded-md w-full">
              <ol className="list-reset">
                <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
                <li><span className="text-gray-500 mx-2">
                   <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                  </span></li>
                <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Переквалификация</Link></li>
                <li><span className="text-gray-500 mx-2">
                 <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                  </span></li>
                <li className="text-grayColor">Оплата</li>
              </ol>
            </nav>
            <h4 className="payment__title">Оплата</h4>
            <div className="payment__content">
              <div className="payment__content-select">
                <div className="payment__category-select">
                  <h6>Выберите категорию для переквалификации:</h6>
                  <div className="select">
                  <p>Категория</p>
                  <Select/>
                  </div>
                </div>
                <div className="payment__way-select">
                  <h6 className='title'>Выберите способ оплаты:</h6>
                  <div className="link">
                    <a href="https://my.click.uz/auth">
                      <img src="/Images/clickuz.png" alt="clickUz" />
                    </a>
                    <a href="https://payme.uz/home/main">
                      <img src="/Images/payme.png" alt="payme" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="payment__content-total">
                <div className="payment__total">
                  <h6 className='payment__total-title'>Итого:</h6>
                  <div className="payment__total-item">
                    <span>Категория</span>
                    <span>Маркетинг</span>
                  </div>
                  <div className="payment__total-item">
                    <span>Количество часов</span>
                    <span>500 часов</span>
                  </div>
                  <div className="payment__total-item">
                    <span>Количество курсов</span>
                    <span>8</span>
                  </div>
                  <div className="payment__total-item">
                    <span>Дата завершения</span>
                    <span>12.10.2021</span>
                  </div>
                  <div className="dashed"></div>
                  <div className="payment__total-buy">
                    <h5>Итого к оплате:</h5>
                    <h6 className="price">154 500 сум</h6>
                  </div>
                </div>
              </div>
            </div>
            <button data-type='primary' className='buy-btn'>Оплатить</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Payment