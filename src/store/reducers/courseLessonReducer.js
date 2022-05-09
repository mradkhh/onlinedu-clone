import { ADD_TO_LESSON, REMOVE_FROM_LESSON } from '../constants/actionTypes'
// import { v4 as uuidv4 } from 'uuid';
import { getLocalStorage } from 'utils/localStorage'

const initialState = getLocalStorage('store')

// const initialState = {
//   title: 'onlinedu-course',
//   data: [
//     {
//       courseTitle: 'Birinchi kurs',
//       courseId: uuidv4(),
//       lessons: [
//         {
//           item: 'bir',
//           id: uuidv4()
//         },
//         {
//           item: 'ikki',
//           id: uuidv4()
//         },
//         {
//           item: 'uch',
//           id: uuidv4()
//         },
//       ]
//     },
//     {
//       courseTitle: 'Ikkinchi kurs',
//       courseId: uuidv4(),
//       lessons: [
//         {
//           item: 'bir',
//           id: uuidv4()
//         },
//         {
//           item: 'ikki',
//           id: uuidv4()
//         },
//         {
//           item: 'uch',
//           id: uuidv4()
//         },
//       ]
//     }
//   ]
// }
const courseLessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LESSON:
      return (
        {...state,
        ...action.payload
        }
      )
    case REMOVE_FROM_LESSON:
      return (
        {...state,
        ...action.payload
        }
      )


    default:
      return state
  }
}

export default courseLessonReducer