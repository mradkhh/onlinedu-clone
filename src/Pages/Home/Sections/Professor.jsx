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
            <h2 className="professor__info-title">Bizning mutaxassislar</h2>
            <p className="professor__info-subtitle">Yetakchi mutaxassislarimiz tomonidan tayyorlangan kurslar sizga kerakli barcha bilimlarni berib, kasbiy rivojlanishingizga yordam beradi.</p>
          </div>
          <div className="professor__items">
          <Swiper
           breakpoints={{
            // when window width is >= 640px
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.75": {
              slidesPerView: 1,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30
            }

          }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
          }}
          modules={[Autoplay]}
          loop={true}
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
        <button className='more' data-type='primary'>Barchasini ko'rish</button>
        </div>
      </div>
    </div>
  )
}

export default Professor