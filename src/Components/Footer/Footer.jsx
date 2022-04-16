import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="container">
        <div className="footer">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 footer__items">
            <div className="md:col-span-full lg:col-auto footer__logo">
              <img src="/Images/logo.png" alt="footer logo" />
            </div>
            <div className="footer__item">
              <h6>Курсы</h6>
              <Link to={"/"}>Категория</Link>
              <Link to={"/"}>Вторая Категория</Link>
              <Link to={"/"}>Третья Категория</Link>
              <Link to={"/"}>Четвертая Категория</Link>
            </div>
            <div className="footer__item">
              <h6>Мой профиль</h6>
              <Link to={"/"}>Аккаунт</Link>
              <Link to={"/"}>Мои курсы</Link>
              <Link to={"/"}>Избранное</Link>
              <Link to={"/"}>Помощь</Link>
            </div>
            <div className="w-full footer__item">
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