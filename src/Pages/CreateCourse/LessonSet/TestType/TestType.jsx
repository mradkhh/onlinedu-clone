import React from 'react'
import './TestType.scss'
import { Radio } from 'antd';

const TestType = () => {
  return (
    <div className="test__type">
      <div className="test__type-title">Тип вопроса</div>
      <Radio.Group >
        <Radio value={true}>Один ответ</Radio>
        <Radio value={false}>Несколько ответов</Radio>
      </Radio.Group>
  </div>
  )
}

export default TestType