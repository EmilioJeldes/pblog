import { CREATE_TASK, FETCH_TASKS, DELETE_TASK } from 'redux/actions/types';
import _ from 'lodash';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS:
      console.log(_.mapKeys(action.payload, 'id'));
      return action.payload;
    case CREATE_TASK:
      console.log({ ...state, [action.payload.id]: action.payload });
      // action.payload === null ? state : { ...state, [action.payload.id]: action.payload }
      return state;
    case DELETE_TASK:
      // action.payload === null ? state : _.omit(state, action.payload)

      return action.paylod === null ? state : state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};
