import './ExpertCard.scss'

const ExpertCard = ({name, job, title}) => {
  return (
    <div className="expert__card">
      <div className="card-img">
        <img src="https://i.pravatar.cc/75" alt="avatar" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <h5>{job}</h5>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ExpertCard