import { httpPost, httpGet } from './../utils/request';
import { actionErrors } from './app';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const COURSE_ERRORS = 'COURSE_ERRORS';
export const FETCH_COURSES = 'FETCH_COURSES';
export const SELECT_COURSE = 'SELECT_COURSE';
export const CLEAR_SCHEDULE = 'CLEAR_SCHEDULE';
// export const REMOVE_COURSE = 'REMOVE_COURSE';
export const FETCH_TERMS = 'FETCH_TERMS';
export const FETCH_SCHEDULES = 'FETCH_SCHEDULES';
export const CHANGE_SCHEDULE = 'CHANGE_SCHEDULE';
export const SAVE_SCHEDULE = 'SAVE_SCHEDULE';
export const FETCH_RECOMMENDABLE = 'FETCH_RECOMMENDABLE';
export const POST_COURSE_SCORE = 'POST_COURSE_SCORE';

const parseErrors = (errors) => {
  if (errors.response) {
    return errors.response.data.errors;
  }
  return ['App.layout.event.UnexpectedErrors'];
};

export const selectCourse = (course) => {
  return (dispatch) => {
    if (course) {
      return dispatch({
        type: SELECT_COURSE,
        data: course,
      });
    }
    return dispatch({
      type: COURSE_ERRORS,
      errors: ['App.layout.event.selectCours.notEmpty'],
    });
  };
};

export const changeSchedule = (scheduleId) => {
  return (dispatch) => {
    return dispatch({
      type: CHANGE_SCHEDULE,
      data: scheduleId,
    });
  };
};

export const fetchTerms = () => {
  return (dispatch) => {
    return httpGet('/terms')
    .then((data) => {
      return dispatch({
        type: FETCH_TERMS,
        data,
      });
    })
    .catch((errors) => {
      return parseErrors(errors);
    });
  };
};

export const saveSchedule = (data) => {
  return (dispatch) => {
    return dispatch({
      type: SAVE_SCHEDULE,
      data,
    });
  };
};

// export const removeCourse = (courseId) => {
//   return (dispatch) => {
//     return dispatch({
//       type: REMOVE_COURSE,
//       data: courseId,
//     });
//   };
// };

export const fetchSchedules = (termId) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_SCHEDULES,
      data: termId,
    });
    return Promise.resolve();
  };
};

export const searchCourses = (values) => {
  return (dispatch) => {
    httpPost('/course/search', values)
    .then((data) => {
      return dispatch({
        type: FETCH_COURSES,
        data,
      });
    })
    .catch((errors) => {
      return dispatch({
        type: COURSE_ERRORS,
        errors: parseErrors(errors),
      });
    });
  };
};
