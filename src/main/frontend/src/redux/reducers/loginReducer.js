import { LOGIN } from 'redux/actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload === undefined ? state : !action.payload;

    default:
      return state;
  }
};
