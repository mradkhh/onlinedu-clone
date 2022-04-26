import {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Request from 'Services/Request';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './Professor.scss'

const Professor = () => {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    Request()
      .get('/teachers?page=1&per_page=5')
      .then((res) => {
        setTeachers(res?.data?.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="professor__section">
      <div className="container">
        <div className="professor">
          <div className="professor__info">
            <h2  data-aos='fade-down' className="professor__info-title">Bizning mutaxassislar</h2>
            <p data-aos='fade-down' className="professor__info-subtitle">Yetakchi mutaxassislarimiz tomonidan tayyorlangan kurslar sizga kerakli barcha bilimlarni berib, kasbiy rivojlanishingizga yordam beradi.</p>
          </div>
          <div className="professor__items">
          <Swiper
           breakpoints={{
            // when window width is >= 640px
              // when window width is >= 768px
              320: {
                slidesPerView: 1,
              },
              678: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              }
          }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
          }}
          modules={[Autoplay]}
          loop={true}
          spaceBetween={30}
          >
          {
            teachers.map(item =>
              <SwiperSlide key={item?.id}>
                <div data-aos='zoom-in' className="item">
                  <img src={'https://api.onlinedu.uz/storage/' + item?.image} alt="professor" />
                  <h4>{item?.name}</h4>
                  <h6>{item?.position}</h6>
                </div>
            </SwiperSlide>
              )
          }
          </Swiper>
          </div>
        <button data-aos='fade-up' className='more' data-type='primary'>Barchasini ko'rish</button>
        </div>
      </div>
    </div>
  )
}

export default Professor