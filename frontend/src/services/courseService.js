import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses';

export const getCourses = () => {
  return axios.get(API_URL);
};

export const createCourse = (courseData) => {
  return axios.post(API_URL, courseData);
};
