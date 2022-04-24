import { Link } from 'react-router-dom'
import './Vebinar2.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import PersonalCard from '../../Components/Cards/PersonalCard'

const Vebinar2 = () => {
  return (
    <>
      <Header/>
    <section id="vebinar2__page">
      <div className="container">
      <nav className="breadcrumb mt-6 mb-8 rounded-md w-full">
        <ol className="list-reset flex">
          <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
          <li><span className="text-gray-500 mx-2">></span></li>
          <li><Link to={"/vebinar"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Вебинары</Link></li>
          <li><span className="text-gray-500 mx-2">></span></li>
          <li className="text-grayColor">вебмастеру</li>
        </ol>
      </nav>
        <div className="vebinar2">
          <h4 className="vebinar2__title">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько</h4>
          <div className="vebinar2__info">
            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
             <br /> <br /> По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>
            <PersonalCard
            date="24.12.2020 в 20:30"
            image="/Images/personal.jpg"
            name="Профессор Махмудов Азиз"/>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </>
  )
}

export default Vebinar2