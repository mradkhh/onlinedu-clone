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
                    <h3 className='partner__info-title'><span>&#123;</span> 310364+ xalq ta'limi xodimlari <span>&#125;</span> butun O'zbekiston bo'yicha onlayn tarzda malaka oshirishmoqda</h3>
                  </div>
                  <div className="partner__link">
                  <Swiper
                      breakpoints={{
                        // when window width is >= 768px
                        320: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 2,
                        },
                        640: {
                          slidesPerView: 3,
                        },
                        1023: {
                          slidesPerView: 4,
                        },
                        1400: {
                          slidesPerView: 5,
                        }
                      }}
                     autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    tag={'div'}
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
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