import { httpPost, httpGet } from './../utils/request';
import { actionErrors } from './app';

export const FETCH_RECOMMENDABLE = 'FETCH_RECOMMENDABLE';
export const POST_COURSE_SCORE = 'POST_COURSE_SCORE';
export const RECOMMENDATION_ERRORS = 'RECOMMENDATION_ERRORS';
export const RECOMMENDATION_INFOS = 'RECOMMENDATION_INFOS';


export const fetchRecommendable = () => {
  return (dispatch) => {
    return httpGet('/recommendable')
    .then((data) => {
      return dispatch({
        type: FETCH_RECOMMENDABLE,
        data,
      });
    })
    .catch((errors) => {
      dispatch(actionErrors(errors, RECOMMENDATION_ERRORS));
    });
  };
};

export const postCourseScore = (values) => {
  return (dispatch) => {
    return httpPost('/recommendable', values)
    .then((data) => {
      return dispatch({
        type: POST_COURSE_SCORE,
        data,
      });
    })
    .catch((errors) => {
      dispatch(actionErrors(errors, RECOMMENDATION_ERRORS));
    });
  };
};
