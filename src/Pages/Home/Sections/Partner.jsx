import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import './Partner.scss'

const Partner = () => {
  return (
      <div className="partner__section">
          <div className="container">
              <div className="partner">
                  <div className="partner__info">
                      <h3 className="partner__info-title"> 5000+ директоров по всему Узбекистану используют наш сервис для улучшения своих знаний</h3>
                  </div>
                  <div className="partner__link">
                  <Swiper
                      breakpoints={{
                        // when window width is >= 640px
                        320: {
                          width: 320,
                          slidesPerView: 1,
                        },
                        576: {
                          width: 540,
                          slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                          width: 740,
                          slidesPerView: 3,
                        },
                        991: {
                          width: 960,
                          slidesPerView: 4,
                        },
                        1200: {
                          width: 1140,
                          slidesPerView: 4,
                        }
                      }}
                     autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    tag={'div'}
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={10}
                    >
                    <SwiperSlide>
                        <img src="/Images/partner1.png" alt="partner" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/Images/partner2.png" alt="partner" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/Images/partner3.png" alt="partner" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/Images/partner4.png" alt="partner" />
                    </SwiperSlide>

                    </Swiper>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Partner