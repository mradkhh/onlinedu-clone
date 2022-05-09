import {  combineReducers } from 'redux'
import courseLessonReducer from './courseLessonReducer'
import testReducer from './testReducer';

export default combineReducers({
  courseLessonReducer,
  testReducer
});