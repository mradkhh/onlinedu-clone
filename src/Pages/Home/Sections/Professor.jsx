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
              spaceBetween: 40
            },
            460: {
              width: 440,
              slidesPerView: 1,
            },
            576: {
              width: 540,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 740,
              slidesPerView: 2,
              spaceBetween: 10
            },
            991: {
              width: 960,
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              width: 1140,
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400: {
              width: 1295,
              slidesPerView: 3,
              spaceBetween: 30,
            }

          }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
          }}
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          >
          <SwiperSlide style={{
            maxWidth: 600,
            width: '100%'
          }}>
            <div className="item">
              <img src="/Images/professor1.png" alt="professor" />
              <h4>Мурад Аскаров</h4>
              <h6>Маркетинг специалист</h6>
              <p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой.</p>
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
          <SwiperSlide>
            <div className="item">
              <img src="/Images/professor3.png" alt="professor" />
              <h4>Мурад Аскаров</h4>
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
        <button className='more' data-type='primary'>Посмотреть всех</button>
        </div>
      </div>
    </div>
  )
}

export default Professor