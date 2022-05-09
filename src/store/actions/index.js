import { ADD_TO_LESSON, REMOVE_FROM_LESSON, ADD_TO_TEST, REMOVE_FROM_TEST } from '../constants/actionTypes'

export const addToLesson = (lesson) => ({
  type: ADD_TO_LESSON,
  payload: lesson
})

export const removeFromLesson = (lesson) => ({
  type: REMOVE_FROM_LESSON,
  payload: lesson
})

export const addToTest = (test) => ({
  type: ADD_TO_TEST,
  payload: test
})

export const removeFromTest = (test) => ({
  type: REMOVE_FROM_TEST,
  payload: test
})