import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
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