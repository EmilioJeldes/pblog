import { FETCH_TASKS, DELETE_TASK } from 'redux/actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS:
      console.log(action.payload);
      return action.payload;
    case DELETE_TASK:
      return action.paylod === null ? state : state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};
