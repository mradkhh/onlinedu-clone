import './TestTypeOutlet.scss'
import TestList from './TestType/TestList'
import TestType from './TestType/TestType';
import { useSelector } from 'react-redux';

const TestTypeOutlet = () => {
  const testData = useSelector(state => state.testReducer)
  console.log(testData)
  return (
    <div id="test__type">
      {
        testData && testData.data.map((test, index) =>
          <div key={index} className="test">
            <div className="test__question">
              <div className="test__question-title">Добавить вопрос</div>
                <TestList
                  test={test}
                />
            </div>
            <TestType
              isOneAnswer={test.isOneAnswer}
            />
          </div>
          )
      }
      <button className='add-question' data-type='primary'>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6665 5.33366H6.6665V1.33366C6.6665 1.15685 6.59627 0.987279 6.47124 0.862254C6.34622 0.73723 6.17665 0.666992 5.99984 0.666992C5.82303 0.666992 5.65346 0.73723 5.52843 0.862254C5.40341 0.987279 5.33317 1.15685 5.33317 1.33366V5.33366H1.33317C1.15636 5.33366 0.98679 5.4039 0.861766 5.52892C0.736742 5.65394 0.666504 5.82351 0.666504 6.00033C0.666504 6.17714 0.736742 6.34671 0.861766 6.47173C0.98679 6.59675 1.15636 6.66699 1.33317 6.66699H5.33317V10.667C5.33317 10.8438 5.40341 11.0134 5.52843 11.1384C5.65346 11.2634 5.82303 11.3337 5.99984 11.3337C6.17665 11.3337 6.34622 11.2634 6.47124 11.1384C6.59627 11.0134 6.6665 10.8438 6.6665 10.667V6.66699H10.6665C10.8433 6.66699 11.0129 6.59675 11.1379 6.47173C11.2629 6.34671 11.3332 6.17714 11.3332 6.00033C11.3332 5.82351 11.2629 5.65394 11.1379 5.52892C11.0129 5.4039 10.8433 5.33366 10.6665 5.33366Z" fill="white" />
        </svg>
      Добавить новый вопрос</button>
    </div>
  )
}

export default TestTypeOutlet