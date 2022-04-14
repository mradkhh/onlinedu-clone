import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero">
          <div className="hero__info">
            <h1 className='hero__info-title'>Улучшайте свои знания и практикуйте навыки</h1>
            <p className='hero__info-subtitle'>Лучшие онлайн-курсы, собранные в одном месте, помогут Вам сконцентрироваться на изучении материала</p>
            <button className="hero__info-btn" data-type='primary'>Начаь квалификацию</button>
          </div>
          <div className="hero__img"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero