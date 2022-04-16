import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Categories.scss'

const Categories = () => {
  return (
    <div id="categories__page">
      <Header/>
      <div className="categories__section">
        <div className="container">
          <nav class="mt-6 mb-8 rounded-md w-full">
            <ol class="list-reset flex">
              <li><Link to={"/"} class="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
              <li><span class="text-gray-500 mx-2">></span></li>
              <li class="text-grayColor">Категории курсов</li>
            </ol>
          </nav>
          <div className="categories">
            <h3 className='categories__title'>Категории курсов</h3>
            <div className="categories__head">
              <div className="head__item w-[320px]">
                <p className="head_item-title">Категории</p>
                <Select/>
              </div>
              <div className="head__item">
                <p className="head_item-title">Длительность</p>
                <Select/>
              </div>
              <div className="head__item">
                <p className="head_item-title">Язык</p>
                <Select/>
              </div>
              <div className="head__item">
                <p className="head_item-title">Рейтинг</p>
                <Select/>
              </div>
              <button data-type='primary'>Начать поиск</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Categories