import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SideMenu from '../../Components/SideMenu/SideMenu'
import EditCard from '../../Components/Cards/Profile/EditCard'
import './Profile.scss'

const Profile = () => {
  return (
    <>
      <Header/>
      <section id="profile__page">
        <div className="container flex">
          <SideMenu/>
          <section className="profile">
          <nav className="breadcrumb after:rounded-md w-full">
            <ol className="list-reset flex">
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Мой аккаунт</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li className="text-grayColor">Мой профиль</li>
            </ol>
          </nav>
          <h4 className='profile__title'>Мой профиль</h4>
          <EditCard
          image="Images/svg/profile/"
          bio="По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен."
          job="Методист"
          name="Бахромов Азизбек"/>
          </section>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Profile