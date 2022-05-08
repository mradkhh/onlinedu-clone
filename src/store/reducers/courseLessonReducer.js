import { ADD_TO_LESSON, REMOVE_FROM_LESSON } from '../constants/actionTypes'
import { omit } from 'lodash'
import { getLocalStorage } from '../../utils/localStorage'

const initialState = [
  {
    courseTitle: 'Birinchi kurs',
    courseId: 1,
    lessons: [
      {
        item: 'bir'
      },
      {
        item: 'ikki'
      },
      {
        item: 'uch'
      },
    ]
  },
  {
    courseTitle: 'Ikkinchi kurs',
    courseId: 2,
    lessons: [
      {
        item: 'bir'
      },
      {
        item: 'ikki'
      },
      {
        item: 'uch'
      },
    ]
  }
]

const courseLessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LESSON:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_FROM_LESSON:
      return omit(state, [action.payload])

    default:
      return state
  }
}

export default courseLessonReducer