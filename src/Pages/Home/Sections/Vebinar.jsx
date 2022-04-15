import React from 'react'
import './Vebinar.scss'

const Vebinar = () => {
  return (
    <div className="vebinar__section">
      <div className="container">
        <div className="vebinar">
          <h2 className="vebinar__title">Присоединяйтесь к вебинарам по определенному курсу</h2>
          <p className="vebinar__subtitle">Участвуйте в вебинарах, делитесь опытом и задавайте вопросы. Все это возможно в отдельных группах, которые доступны при прохождении каждого курса!</p>
          <div className="vebinar__avatars">
            <div className="vebinar__avatars-items">
              <img src="/Images/avatar3.png" alt="avatar" />
              <img src="/Images/avatar1.png" alt="avatar" />
              <img src="/Images/avatar2.png" alt="avatar" />
              <div className="circle">+120</div>
            </div>
            <h4 className="vebinar__avatars-title">человек уже стали участниками групп по своим направлениям</h4>
          </div>
          <button data-type='primary'>Присоединиться</button>
        </div>
      </div>
    </div>
  )
}

export default Vebinar