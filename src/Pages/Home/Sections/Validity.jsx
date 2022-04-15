import React from 'react'
import './Validity.scss'

const Validity = () => {
  return (
    <div className="validity__section">
      <div className="container">
        <div className="validity">
          <h2 className="validity__title">Проверьте свой сертификат на действительность</h2>
          <p className="validity__subtitle">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
          <div className="input__field">
            <input type="text" placeholder='Введите номер вашего сертификата'/>
            <button className='validity-btn' data-type='primary'>Проверить сертификат</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Validity