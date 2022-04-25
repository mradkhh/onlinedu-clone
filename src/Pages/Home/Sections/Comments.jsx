import {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './Comments.scss'
import Request from '../../../Services/Request'

const Comments = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        Request()
            .get('/reviews')
            .then((res) => {
                setReviews(res?.data)
            })
            .catch(err => console.log(err))
    }, [])
  return (
     <div className="comments__section">
          <div className="container">
              <div className="comments">
                  <div data-aos='fade-down' className="comments__info">
                      <h2  data-aos='fade-right'>Xalqaro ekspertlarning fikrlari</h2>
                      <p  data-aos='fade-right'>«Uzluksiz kasbiy ta’lim» elektron platformasi faoliyati va imkoniyatlarini o'rgangan ta'lim sohasidagi xalqaro ekspertlarning fikrlari bilan tanishing.</p>
                  </div>
                  <div className="comments__items">
                  <Swiper
                     autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={50}
                    >
                    {
                        reviews.map((item, index) =>
                        <SwiperSlide key={index}>
                        <div   data-aos-duration="2000" data-aos="zoom-in" className="comment">
                            <div className="comment__head">
                                <div className="comment__head-img">
                                    <img src={'https://api.onlinedu.uz/storage/'+ item?.image} alt="avatar" />
                                </div>
                                <div className="comment__head-title">
                                    <h5 className="name">{item?.name}</h5>
                                    <h6 className="disc">{item?.position}</h6>
                                </div>
                            </div>
                            <p>{item?.comment}</p>
                        </div>
                    </SwiperSlide>
                        )
                    }
                    </Swiper>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Comments