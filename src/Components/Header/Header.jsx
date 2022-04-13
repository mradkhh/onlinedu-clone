import React from 'react'
import styles from './Header.module.scss'


const Header = () => {

  return (
    <div className="header__section">
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img src="/Images/logo.png" alt="logo" />
          </div>
          <button className='header__info-btn' data-type='outline'>Категории</button>

        </div>
      </div>
    </div>
  )
}

export default Header