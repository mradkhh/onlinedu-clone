import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div id="no__page">
      <img src="/Images/noun_fail.png" alt="noun fail" />
      <div className="no__page-info">
        <h3>Ошибка 404</h3>
        <p>Ой! Страница не найдена или её не существует</p>
        <Link to="/" type='button'>Вернуться на главную</Link>
      </div>
    </div>
  )
}

export default NotFound