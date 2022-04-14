import { Dropdown, Modal } from 'antd'
import "antd/dist/antd.css"
import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Header.scss'


const Lang = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: var(--whiteColor);
  box-shadow: 0px 0px 22px -8px rgba(68, 76, 82, 0.35);
  overflow: hidden;

  h6 {
    padding: 8px 40px;
    margin: 0;
    cursor: pointer;
    width: 100%;
    text-align: center;
    &:hover {
      background-color: var(--lightGrayColor);
    }
  }
`

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const menu = (
    <Lang >
      <h6>Uzbek</h6>
      <h6>Russian</h6>
    </Lang>
  )



  return (
    <div className="header__section">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
          <div className="header__logo">
            <img src="/Images/logo.png" alt="logo" />
          </div>
          </Link>
          <button className='d-none d-lg-block header__info-btn' data-type='outline'>Yo'riqnoma</button>
          <div className="d-none d-lg-flex input__field">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4733 13.5266L12 11.0733C12.9601 9.87621 13.425 8.3568 13.2992 6.82747C13.1734 5.29814 12.4664 3.87512 11.3237 2.85103C10.1809 1.82694 8.6892 1.27961 7.15528 1.32158C5.62136 1.36356 4.16181 1.99164 3.07676 3.0767C1.99171 4.16175 1.36362 5.62129 1.32164 7.15522C1.27967 8.68914 1.827 10.1808 2.85109 11.3236C3.87519 12.4664 5.2982 13.1733 6.82753 13.2991C8.35686 13.4249 9.87627 12.96 11.0733 11.9999L13.5267 14.4533C13.5886 14.5158 13.6624 14.5654 13.7436 14.5992C13.8249 14.633 13.912 14.6505 14 14.6505C14.088 14.6505 14.1751 14.633 14.2564 14.5992C14.3376 14.5654 14.4114 14.5158 14.4733 14.4533C14.5935 14.329 14.6607 14.1628 14.6607 13.9899C14.6607 13.817 14.5935 13.6509 14.4733 13.5266ZM7.33333 11.9999C6.41035 11.9999 5.5081 11.7262 4.74067 11.2135C3.97324 10.7007 3.3751 9.97185 3.02189 9.11913C2.66868 8.2664 2.57627 7.32809 2.75633 6.42285C2.9364 5.5176 3.38085 4.68608 4.0335 4.03344C4.68614 3.38079 5.51766 2.93634 6.42291 2.75627C7.32815 2.57621 8.26646 2.66862 9.11919 3.02183C9.97191 3.37504 10.7007 3.97318 11.2135 4.74061C11.7263 5.50804 12 6.41029 12 7.33327C12 8.57095 11.5083 9.75793 10.6332 10.6331C9.75799 11.5083 8.57101 11.9999 7.33333 11.9999Z" fill="#0D2E69" stroke="#0D2E69" strokeWidth="0.4" />
            </svg>
            <input type="text" placeholder='Что Вы хотите изучать? Например: Маркетинг'/>
          </div>
          <Dropdown className='d-none d-lg-flex' overlay={menu} trigger={['click']} placement='bottomCenter'>
          <button className='lang__btn' data-type='secondary'>Русский
          <svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33334 1.1133C7.20843 0.989128 7.03946 0.919434 6.86334 0.919434C6.68722 0.919434 6.51825 0.989128 6.39334 1.1133L4.00001 3.4733L1.64001 1.1133C1.5151 0.989128 1.34613 0.919434 1.17001 0.919434C0.993883 0.919434 0.824915 0.989128 0.700006 1.1133C0.637521 1.17527 0.587925 1.249 0.554079 1.33024C0.520233 1.41148 0.502808 1.49862 0.502808 1.58663C0.502808 1.67464 0.520233 1.76177 0.554079 1.84301C0.587925 1.92425 0.637521 1.99799 0.700006 2.05996L3.52667 4.88663C3.58865 4.94911 3.66238 4.99871 3.74362 5.03256C3.82486 5.0664 3.912 5.08383 4.00001 5.08383C4.08801 5.08383 4.17515 5.0664 4.25639 5.03256C4.33763 4.99871 4.41136 4.94911 4.47334 4.88663L7.33334 2.05996C7.39583 1.99799 7.44542 1.92425 7.47927 1.84301C7.51311 1.76177 7.53054 1.67464 7.53054 1.58663C7.53054 1.49862 7.51311 1.41148 7.47927 1.33024C7.44542 1.249 7.39583 1.17527 7.33334 1.1133Z" fill="#0D2E69" />
          </svg>
          </button>
          </Dropdown>
          <button
          onClick={()=> setModalVisible(true)}
          className='sign' data-type='primary'>
          <svg width={16} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.18125 7.18118C9.61478 6.80082 9.96251 6.33038 10.2008 5.80178C10.4392 5.27319 10.5625 4.69882 10.5625 4.11765C10.5625 3.02558 10.1345 1.97824 9.37262 1.20603C8.61075 0.433822 7.57744 0 6.5 0C5.42256 0 4.38925 0.433822 3.62738 1.20603C2.86551 1.97824 2.4375 3.02558 2.4375 4.11765C2.43749 4.69882 2.56084 5.27319 2.79916 5.80178C3.03749 6.33038 3.38522 6.80082 3.81875 7.18118C2.68136 7.7032 1.71638 8.5462 1.03917 9.60939C0.361965 10.6726 0.00119588 11.911 0 13.1765C0 13.3949 0.0856024 13.6044 0.237976 13.7588C0.390349 13.9132 0.597012 14 0.8125 14C1.02799 14 1.23465 13.9132 1.38702 13.7588C1.5394 13.6044 1.625 13.3949 1.625 13.1765C1.625 11.866 2.13861 10.6092 3.05285 9.68253C3.96709 8.75588 5.20707 8.23529 6.5 8.23529C7.79293 8.23529 9.03291 8.75588 9.94715 9.68253C10.8614 10.6092 11.375 11.866 11.375 13.1765C11.375 13.3949 11.4606 13.6044 11.613 13.7588C11.7653 13.9132 11.972 14 12.1875 14C12.403 14 12.6097 13.9132 12.762 13.7588C12.9144 13.6044 13 13.3949 13 13.1765C12.9988 11.911 12.638 10.6726 11.9608 9.60939C11.2836 8.5462 10.3186 7.7032 9.18125 7.18118ZM6.5 6.58823C6.01791 6.58823 5.54664 6.44334 5.1458 6.17187C4.74495 5.90039 4.43253 5.51454 4.24804 5.0631C4.06356 4.61166 4.01528 4.11491 4.10934 3.63566C4.20339 3.15641 4.43554 2.7162 4.77643 2.37068C5.11732 2.02516 5.55164 1.78986 6.02447 1.69453C6.4973 1.5992 6.9874 1.64813 7.43279 1.83512C7.87819 2.02211 8.25887 2.33878 8.52671 2.74506C8.79454 3.15135 8.9375 3.62901 8.9375 4.11765C8.9375 4.77289 8.68069 5.40129 8.22357 5.86462C7.76645 6.32794 7.14646 6.58823 6.5 6.58823Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 13.1833C0 12.7323 0.370383 12.3667 0.827273 12.3667H12.1727C12.6296 12.3667 13 12.7323 13 13.1833C13 13.6344 12.6296 14 12.1727 14H0.827273C0.370383 14 0 13.6344 0 13.1833Z" fill="white" />
          </svg>
          <span className='d-none d-sm-block'>Войти</span>
          </button>
          <button className='d-sm-block d-lg-none mobile__btn' data-type='primary'><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0913 14H1.90903C1.40694 14 1 13.5523 1 13C1 12.4477 1.40694 12 1.90903 12H14.091C14.5931 12 15 12.4477 15 13C15 13.5523 14.5934 14 14.0913 14Z" fill="#fff" />
              <path d="M14.0913 9H1.90903C1.40694 9 1 8.55233 1 8C1 7.44767 1.40694 7 1.90903 7H14.091C14.5931 7 15 7.44767 15 8C15.0003 8.55233 14.5934 9 14.0913 9Z" fill="#fff" />
              <path d="M14.0913 4H1.90903C1.40694 4 1 3.55233 1 3C1 2.44767 1.40694 2 1.90903 2H14.091C14.5931 2 15 2.44767 15 3C15 3.55233 14.5934 4 14.0913 4Z" fill="#fff" />
            </svg>
          </button>
          <Modal
            style={{ top: 100}}
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
            width={570}
          >
            <h3>Kirish</h3>
            <form className='sign__modal-form'>
              <label htmlFor="">Telefon raqam</label>
              <InputMask
                mask='(+999) 99 999 99 99'
                >
              </InputMask>
              <label htmlFor="">Parol</label>
              <input type="password" />
              <div className="checkbox">
                <input type="checkbox" />
                <label htmlFor="checkbox">Eslab qolish</label>
              </div>
              <button data-type='primary'>Kirish</button>
            </form>
            <button className='re-password'>Parolni tiklash</button>
            <button className='sign-up'>Ro'yxatdan o'tish</button>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Header