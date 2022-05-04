import { CREATE_COURSE } from "./type";

const initialState = {
  coursesList: [
    {
      courseTitle: 'Birinchi kurs nomi',
      id: 1,
      courseLessons: [
        'Birinchi topshiriq',
        'Birinchi topshiriq',
        'Birinchi topshiriq'
      ]
    },
    {
      courseTitle: 'Ikkinchi kurs nomi',
      id: 2,
      courseLessons: [
        'Birinchi topshiriq',
        'Birinchi topshiriq',
        'Birinchi topshiriq'
      ]
    }

  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return {
        ...state,
        coursesList: action.course
      }
    default:
      return state
  }
}

export default reducer