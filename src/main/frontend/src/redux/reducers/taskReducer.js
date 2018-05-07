import { FETCH_TASKS } from 'redux/actions/types';

export default (state = null, action) => {
	
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    default:
      return state;
  }
};
