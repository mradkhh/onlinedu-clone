import { CREATE_COURSE } from "./type";

export const createCourse = (course) => {
  return {
    type: CREATE_COURSE,
    courses: course
  }
}