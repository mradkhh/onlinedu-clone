// import { Select } from "antd"
import { NavLink } from "react-router-dom"
import './LessonTypeCard.scss'

const LessonTypeCard = () => {
  // const {Option} = Select
  return (
    <div id="lesson-type__card">
      <div className="card">
        <div className="select__input">
          <label htmlFor="">Тип урока</label>
        </div>
        <div className="select__btn">
          <NavLink to='lesson-test'>Тест</NavLink>
          <NavLink to='lesson-videocourse'>Видеоурок</NavLink>
          <NavLink to='lesson-vebinar'>Вебинар</NavLink>
          <NavLink to='lesson-text'>Текст</NavLink>
        </div>
      </div>
    </div>
  )
}

export default LessonTypeCard