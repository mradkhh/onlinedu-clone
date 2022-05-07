import './StepCard.scss'
import {Progress} from 'antd'

const StepCard = ({step}) => {
  return (
    <div className="create-course__content-card">
      <Progress strokeWidth={8} strokeColor="#26CAAC" type="circle" percent={33} width={130} format={() => step}/>
      <p>Для того чтобы перейти на следеющий этап заполните все поля</p>
      <button data-type='gray'>Опубликоват ь</button>
    </div>
  )
}

export default StepCard