import { Drawer, Input, Select } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Cards/Card';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Paginations from '../../Components/Paginations/Paginations';
import MobileSideMenu from '../../Components/SideMenu/MobileSideMenu';
import './Categories.scss';

const Categories = () => {
  const [visibleSidebar,setVisibleSidebar] = useState(false)
  const { Option } = Select;

  return (
    <section id="categories__page">
      <Header/>
        <div className='categories__wrapper'>
        <div className="container">
          <nav className="breadcrumb mt-6 mb-8 rounded-md w-full">
            <ol className="list-reset flex">
            <button onClick={()=> setVisibleSidebar(!visibleSidebar)} className='sidebar-btn' data-type='gray'>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0913 14H1.90903C1.40694 14 1 13.5523 1 13C1 12.4477 1.40694 12 1.90903 12H14.091C14.5931 12 15 12.4477 15 13C15 13.5523 14.5934 14 14.0913 14Z" fill="#fff" />
                  <path d="M14.0913 9H1.90903C1.40694 9 1 8.55233 1 8C1 7.44767 1.40694 7 1.90903 7H14.091C14.5931 7 15 7.44767 15 8C15.0003 8.55233 14.5934 9 14.0913 9Z" fill="#fff" />
                  <path d="M14.0913 4H1.90903C1.40694 4 1 3.55233 1 3C1 2.44767 1.40694 2 1.90903 2H14.091C14.5931 2 15 2.44767 15 3C15 3.55233 14.5934 4 14.0913 4Z" fill="#fff" />
                </svg>
                <Drawer
                  className='mobile-drawer'
                    placement="left"
                    closable={false}
                    onClose={() => setVisibleSidebar(false)}
                    visible={visibleSidebar}
                  >
                    <MobileSideMenu/>
                  </Drawer>
              </button>
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li className="text-grayColor">Категории курсов</li>
            </ol>
          </nav>
          <div className="categories">
            <h3 className='categories__title'>Категории курсов</h3>
            <div className="categories__head">
              <div className="head__item">
                <label className="head__item-title">Kategoriyalar</label>
                <Select defaultValue="all" style={{width: '100%'}} >
                  <Option value="all">Barcha kategoriyalar</Option>
                  <Option value="tabiiy">Tabiiy fanlar</Option>
                  <Option value="aniq">Aniq fanlar</Option>
                  <Option value="ijtimoiy">Ijtimoiy fanlar</Option>
                </Select>
              </div>
              <div className="head__item">
                <label className="head__item-title">Min. davomiyligi</label>
                <Input placeholder="Min. davomiyligi" />
              </div>
              <div className="head__item">
              <label className="head__item-title">Min. davomiyligi</label>
              <Input placeholder="Min. davomiyligi" />
              </div>
              <div className="head__item">
                <label className="head__item-title">Tillar</label>
                <Select defaultValue="all" style={{width: '100%'}} >
                  <Option value="all">Barcha tillar</Option>
                  <Option value="uz">Uzbek tili</Option>
                  <Option value="ru">Rus tili</Option>
                </Select>
              </div>
              <div className="head__item">
              <button className='category-btn' data-type='primary'>Начать поиск</button>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <Card
            image={"/Images/card1.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Маркетинг"}
            rating={4.5}
            choise={false}
            />
            <Card
            image={"/Images/card2.png"}
            title={"Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта "}
            price={"95 000 сум"}
            science={"Экономика"}
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
        <div className="categories__pagination">
         <Paginations count={3}/>
        </div>
        </div>
        </div>
      <Footer/>
    </section>
  )
}

export default Categories