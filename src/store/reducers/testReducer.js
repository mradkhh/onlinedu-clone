import { ADD_TO_TEST, REMOVE_FROM_TEST } from "store/constants/actionTypes";
import { v4 as uuidv4 } from 'uuid';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage'

const storeTest = {
  title: 'onlinedu-test',
  data: [
    {
      question_title: 'Первый вопрос',
      question_score: '3.0',
      id: uuidv4(),
      isOneAnswer: false,
      explanation: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного ',
      cases: [
        {
          id: uuidv4(),
          case_title: 'Первый ответ',
          case_id: 'A',
          case_score: '0.0',
        },
        {
          id: uuidv4(),
          case_title: 'Правильный ответ',
          case_id: 'B',
          case_score: '1.5',
        },
        {
          id: uuidv4(),
          case_title: 'Третьий ответ',
          case_id: 'C',
          case_score: '1.5',
        },
        {
          id: uuidv4(),
          case_title: 'Четвертый ответ',
          case_id: 'D',
          case_score: '0.0',
        }
      ]
    },
    {
      question_title: 'Ikkinchi savol',
      question_score: '1.5',
      id: uuidv4(),
      isOneAnswer: false,
      explanation: 'Cгенерировать несколько абзацев более менее осмысленного ',
      cases: [
        {
          id: uuidv4(),
          case_title: 'Первый ответ',
          case_id: 'A',
          case_score: '0.0',
        },
        {
          id: uuidv4(),
          case_title: 'Правильный ответ',
          case_id: 'B',
          case_score: '1.5',
        }
      ]
    }

  ]
}

  const getStore = () => {
    if (getLocalStorage('store-test').title) {
      console.log('ok')
      return getLocalStorage('store-test')
    } else {
      console.log('wrong')
      setLocalStorage('store-test', storeTest)
      return getLocalStorage('store-test')
    }
  }

const initialState = getStore()
console.log(initialState)
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TEST:
      return ({
        ...state,
        ...action.payload
      })
    case REMOVE_FROM_TEST:
      return ({
        ...state,
        ...action.payload
      })
    default:
      return state
  }
}

export default testReducer