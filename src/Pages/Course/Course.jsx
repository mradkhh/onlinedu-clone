import { Link } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import './Course.scss'

const Course = () => {
  return (
    <div id="course__page">
      <Header/>
      <div className="container">
      <nav className="breadcrumb mt-6 mb-8 rounded-md w-full">
        <ol className="list-reset flex">
          <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
          <li><span className="text-gray-500 mx-2">></span></li>
          <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Менеджмент</Link></li>
          <li><span className="text-gray-500 mx-2">></span></li>
          <li className="text-grayColor">Маркетинг и все его тонкости. Профессия маркетолога с 0 </li>
        </ol>
      </nav>
      <h3 className="page__title">Маркетинг и все его тонкости. Профессия маркетолога с 0 </h3>
      <aside className="sidebar">
        <div className="sidebar__cart">
          <div className="sidebar__cart-item rating flex">
            <img src="/Images/full-star.png" alt="rating" />
            <img src="/Images/full-star.png" alt="rating" />
            <img src="/Images/full-star.png" alt="rating" />
            <img src="/Images/full-star.png" alt="rating" />
            <img src="/Images/empty-star.png" alt="rating" />
          </div>
          <div className="sidebar__cart-item name">
            <span>Nomi:</span>
            <h6>PISA</h6>
          </div>
          <div className="sidebar__cart-item lang">
          <span>Til:</span>
            <h6>O'zbek</h6>
          </div>
          <div className="sidebar__cart-item subsicribe">
          <span>A'zo bo'lganlar soni:</span>
            <h6>3662</h6>
           </div>
          <div className="sidebar__cart-item credit">
            <span>Kredit:</span>
            <h6>0</h6>
          </div>
          <div className="sidebar__cart-item free">
            <span>Tarif:</span>
            <h6>Bepul</h6>
          </div>
          <button className="buy" data-type="primary">Kursni sotib olish</button>
        </div>
      </aside>
      </div>
      <Footer/>
    </div>
  )
}

export default Course