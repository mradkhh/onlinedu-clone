import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className="about__section">
      <div className="container">
        <div className="about">
          <div className="about__info">
            <h2 className="about__info-title">Все продуманно для Вашего удобства</h2>
            <p className="about__info-subtitle">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
          </div>
          <div className="row about__items">
            <div className="col-12 col-md-6 col-lg-3 about__items-child">
              <img src="/Images/about1.png" alt="about" />
              <h5>Легко используемый интерфейс</h5>
              <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 about__items-child">
              <img src="/Images/about2.png" alt="about" />
              <h5>Квалифицированные специалисты</h5>
              <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 about__items-child">
              <img src="/Images/about3.png" alt="about" />
              <h5>Доступный и понятный видео-материал </h5>
              <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 about__items-child">
              <img src="/Images/about4.png" alt="about" />
              <h5>20 000+ курсов по разным направлениям</h5>
              <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About