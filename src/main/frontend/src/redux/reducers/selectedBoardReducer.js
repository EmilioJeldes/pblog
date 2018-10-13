import { SELECTED_BOARD } from '../../redux/actions/types';

export default (state = 1, action) => {
  switch (action.type) {
    case SELECTED_BOARD:
      return action.payload === undefined ? state : action.payload;

    default:
      return state;
  }
};
