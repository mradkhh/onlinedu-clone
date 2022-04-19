import './NotFound.scss'

const NotFound = () => {
  return (
    <div id="no__page">
      <img src="/Images/noun_fail.png" alt="noun fail" />
      <div className="no__page-info">
        <h3>Ошибка 404</h3>
        <p>Ой! Страница не найдена или её не существует</p>
        <button data-type='primary'>Вернуться на главную</button>
      </div>
    </div>
  )
}

export default NotFound