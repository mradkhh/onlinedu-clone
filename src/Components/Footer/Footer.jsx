import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="container">
        <div data-aos="fade-down" className="footer">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 footer__items">
            <div className="md:col-span-full lg:col-auto footer__logo">
              <img src="/Images/logo.png" alt="footer logo" />
            </div>
            <div className="footer__item">
              <h4>Курсы</h4>
              <Link to={"/"}>Aniq fanlar</Link>
              <Link to={"/"}>Tabiiy fanlar</Link>
              <Link to={"/"}>Xorijiy tillar</Link>
              <Link to={"/"}>PISA</Link>
            </div>
            <div className="footer__item">
              <h4>Мой профиль</h4>
              <Link to={"/"}>Аккаунт</Link>
              <Link to={"/"}>Мои курсы</Link>
              <Link to={"/"}>Избранное</Link>
              <Link to={"/"}>Помощь</Link>
            </div>
            <div className="w-full footer__item">
              <h4>CЛУЖБА ПОДДЕРЖКИ</h4>
              <Link to={"/"}>Политика конфиденциальности</Link>
              <Link to={"/"}>Помощь</Link>
              <Link to={"/faq"}>FAQ</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="copyright">
          <p className="title">
          © 2021-2022 Copyright. <span>Barcha huquqlar himoyalangan.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer