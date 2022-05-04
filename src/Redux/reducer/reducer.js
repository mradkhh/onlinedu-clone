import { CREATE_COURSE } from "./type";

const initialState = {
  coursesList: [
    {
      courseTitle: 'Birinchi kurs nomi',
      courseLessons: [
        'Birinchi topshiriq',
        'Ikkinchi topshiriq',
        'Uchinchi topshiriq'
      ]
    },
    {
      courseTitle: 'Ikkinchi kurs nomi',
      courseLessons: [
        'Birinchi topshiriq',
        'Ikkinchi topshiriq',
        'Uchinchi topshiriq'
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