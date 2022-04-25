import React from 'react'
import './Validity.scss'

const Validity = () => {
  return (
    <div data-aos='zoom-in' className="validity__section">
      <div className="container">
        <div className="validity">
          <h2 className="validity__title">Sertifikatni haqiqiylikka tekshiring</h2>
          <p className="validity__subtitle">Ushbu platforma orqali ish beruvchilar ham, sertifikat egalari ham
sertifikatning haqiqiyligini tekshirishlari mumkin.</p>
          <div className="input__field">
            <input type="text" placeholder='Введите номер вашего сертификата'/>
            <button className='validity-btn' data-type='primary'>Sertifikatni tekshirish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Validity