import { CREATE_TASK, FETCH_TASKS, DELETE_TASK, UPDATE_TASK } from 'redux/actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return _.mapKeys(action.payload, 'id');

    case CREATE_TASK:
      return action.payload === null ? state : { ...state, [action.payload.id]: action.payload };

    case DELETE_TASK:
      return action.payload === null ? state : _.omit(state, action.payload);

    case UPDATE_TASK:
      return action.payload === null
        ? state
        : { ..._.omit(state, action.payload.id), [action.payload.id]: action.payload };

    default:
      return state;
  }
};
