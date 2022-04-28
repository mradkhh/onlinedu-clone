import {useEffect, useState} from 'react'
import Request from 'Services/Request'
import './Expert.scss'
import { Spin } from 'antd'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Expert = () => {
  const [loading, setLoading] = useState(true)
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    window.scrollTo(0,0)
    Request()
      .get('/teachers?page=1&per_page=12')
      .then((res) => {
        setTeachers(res?.data?.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <Header/>
      {
        loading
        ? <Spin size='large'/>
        : <section id="expert__page">
        <div className="container">
          <nav data-aos='fade-right' className="breadcrumb mt-6 mb-8 rounded-md w-full">
            <ol className="list-reset flex">
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><span className="text-gray-500 mx-2">
                  <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                </span></li>
              <li className="text-grayColor">Отзывы международных экспертов</li>
            </ol>
          </nav>
          <div className="expert">
            <h3  data-aos='fade-right' className="expert__title">Отзывы международных экспертов</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 expert__items">
              {
              teachers.map((item, index) =>
                  <div key={index} data-aos='zoom-in' className="item">
                    <img src={'https://api.onlinedu.uz/storage/' + item?.image} alt="professor" />
                    <h4>{item?.name}</h4>
                    <h6>{item?.position}</h6>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
      }
      <Footer/>
    </>
  )
}

export default Expert