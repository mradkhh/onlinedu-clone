import { ADD_TO_LESSON, REMOVE_FROM_LESSON } from '../constants/actionTypes'

export const addToLesson = (lesson) => ({
  type: ADD_TO_LESSON,
  payload: lesson
})

export const removeFromLesson = (lessonId) => ({
  type: REMOVE_FROM_LESSON,
  payload: lessonId
})