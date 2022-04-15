import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './Professor.scss'

const Professor = () => {
  return (
    <div className="professor__section">
      <div className="container">
        <div className="professor">
          <div className="professor__info">
            <h2 className="professor__info-title">Отзывы международных экспертов</h2>
            <p className="professor__info-subtitle">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
          </div>
          <div className="professor__items">
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
              slidesPerView: 3,
            },
            1200: {
              width: 1140,
              slidesPerView: 3,
            }
          }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
          }}
          modules={[Autoplay]}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          >
          <SwiperSlide>
            <div className="item">
              <img src="/Images/professor1.png" alt="professor" />
              <h4>Мурад Аскаров</h4>
              <h6>Маркетинг специалист</h6>
              <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="/Images/professor2.png" alt="professor" />
              <h4>Александр Крюков</h4>
              <h6>Маркетинг специалист</h6>
              <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="/Images/professor3.png" alt="professor" />
              <h4>Мурад Аскаров</h4>
              <h6>Маркетинг специалист</h6>
              <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
            </div>
          </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Professor