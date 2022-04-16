import React from 'react'
import './Card.scss'

const Card = ({image, title, price, science, rating, choise}) => {
  return (
      <div className="card">
      <div className="card-img">
        <img src={image} alt="science" />
        <div className="more">
        <span className='science'>{science}</span>
        <div className="rating">
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/full-star.png" alt="star" />
          <img src="/Images/empty-star.png" alt="star" />
          <span>{rating}</span>
        </div>
        </div>
      </div>
      <div className="card__body">
        <h6 className="card__body-title">{title}</h6>
        <div className="card__body-more">
          <span>{price}</span>
          <button data-type={choise ? 'disabled' : 'primary'}>Выбрать</button>
        </div>
      </div>
    </div>
  )
}

export default Card