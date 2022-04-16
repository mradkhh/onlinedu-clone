import React from 'react'
import Card from '../../../Components/Cards/Card'
import './Popular.scss'

const Popular = () => {
  return (
    <div className="popular__section">
      <div className="container">
        <div className="popular">
          <h2 className="popular__title">Популярные курсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div>
            <Card
            image={"/Images/card1.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Маркетинг"}
            rating={4.5}
            choise={false}
            />
            </div>
            <div>
            <Card
            image={"/Images/card2.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Экономика"}
            rating={4.9}
            choise={true}
            />
            </div>
            <div>
            <Card
            image={"/Images/card3.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Менеджмент"}
            rating={4.6}
            choise={false}
            />
            </div>
            <div>
            <Card
            image={"/Images/card4.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Манавият"}
            rating={4.6}
            choise={false}
            />
            </div>
            <div>
            <Card
            image={"/Images/card5.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Иностранные языки"}
            rating={4}
            choise={false}
            />
            </div>
            <div>
            <Card
            image={"/Images/card6.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Политика"}
            rating={4}
            choise={true}
            />
            </div>
          </div>
          <button className='all_course' data-type='primary'>Смотреть все курсы</button>
        </div>
      </div>
    </div>
  )
}

export default Popular