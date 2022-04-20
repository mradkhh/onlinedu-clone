import './CourseCard.scss'

const CourseCard = ({image, rating, title, science}) => {
  return (
    <div className="course__card">
      <div className="card-img">
          <img src={image} alt="card" />
          <div className="more">
            <div className="science">{science}</div>
            <div className="rating">
              <img src="/Images/full-star.png" alt="rating" />
              <img src="/Images/full-star.png" alt="rating" />
              <img src="/Images/full-star.png" alt="rating" />
              <img src="/Images/full-star.png" alt="rating" />
              <img src="/Images/empty-star.png" alt="rating" />
              <span>{rating}</span>
            </div>
          </div>
      </div>
      <div className="card-body">
        <h5 className="title">{title}</h5>
      </div>
    </div>
  )
}

export default CourseCard