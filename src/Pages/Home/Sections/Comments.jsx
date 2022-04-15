import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './Comments.scss'

const Comments = () => {
  return (
     <div className="comments__section">
          <div className="container">
              <div className="comments">
                  <div className="comments__info">
                      <h2>Отзывы международных экспертов</h2>
                      <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
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
                    <SwiperSlide>
                        <div className="comment">
                            <p>“Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым.”</p>
                        <img src="/Images/unicef.png" alt="unicef"/>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Comments