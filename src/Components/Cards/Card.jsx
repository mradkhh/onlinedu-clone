import React from 'react'
import './Card.scss'

const Card = ({image, title, price, science, rating, choise}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
      <div className="card-img">
        <img src={image} alt="science" />
        <div className="more">
        <span>{science}</span>
        <div className="rating">
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/empty-star.png" alt="star" />
        </div>
        </div>
      </div>
      <div className="card__body">
        <div className="card__body-title">{title}</div>
        <div className="card__body-more">
          <span>{price}</span>
          <button data-type={choise ? 'disabled' : 'primary'}>Выбрать</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card