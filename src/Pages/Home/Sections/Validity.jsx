import React from 'react'
import './Validity.scss'

const Validity = () => {
  return (
    <div className="validity__section">
      <div className="container">
        <div className="validity">
          <h2  data-aos='fade-down' className="validity__title">Sertifikatni haqiqiylikka tekshiring</h2>
          <p data-aos-duration="700"  data-aos='fade-down' className="validity__subtitle">Ushbu platforma orqali ish beruvchilar ham, sertifikat egalari ham
sertifikatning haqiqiyligini tekshirishlari mumkin.</p>
          <div  data-aos='fade-up' className="input__field">
            <input type="text" placeholder='Введите номер вашего сертификата'/>
            <button className='validity-btn' data-type='primary'>Sertifikatni tekshirish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Validity