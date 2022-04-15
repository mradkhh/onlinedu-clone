import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="container">
        <div className="footer">
          <div className="row footer__items">
            <div className="col-12 col-md-6 col-lg-3 flex-lg-1 footer__logo">
              <img src="/Images/logo.png" alt="footer logo" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 footer__item">
              <h6>Курсы</h6>
              <Link to={"/"}>Категория</Link>
              <Link to={"/"}>Вторая Категория</Link>
              <Link to={"/"}>Третья Категория</Link>
              <Link to={"/"}>Четвертая Категория</Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 footer__item">
              <h6>Мой профиль</h6>
              <Link to={"/"}>Аккаунт</Link>
              <Link to={"/"}>Мои курсы</Link>
              <Link to={"/"}>Избранное</Link>
              <Link to={"/"}>Помощь</Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 footer__item">
              <h6>CЛУЖБА ПОДДЕРЖКИ</h6>
              <Link to={"/"}>Политика конфиденциальности</Link>
              <Link to={"/"}>Помощь</Link>
              <Link to={"/"}>FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer