import React from 'react'
import Card from '../../../Components/Cards/Card'

const Popular = () => {
  return (
    <div className="popular__section">
      <div className="container">
        <div className="popular">
          <h2 className="popular__title">Популярные курсы</h2>
          <div className="row">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular