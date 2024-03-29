import { Checkbox, Drawer, Dropdown, Modal } from 'antd'
import "antd/dist/antd.css"
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import filterNumber from '../../Helpers/filterNumber'
import Request from '../../Services/Request'
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
  const [errors, setErrors] = useState({
    phoneError: false,
    passwordValueError: false
  })
  const [phoneValue, setPhoneValue] = useState('')
  const [checkValue, setCheckValue] = useState(true)
  const [passwordValue, setPasswordValue] = useState('')
  const [botCode, setBotCode] = useState('')
  const [mobileNavCategories, setMobileNavCategories] = useState([])
  const [modalLoginVisible, setModalLoginVisible] = useState(false)
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false)
  const [modalForgotPassVisible ,setModalForgotPassVisible] = useState(false)
  const [modalActionBotVisible, setModalActionBotVisible] = useState(false)
  const [modalRegisterParolVisible, setModalRegisterParolVisible] = useState(false)
  const [modalConfirmVisible, setModalConfirmVisible] = useState(false)
  const [modalFinishSuccessVisible, setModalFinishSuccessVisible] = useState(false)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)
  const [registerDataToTelegram, setRegisterDataToTelegram] = useState([])
  const [registerSmsCode, setRegisterSmsCode] = useState([])
  // const [registerOnLoading, setRegisterOnLoading] = useState(false)


  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const parsePhone = filterNumber(phoneValue)
    if(12 === parsePhone.length && passwordValue.length >= 8) {
      console.log("Success: ", parsePhone, passwordValue)
    } else if(12 !== filterNumber(phoneValue).length) {
      setErrors({...errors, phoneError: true})
      console.log("number err")
    } else {
      setErrors({...errors, passwordValueError: true})
      console.log("pass err")
    }
  }

  const handleRegisterSubmit = (e) => {
    if (e && e.preventDefault) { e.preventDefault()};
    console.log("handle submit working")
    const parsePhone = filterNumber(phoneValue)
    console.log(parsePhone)
    if(parsePhone.length === 12) {
      Request()
        .post('/register', {login: parsePhone})
        .then(res => {
          setRegisterDataToTelegram(res?.data)
        })
        .catch(err => console.log(err))
        setModalRegisterVisible(false)
        setModalActionBotVisible(true)
      } else if(12 !== filterNumber(phoneValue).length) {
        setErrors({...errors, phoneError: true})
        console.log("number err")
      } else {
        setErrors({...errors, passwordValueError: true})
        console.log("pass err")
      }
  }

  const handleForgotPassSubmit = (e) => {
    e.preventDefault()
  }
  const handleBotSubmit = (e) => {
    e.preventDefault()
    const parsePhone = filterNumber(phoneValue)
    if(botCode.length === 5) {
      Request()
        .post('/register', {login: parsePhone, smscode: botCode})
        .then(res => {
          setRegisterSmsCode(res?.data)
        })
        .catch(err => console.log(err))
        setModalActionBotVisible(false)
        setModalRegisterParolVisible(true)
      } else if(12 !== filterNumber(phoneValue).length) {
        setErrors({...errors, phoneError: true})
        console.log("number err")
      } else {
        setErrors({...errors, passwordValueError: true})
        console.log("pass err")
      }

  }
  const handleRegisterParolSubmit = (e) => {
    e.preventDefault()

  }
  const handleFinishSuccessSubmit = (e) => {
    e.preventDefault()

  }
  const handleConfirmSubmit = (e) => {
    e.preventDefault()
    const parsePhone = filterNumber(phoneValue)
    if(botCode.length === 5) {
      Request()
        .post('/register', {login: parsePhone, smscode: botCode})
        .then(res => {
          setRegisterSmsCode(res?.data)
        })
        .catch(err => console.log(err))
        setModalActionBotVisible(true)
        setModalConfirmVisible(false)
      } else if(12 !== filterNumber(phoneValue).length) {
        setErrors({...errors, phoneError: true})
        console.log("number err")
      } else {
        setErrors({...errors, passwordValueError: true})
        console.log("pass err")
      }

  }

  const menu = (
    <Lang >
      <h6>Uzbek</h6>
      <h6>Russian</h6>
    </Lang>
  )

  const handleToasty = () => {
    toast.success("Yo'riqnoma bosildi!")
  }
  useEffect(() => {
      window.scrollTo(0, 0)
    Request()
      .get('/paid/categories')
      .then((res) => {
        setMobileNavCategories(res.data?.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div  data-aos-once="true" data-aos='fade-down' className="header__section">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
          <div className="header__logo">
            <img src="/Images/logo.png" alt="logo" />
          </div>
          </Link>
          <Link
          to="/dashboard"
          className='hidden lg:block header__info-btn' data-type='outline'>Dashboard</Link>

          <div className="hidden lg:flex input__field">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4733 13.5266L12 11.0733C12.9601 9.87621 13.425 8.3568 13.2992 6.82747C13.1734 5.29814 12.4664 3.87512 11.3237 2.85103C10.1809 1.82694 8.6892 1.27961 7.15528 1.32158C5.62136 1.36356 4.16181 1.99164 3.07676 3.0767C1.99171 4.16175 1.36362 5.62129 1.32164 7.15522C1.27967 8.68914 1.827 10.1808 2.85109 11.3236C3.87519 12.4664 5.2982 13.1733 6.82753 13.2991C8.35686 13.4249 9.87627 12.96 11.0733 11.9999L13.5267 14.4533C13.5886 14.5158 13.6624 14.5654 13.7436 14.5992C13.8249 14.633 13.912 14.6505 14 14.6505C14.088 14.6505 14.1751 14.633 14.2564 14.5992C14.3376 14.5654 14.4114 14.5158 14.4733 14.4533C14.5935 14.329 14.6607 14.1628 14.6607 13.9899C14.6607 13.817 14.5935 13.6509 14.4733 13.5266ZM7.33333 11.9999C6.41035 11.9999 5.5081 11.7262 4.74067 11.2135C3.97324 10.7007 3.3751 9.97185 3.02189 9.11913C2.66868 8.2664 2.57627 7.32809 2.75633 6.42285C2.9364 5.5176 3.38085 4.68608 4.0335 4.03344C4.68614 3.38079 5.51766 2.93634 6.42291 2.75627C7.32815 2.57621 8.26646 2.66862 9.11919 3.02183C9.97191 3.37504 10.7007 3.97318 11.2135 4.74061C11.7263 5.50804 12 6.41029 12 7.33327C12 8.57095 11.5083 9.75793 10.6332 10.6331C9.75799 11.5083 8.57101 11.9999 7.33333 11.9999Z" fill="#0D2E69" stroke="#0D2E69" strokeWidth="0.4" />
            </svg>
            <input type="text" placeholder='Что Вы хотите изучать? Например: Маркетинг'/>
          </div>
          <Dropdown className='hidden lg:flex' overlay={menu} trigger={['click']} placement='bottom'>
          <button className='lang__btn' data-type='secondary'>Русский
          <svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33334 1.1133C7.20843 0.989128 7.03946 0.919434 6.86334 0.919434C6.68722 0.919434 6.51825 0.989128 6.39334 1.1133L4.00001 3.4733L1.64001 1.1133C1.5151 0.989128 1.34613 0.919434 1.17001 0.919434C0.993883 0.919434 0.824915 0.989128 0.700006 1.1133C0.637521 1.17527 0.587925 1.249 0.554079 1.33024C0.520233 1.41148 0.502808 1.49862 0.502808 1.58663C0.502808 1.67464 0.520233 1.76177 0.554079 1.84301C0.587925 1.92425 0.637521 1.99799 0.700006 2.05996L3.52667 4.88663C3.58865 4.94911 3.66238 4.99871 3.74362 5.03256C3.82486 5.0664 3.912 5.08383 4.00001 5.08383C4.08801 5.08383 4.17515 5.0664 4.25639 5.03256C4.33763 4.99871 4.41136 4.94911 4.47334 4.88663L7.33334 2.05996C7.39583 1.99799 7.44542 1.92425 7.47927 1.84301C7.51311 1.76177 7.53054 1.67464 7.53054 1.58663C7.53054 1.49862 7.51311 1.41148 7.47927 1.33024C7.44542 1.249 7.39583 1.17527 7.33334 1.1133Z" fill="#0D2E69" />
          </svg>
          </button>
          </Dropdown>
          <button
          onClick={()=> setModalLoginVisible(modalRegisterVisible ? false : true)}
          className='sign' data-type='primary'>
          <svg width={16} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.18125 7.18118C9.61478 6.80082 9.96251 6.33038 10.2008 5.80178C10.4392 5.27319 10.5625 4.69882 10.5625 4.11765C10.5625 3.02558 10.1345 1.97824 9.37262 1.20603C8.61075 0.433822 7.57744 0 6.5 0C5.42256 0 4.38925 0.433822 3.62738 1.20603C2.86551 1.97824 2.4375 3.02558 2.4375 4.11765C2.43749 4.69882 2.56084 5.27319 2.79916 5.80178C3.03749 6.33038 3.38522 6.80082 3.81875 7.18118C2.68136 7.7032 1.71638 8.5462 1.03917 9.60939C0.361965 10.6726 0.00119588 11.911 0 13.1765C0 13.3949 0.0856024 13.6044 0.237976 13.7588C0.390349 13.9132 0.597012 14 0.8125 14C1.02799 14 1.23465 13.9132 1.38702 13.7588C1.5394 13.6044 1.625 13.3949 1.625 13.1765C1.625 11.866 2.13861 10.6092 3.05285 9.68253C3.96709 8.75588 5.20707 8.23529 6.5 8.23529C7.79293 8.23529 9.03291 8.75588 9.94715 9.68253C10.8614 10.6092 11.375 11.866 11.375 13.1765C11.375 13.3949 11.4606 13.6044 11.613 13.7588C11.7653 13.9132 11.972 14 12.1875 14C12.403 14 12.6097 13.9132 12.762 13.7588C12.9144 13.6044 13 13.3949 13 13.1765C12.9988 11.911 12.638 10.6726 11.9608 9.60939C11.2836 8.5462 10.3186 7.7032 9.18125 7.18118ZM6.5 6.58823C6.01791 6.58823 5.54664 6.44334 5.1458 6.17187C4.74495 5.90039 4.43253 5.51454 4.24804 5.0631C4.06356 4.61166 4.01528 4.11491 4.10934 3.63566C4.20339 3.15641 4.43554 2.7162 4.77643 2.37068C5.11732 2.02516 5.55164 1.78986 6.02447 1.69453C6.4973 1.5992 6.9874 1.64813 7.43279 1.83512C7.87819 2.02211 8.25887 2.33878 8.52671 2.74506C8.79454 3.15135 8.9375 3.62901 8.9375 4.11765C8.9375 4.77289 8.68069 5.40129 8.22357 5.86462C7.76645 6.32794 7.14646 6.58823 6.5 6.58823Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 13.1833C0 12.7323 0.370383 12.3667 0.827273 12.3667H12.1727C12.6296 12.3667 13 12.7323 13 13.1833C13 13.6344 12.6296 14 12.1727 14H0.827273C0.370383 14 0 13.6344 0 13.1833Z" fill="white" />
          </svg>
          <span className='hidden sm:block'>Войти</span>
          </button>
          <button
          onClick={() => setDrawerVisible(true)}
          className='block lg:hidden  mobile__btn' data-type='primary'>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0913 14H1.90903C1.40694 14 1 13.5523 1 13C1 12.4477 1.40694 12 1.90903 12H14.091C14.5931 12 15 12.4477 15 13C15 13.5523 14.5934 14 14.0913 14Z" fill="#fff" />
              <path d="M14.0913 9H1.90903C1.40694 9 1 8.55233 1 8C1 7.44767 1.40694 7 1.90903 7H14.091C14.5931 7 15 7.44767 15 8C15.0003 8.55233 14.5934 9 14.0913 9Z" fill="#fff" />
              <path d="M14.0913 4H1.90903C1.40694 4 1 3.55233 1 3C1 2.44767 1.40694 2 1.90903 2H14.091C14.5931 2 15 2.44767 15 3C15 3.55233 14.5934 4 14.0913 4Z" fill="#fff" />
            </svg>
          </button>
          <Drawer
          className='lg:hidden'
          footer={
            <button
            onClick={handleToasty}
            className='header__info-btn' data-type='outline'>Yo'riqnoma</button>
          }
          title={
            <div className="mobile-lang">
              <button data-type='outline'>Ru</button>
              <button data-type='primary'>Uz</button>
            </div>
          }
          closable={false}
          placement="left"
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
        >

          <nav className="mobile-nav">
            <ul>
              {
                mobileNavCategories.map((item, index) =>
                <li key={index}><Link to={item?.slug}>{item?.name}</Link></li>
                )
              }
            </ul>
          </nav>
        </Drawer>

        {/* Login modal */}
          <Modal
            style={{ top: 100}}
            visible={modalLoginVisible}
            footer={null}
            onCancel={() => setModalLoginVisible(false)}
            width={570}
          >
            <h3>Kirish</h3>
            <form onSubmit={handleLoginSubmit} className='login__modal-form'>
              <label htmlFor="phone">Telefon raqam</label>
              <InputMask
                name='phone'
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                mask='(+999) 99 999 99 99'
                >
              </InputMask>
              <div className="password__field w-full">
                <label htmlFor="password">Parol</label>
                <input
                className='w-full'
                max={13}
                name='password'
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                type={passwordShow ? 'text' : 'password'} />
                <div onClick={() => setPasswordShow(!passwordShow)} className="eye">
                  <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6901 11.5526C18.8309 7.23598 15.3334 4.55762 11.5597 4.55762C7.7861 4.55762 4.28858 7.23598 2.42938 11.5526C2.3787 11.6688 2.35254 11.7941 2.35254 11.9208C2.35254 12.0475 2.3787 12.1728 2.42938 12.289C4.28858 16.6056 7.7861 19.284 11.5597 19.284C15.3334 19.284 18.8309 16.6056 20.6901 12.289C20.7408 12.1728 20.7669 12.0475 20.7669 11.9208C20.7669 11.7941 20.7408 11.6688 20.6901 11.5526ZM11.5597 17.4432C8.64207 17.4432 5.88087 15.3355 4.28858 11.9208C5.88087 8.50612 8.64207 6.39841 11.5597 6.39841C14.4774 6.39841 17.2386 8.50612 18.8309 11.9208C17.2386 15.3355 14.4774 17.4432 11.5597 17.4432ZM11.5597 8.23921C10.8316 8.23921 10.1198 8.45513 9.51434 8.85967C8.90891 9.26421 8.43703 9.83919 8.15838 10.5119C7.87973 11.1846 7.80682 11.9249 7.94887 12.639C8.09093 13.3532 8.44157 14.0092 8.95645 14.5241C9.47133 15.039 10.1273 15.3896 10.8415 15.5317C11.5556 15.6737 12.2959 15.6008 12.9686 15.3221C13.6413 15.0435 14.2163 14.5716 14.6209 13.9662C15.0254 13.3607 15.2413 12.649 15.2413 11.9208C15.2413 10.9444 14.8534 10.008 14.163 9.31752C13.4726 8.62709 12.5361 8.23921 11.5597 8.23921ZM11.5597 13.7616C11.1957 13.7616 10.8398 13.6536 10.537 13.4514C10.2343 13.2491 9.99838 12.9616 9.85905 12.6252C9.71973 12.2889 9.68327 11.9188 9.7543 11.5617C9.82533 11.2046 10.0006 10.8766 10.2581 10.6192C10.5155 10.3617 10.8435 10.1864 11.2006 10.1154C11.5577 10.0443 11.9278 10.0808 12.2642 10.2201C12.6005 10.3595 12.888 10.5954 13.0903 10.8981C13.2926 11.2008 13.4005 11.5567 13.4005 11.9208C13.4005 12.409 13.2066 12.8772 12.8614 13.2224C12.5161 13.5677 12.0479 13.7616 11.5597 13.7616Z"
                     fill={passwordShow ? "#26caac" : "#898da6"} />
                  </svg>
                </div>
              </div>
              <div className="checkbox">
              <Checkbox
              name='checkbox'
              defaultChecked={true}
              checked={checkValue}
              onChange={(e) => setCheckValue(e.target.checked)}
              >Eslab qolish</Checkbox>
              </div>
              <button className='mt-2 py-3' data-type='primary'>Kirish</button>
            </form>
            <button onClick={() => {
              setModalRegisterVisible(false)
              setModalLoginVisible(false)
              setModalForgotPassVisible(true)
            }} className='re-password'>Parolni tiklash</button>
            <button onClick={() => {
              setModalRegisterVisible(true)
              setModalLoginVisible(false)
              setModalForgotPassVisible(false)
            }} className='sign-up'>Ro'yxatdan o'tish</button>
          </Modal>


          {/* Register modal */}
          <Modal
            style={{ top: 100}}
            visible={modalRegisterVisible}
            footer={null}
            onCancel={() => setModalRegisterVisible(false)}
            width={570}
          >
            <h3>Ro'yxatdan o'tish</h3>
              <form onSubmit={handleRegisterSubmit} className='register__modal-form'>
                  <label htmlFor="phone">Telefon raqam</label>
                  <InputMask
                    name='phone'
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(e.target.value)}
                    mask='(+999) 99 999 99 99'
                    >
                  </InputMask>
                  <button onClick={() => {
                          handleRegisterSubmit()
                          setModalRegisterVisible(false)
                          setModalActionBotVisible(true)
                        }} className='mt-1 py-3 w-full' data-type='primary'>Ro'yxatdan o'tish</button>
                </form>
              <button onClick={() => {
                setModalLoginVisible(true)
                setModalRegisterVisible(false)
                setModalForgotPassVisible(false)
              }} className='sign-up' >Kirish</button>
            <button onClick={() => {
               setModalLoginVisible(false)
               setModalRegisterVisible(false)
               setModalForgotPassVisible(true)
            }} className='re-password'>Parolni tiklash</button>
          </Modal>


          {/* Forgot password modal */}
          <Modal
            style={{ top: 100}}
            visible={modalForgotPassVisible}
            footer={null}
            onCancel={() => setModalForgotPassVisible(false)}
            width={570}
          >
            <h3>Parolni tiklash</h3>
            <form onSubmit={handleForgotPassSubmit} className='forgot__modal-form'>
              <label htmlFor="phone">Telefon raqam</label>
              <InputMask
                name='phone'
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                mask='(+999) 99 999 99 99'
                >
              </InputMask>
            <button className='mt-1 py-3 w-full' data-type='primary' >Parolni tiklash</button>
            </form>
              <button onClick={() => {
                setModalLoginVisible(true)
                setModalRegisterVisible(false)
                setModalForgotPassVisible(false)
              }} className='sign-up' >Kirish</button>
            <button onClick={() => {
               setModalLoginVisible(false)
               setModalRegisterVisible(true)
               setModalForgotPassVisible(false)
            }} className='re-password'>Ro'yxatdan o'tish</button>
          </Modal>


          {/* Action register bot modal */}
          <Modal
            style={{ top: 100}}
            visible={modalActionBotVisible}
            footer={null}
            onCancel={() => setModalActionBotVisible(false)}
            width={570}
          >
            <h3>Telegram Bot orqali tasdiqlash</h3>
            <p
            className='text-center font-medium text-base'
            >Bizning telegram botimizga a'zo bo'ling. Botimiz orqali tastiqlash kodini oling.</p>
            <div className="flex items-center justify-center">
            <a className='my-2 text-center' rel='noreferrer' target='_blank' href='https://t.me/avloniy_onlinedu_bot'>
              <button className='text-[16px]' data-type='primary'>Botga a'zo bo'lish</button>
            </a>
            </div>
            <form onSubmit={handleBotSubmit} className='bot__modal-form'>
              <label className='text-xs text-grayColor' htmlFor="phone">Telegram botidan olingan tasdilash kodi</label>
              <InputMask
              placeholder='Telegram Botdan olingan tasdiqlash kodi'
                name='phone'
                value={botCode}
                onChange={(e) => setBotCode(e.target.value)}
                mask='99999'
                >
              </InputMask>
            <button
            onClick={() => {
              handleBotSubmit()
              setModalActionBotVisible(false)
              setModalRegisterParolVisible(true)
            }}
            className='mt-3 py-3 w-full' data-type='primary' >Yuborish</button>
            </form>
              <button onClick={() => {
                setModalLoginVisible(true)
                setModalRegisterVisible(false)
                setModalActionBotVisible(false)
              }} className='sign-up' >Kirish</button>
            <button onClick={() => {
               setModalLoginVisible(false)
               setModalRegisterVisible(true)
               setModalActionBotVisible(false)
            }} className='re-password'>Ro'yxatdan o'tish</button>
          </Modal>

          {/* Register parol */}
          <Modal
            style={{ top: 100}}
            visible={modalRegisterParolVisible}
            footer={null}
            onCancel={() => setModalRegisterParolVisible(false)}
            width={570}
          >
            <h3>Parol o'rnatish</h3>
            <form onSubmit={handleRegisterParolSubmit} className='bot__modal-form'>

            </form>
            <div className="password__field w-full">
                <label htmlFor="password">Parol</label>
                <input
                className='w-full'
                max={13}
                name='password'
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                type={passwordShow ? 'text' : 'password'} />
                <div onClick={() => setPasswordShow(!passwordShow)} className="eye">
                  <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6901 11.5526C18.8309 7.23598 15.3334 4.55762 11.5597 4.55762C7.7861 4.55762 4.28858 7.23598 2.42938 11.5526C2.3787 11.6688 2.35254 11.7941 2.35254 11.9208C2.35254 12.0475 2.3787 12.1728 2.42938 12.289C4.28858 16.6056 7.7861 19.284 11.5597 19.284C15.3334 19.284 18.8309 16.6056 20.6901 12.289C20.7408 12.1728 20.7669 12.0475 20.7669 11.9208C20.7669 11.7941 20.7408 11.6688 20.6901 11.5526ZM11.5597 17.4432C8.64207 17.4432 5.88087 15.3355 4.28858 11.9208C5.88087 8.50612 8.64207 6.39841 11.5597 6.39841C14.4774 6.39841 17.2386 8.50612 18.8309 11.9208C17.2386 15.3355 14.4774 17.4432 11.5597 17.4432ZM11.5597 8.23921C10.8316 8.23921 10.1198 8.45513 9.51434 8.85967C8.90891 9.26421 8.43703 9.83919 8.15838 10.5119C7.87973 11.1846 7.80682 11.9249 7.94887 12.639C8.09093 13.3532 8.44157 14.0092 8.95645 14.5241C9.47133 15.039 10.1273 15.3896 10.8415 15.5317C11.5556 15.6737 12.2959 15.6008 12.9686 15.3221C13.6413 15.0435 14.2163 14.5716 14.6209 13.9662C15.0254 13.3607 15.2413 12.649 15.2413 11.9208C15.2413 10.9444 14.8534 10.008 14.163 9.31752C13.4726 8.62709 12.5361 8.23921 11.5597 8.23921ZM11.5597 13.7616C11.1957 13.7616 10.8398 13.6536 10.537 13.4514C10.2343 13.2491 9.99838 12.9616 9.85905 12.6252C9.71973 12.2889 9.68327 11.9188 9.7543 11.5617C9.82533 11.2046 10.0006 10.8766 10.2581 10.6192C10.5155 10.3617 10.8435 10.1864 11.2006 10.1154C11.5577 10.0443 11.9278 10.0808 12.2642 10.2201C12.6005 10.3595 12.888 10.5954 13.0903 10.8981C13.2926 11.2008 13.4005 11.5567 13.4005 11.9208C13.4005 12.409 13.2066 12.8772 12.8614 13.2224C12.5161 13.5677 12.0479 13.7616 11.5597 13.7616Z"
                     fill={passwordShow ? "#26caac" : "#898da6"} />
                  </svg>
                </div>
              </div>
              <div className="password__field w-full mt-2">
                <label htmlFor="password">Parolni takrorlash</label>
                <input
                className='w-full'
                max={13}
                name='password'
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                type={passwordShow ? 'text' : 'password'} />
              </div>
              <button
              onClick={() => {
                setModalRegisterParolVisible(false)
              }}
              className='mt-3 py-3 w-full' data-type='primary' type='submit'>Yuborish</button>
              <button onClick={() => {
                setModalLoginVisible(true)
                setModalRegisterVisible(false)
                setModalActionBotVisible(false)
                setModalRegisterParolVisible(false)
              }} className='sign-up' >Kirish</button>
            <button onClick={() => {
               setModalLoginVisible(false)
               setModalRegisterVisible(true)
               setModalActionBotVisible(false)
               setModalRegisterParolVisible(false)
            }} className='re-password'>Ro'yxatdan o'tish</button>
          </Modal>

          {/* SMS confirm */}
          <Modal
            style={{ top: 100}}
            visible={modalConfirmVisible}
            footer={null}
            onCancel={() => setModalConfirmVisible(false)}
            width={570}
          >
            <h3>SMSni tasdiqlash</h3>
            <form onSubmit={handleConfirmSubmit} className='bot__modal-form'>
              <div className="password__field w-full">
                  <label htmlFor="password">SMS kod</label>
                  <InputMask
                    placeholder='SMS kod'
                    name='sms'
                    value={botCode}
                    onChange={(e) => setBotCode(e.target.value)}
                    mask='99999'
                    >
                  </InputMask>
                  <p>1:34</p>
                </div>
                <button
                onClick={() => {
                  setModalConfirmVisible(false)
                  setModalRegisterParolVisible(true)
               }}
               className='mt-3 py-3 w-full' data-type='primary' type='submit'>Yuborish</button>
            </form>
              <button onClick={() => {
                setModalLoginVisible(true)
                setModalRegisterVisible(false)
                setModalActionBotVisible(false)
                setModalConfirmVisible(false)
              }} className='sign-up' >Kirish</button>
            <button onClick={() => {
               setModalLoginVisible(false)
               setModalRegisterVisible(true)
               setModalActionBotVisible(false)
               setModalConfirmVisible(false)
            }} className='re-password'>Ro'yxatdan o'tish</button>
          </Modal>


          {/* Success modal  */}
          <Modal
            style={{ top: 100}}
            visible={modalFinishSuccessVisible}
            footer={null}
            onCancel={() => setModalFinishSuccessVisible(false)}
            width={570}
          >
            <h3>Tabriklaymiz!</h3>
            <p>Siz muvaffaqiyatli ro'yxatdan o'tdingiz</p>
              <button
              onClick={() => {
                setModalConfirmVisible(false)
                setModalRegisterParolVisible(true)
              }}
              className='mt-3 py-3 w-full' data-type='primary' type='submit'>Yopish</button>
              <button onClick={() => {
                setModalLoginVisible(true)
                setModalRegisterVisible(false)
                setModalActionBotVisible(false)
                setModalConfirmVisible(false)
              }} className='sign-up' >Kirish</button>
            <button onClick={() => {
               setModalLoginVisible(false)
               setModalRegisterVisible(true)
               setModalActionBotVisible(false)
               setModalConfirmVisible(false)
            }} className='re-password'>Ro'yxatdan o'tish</button>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Header