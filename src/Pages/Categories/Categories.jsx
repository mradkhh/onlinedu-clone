import { Link } from 'react-router-dom'
import Select from 'react-select';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Cards/Card';
import Paginations from '../../Components/Paginations/Paginations'
import './Categories.scss'

// const customStyles =  {
//   control: styles => ({
//     ...styles,
//     border: '2px solid red',
//   })
// }

const optionsFan = [
  { value: 'all', label: 'Barcha kategoriyalar'},
  { value: 'aniqFan', label: 'Aniq fanlar'},
  { value: 'tabiyFan', label: 'Tabiiy fanlar'},
  { value: 'ijtimoiy', label: 'Ijtimoiy fanlar'}
]

const optionsTil = [
  { value: 'all', label: 'Barcha tillar'},
  { value: 'uz', label: 'Uzbek tili'},
  { value: 'ru', label: 'Rus tili'}
]

const Categories = () => {

  return (
    <section id="categories__page">
      <Header/>
      <div className="categories">
        <div className="container">
          <nav className="breadcrumb mt-6 mb-8 rounded-md w-full">
            <ol className="list-reset flex">
              <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><span className="text-gray-500 mx-2">></span></li>
              <li className="text-grayColor">Категории курсов</li>
            </ol>
          </nav>
          <div className="categories">
            <h3 className='categories__title'>Категории курсов</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 categories__head">
              <div className="head__item">
                <label className="head__item-title">Kategoriyalar</label>
                <select className='category-select' name="" id="">
                  <option value="">Barcha fanlar</option>
                  <option value="">Tabiiy fanlar</option>
                  <option value="">Aniq fanlar</option>
                </select>
              </div>
              <div className="head__item">
                <label className="head__item-title">Min. davomiyligi</label>
                <input type="text" />
              </div>
              <div className="head__item">
              <label className="head__item-title">Min. davomiyligi</label>
                <input type="text" />
              </div>
              <div className="head__item">
                <label className="head__item-title">Tillar</label>
                <select name="" id="">
                  <option value="">Barcha tillar</option>
                  <option value="">Uzbek tili</option>
                  <option value="">Rus tili</option>
                </select>
              </div>
              <div className="head__item">
                <label htmlFor="">dd</label>
              <button className='w-fit' data-type='primary'>Начать поиск</button>
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
         <Paginations count={15}/>
        </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Categories