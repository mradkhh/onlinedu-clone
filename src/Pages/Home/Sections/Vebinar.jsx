import React from 'react'
import './Vebinar.scss'

const Vebinar = () => {
  return (
    <div className="vebinar__section">
      <div className="container">
        <div data-aos='fade-right' className="vebinar">
          <h1 className="vebinar__title">Mutaxassislar tomonidan o'tkaziladigan vebinarga qo'shiling</h1>
          <p className="vebinar__subtitle">Vebinarlarga qatnashib, yangi bilimlar orttiring, tajribangiz bilan ulashing, savol bering va javoblar oling!</p>
          <div className="vebinar__avatars">
            <div className="vebinar__avatars-items">
              <img src="/Images/avatar3.png" alt="avatar" />
              <img src="/Images/avatar1.png" alt="avatar" />
              <img src="/Images/avatar2.png" alt="avatar" />
              <div className="circle">+120</div>
            </div>
            <h4 className="vebinar__avatars-title">foydalanuvchi barcha yo'nalishlar bo'yicha
vebinarlarga qo'shilishdi.</h4>
          </div>
          <button data-type='primary'>Qo'shish</button>
        </div>
      </div>
    </div>
  )
}

export default Vebinar