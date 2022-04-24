import { Drawer } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import EditCard from '../../Components/Cards/Profile/EditCard'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import MobileSideMenu from '../../Components/SideMenu/MobileSideMenu'
import SideMenu from '../../Components/SideMenu/SideMenu'
import Education from './Education'
// import CourseCard from './CourseCard'
import './Profile.scss'

const Profile = () => {
  const [visibleSidebar,setVisibleSidebar] = useState(false)

  return (
    <>
      <Header/>
      <section id="profile__page">
        <div className="container flex">
          <SideMenu/>
          <section className="profile">
          <nav className="breadcrumb after:rounded-md">
            <ol className="list-reset flex">
              <button onClick={()=> setVisibleSidebar(!visibleSidebar)} className='sidebar-btn' data-type='gray'>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0913 14H1.90903C1.40694 14 1 13.5523 1 13C1 12.4477 1.40694 12 1.90903 12H14.091C14.5931 12 15 12.4477 15 13C15 13.5523 14.5934 14 14.0913 14Z" fill="#fff" />
                  <path d="M14.0913 9H1.90903C1.40694 9 1 8.55233 1 8C1 7.44767 1.40694 7 1.90903 7H14.091C14.5931 7 15 7.44767 15 8C15.0003 8.55233 14.5934 9 14.0913 9Z" fill="#fff" />
                  <path d="M14.0913 4H1.90903C1.40694 4 1 3.55233 1 3C1 2.44767 1.40694 2 1.90903 2H14.091C14.5931 2 15 2.44767 15 3C15 3.55233 14.5934 4 14.0913 4Z" fill="#fff" />
                </svg>

              </button>
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Asosiy</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li className="text-grayColor">Mening profilim</li>
            </ol>
          </nav>
          <h4 className='profile__title'>Mening profilim</h4>
          <Drawer
            placement="left"
            closable={false}
            onClose={() => setVisibleSidebar(false)}
            visible={visibleSidebar}
          >
            <MobileSideMenu/>
          </Drawer>
          <EditCard
          image="Images/side-menu/profil.png"
          bio="По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен."
          job="Методист"
          name="Bahromov Azizbek"/>
          <div className="education__section">
            <div className="education__head">
              <h4 className='education__head-title'>Образование</h4>
              <a href="/" className="education__head-btn" data-type='gray'>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6668 4.82635C14.6673 4.73861 14.6505 4.65164 14.6174 4.57041C14.5842 4.48919 14.5353 4.41531 14.4735 4.35302L11.6468 1.52635C11.5845 1.46456 11.5107 1.41568 11.4294 1.3825C11.3482 1.34933 11.2612 1.33251 11.1735 1.33302C11.0858 1.33251 10.9988 1.34933 10.9176 1.3825C10.8363 1.41568 10.7625 1.46456 10.7002 1.52635L8.81351 3.41302L1.52684 10.6997C1.46505 10.762 1.41617 10.8359 1.38299 10.9171C1.34982 10.9983 1.333 11.0853 1.33351 11.173V13.9997C1.33351 14.1765 1.40375 14.3461 1.52877 14.4711C1.65379 14.5961 1.82336 14.6664 2.00017 14.6664H4.82684C4.92013 14.6714 5.01344 14.6568 5.10072 14.6235C5.188 14.5902 5.26731 14.5389 5.33351 14.473L12.5802 7.18635L14.4735 5.33302C14.5344 5.26841 14.5839 5.19404 14.6202 5.11302C14.6266 5.05988 14.6266 5.00616 14.6202 4.95302C14.6233 4.92199 14.6233 4.89072 14.6202 4.85969L14.6668 4.82635ZM4.55351 13.333H2.66684V11.4464L9.28684 4.82635L11.1735 6.71302L4.55351 13.333ZM12.1135 5.77302L10.2268 3.88635L11.1735 2.94635L13.0535 4.82635L12.1135 5.77302Z" fill="#0D2E69" />
                </svg>
                Изменить</a>
            </div>
            <Education
            image="/Images/side-menu/university.png"
            date="2016 - 2020"
            specialty="Business Information System"
            name="Westminster International University in Tashkent"/>
            <Education
            image="/Images/side-menu/university.png"
            date="2012 - 2016"
            specialty="Computer science"
            name="INHA University in Tashkent"/>
          </div>
          <div className="education__section">
            <div className="education__head">
              <h4 className='education__head-title'>Место работы</h4>
              <a href="/" className="education__head-btn" data-type='gray'>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6668 4.82635C14.6673 4.73861 14.6505 4.65164 14.6174 4.57041C14.5842 4.48919 14.5353 4.41531 14.4735 4.35302L11.6468 1.52635C11.5845 1.46456 11.5107 1.41568 11.4294 1.3825C11.3482 1.34933 11.2612 1.33251 11.1735 1.33302C11.0858 1.33251 10.9988 1.34933 10.9176 1.3825C10.8363 1.41568 10.7625 1.46456 10.7002 1.52635L8.81351 3.41302L1.52684 10.6997C1.46505 10.762 1.41617 10.8359 1.38299 10.9171C1.34982 10.9983 1.333 11.0853 1.33351 11.173V13.9997C1.33351 14.1765 1.40375 14.3461 1.52877 14.4711C1.65379 14.5961 1.82336 14.6664 2.00017 14.6664H4.82684C4.92013 14.6714 5.01344 14.6568 5.10072 14.6235C5.188 14.5902 5.26731 14.5389 5.33351 14.473L12.5802 7.18635L14.4735 5.33302C14.5344 5.26841 14.5839 5.19404 14.6202 5.11302C14.6266 5.05988 14.6266 5.00616 14.6202 4.95302C14.6233 4.92199 14.6233 4.89072 14.6202 4.85969L14.6668 4.82635ZM4.55351 13.333H2.66684V11.4464L9.28684 4.82635L11.1735 6.71302L4.55351 13.333ZM12.1135 5.77302L10.2268 3.88635L11.1735 2.94635L13.0535 4.82635L12.1135 5.77302Z" fill="#0D2E69" />
                </svg>
                Изменить</a>
            </div>
            <Education
            image="/Images/side-menu/build.png"
            date="2017 - Настоящее время • 3 года 7 месяцев"
            specialty="Андижанская область, Определенный район, 151 средняя школа"
            name="Директор"/>
            <Education
            image="/Images/side-menu/build.png"
            date="2012 - 2016 • 4 года 2 месяцев"
            specialty="Навоинская область, Высоковольтный район, 145 школа"
            name="Учитель Русского языка и литературы"/>
          </div>
          {/* <div className="course">
            <h4 className="course__title">Пройденные курсы</h4>
            <div className="course__items">
            <CourseCard
            image="/Images/profilcard1.png"
            rating="4.6"
            science="Маркетинг"
            title="Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "/>
            <CourseCard
            image="/Images/profilcard1.png"
            rating="4.6"
            science="Маркетинг"
            title="Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "/>
            <CourseCard
            image="/Images/profilcard1.png"
            rating="4.6"
            science="Маркетинг"
            title="Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "/>
            <CourseCard
            image="/Images/profilcard1.png"
            rating="4.6"
            science="Маркетинг"
            title="Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "/>
            <CourseCard
            image="/Images/profilcard1.png"
            rating="4.6"
            science="Маркетинг"
            title="Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "/>
            </div>
          </div> */}
          </section>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Profile