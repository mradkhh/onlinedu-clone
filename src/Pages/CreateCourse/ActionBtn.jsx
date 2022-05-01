import './ActionBtn.scss'
import { useNavigate } from 'react-router-dom'


const ActionBtn = ({next, prev}) => {
  const navigate = useNavigate()
  return (
    <div className="action-btn">
      <button onClick={() => navigate(prev)} data-type='gray'>Предыдущий Этап</button>
      <button data-type='primary' onClick={() => navigate(next)}>Следущий Этап</button>
    </div>
  )
}

export default ActionBtn