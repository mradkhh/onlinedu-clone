import './Education.scss'

const Education = ({name, specialty, date, image}) => {
  return (
    <div className="education">
        <div className="education__item">
            <div className="item-img">
             <img src={image} alt="education"/>
            </div>
            <div className="item-title">
              <h4 className="name">{name}</h4>
              <h6>{specialty}</h6>
              <span>{date}</span>
            </div>
        </div>
    </div>
  )
}

export default Education