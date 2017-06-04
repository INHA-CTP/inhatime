import * as Action from 'Actions/course';
import Immutable from 'immutable';

const initialState = {
  recommendable: [],
  recommended: [],
};


export default (state = initialState, actions) => {
  switch (actions.type) {
    case Action.FETCH_RECOMMENDABLE:
      return {
        ...state,
        recommendable: actions.data.courses,
      };
    default:
      return state;
  }
};
