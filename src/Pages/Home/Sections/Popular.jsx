import React from 'react'
import Card from '../../../Components/Cards/Card'
import './Popular.scss'

const Popular = () => {
  return (
    <div className="popular__section">
      <div className="container">
        <div className="popular">
          <h2 data-aos='fade-down' className="popular__title">Ommabop kurslar</h2>
          <p data-aos='fade-down' className='popular__subtitle'>Ushbu kurslar bepul va pullik tarzda tavsiya etiladi. <br />
Tanlov tinglovchining ixtiyorida bo’lib, tavsiya etilayotgan kurslarda o’qish majburiy emas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <Card
            image={"/Images/card1.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта"}
            price={"95 000 сум"}
            science={"Milliy o'quv dasturi"}
            rating={4.5}
            choise={false}
            />
            <Card
            image={"/Images/card2.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта"}
            price={"95 000 сум"}
            science={"Ijtimoiy fanlar"}
            rating={4.9}
            choise={true}
            />
            <Card
            image={"/Images/card3.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Менеджмент"}
            rating={4.6}
            choise={false}
            />
            <Card
            image={"/Images/card4.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Манавият"}
            rating={4.6}
            choise={false}
            />
            <Card
            image={"/Images/card5.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Иностранные языки"}
            rating={4}
            choise={false}
            />
            <Card
            image={"/Images/card6.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Политика"}
            rating={4}
            choise={true}
            />
        </div>
            <div className="more">
          <button className='all_course' data-type='primary'>Barcha kurslarni ko'rish</button>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Popular