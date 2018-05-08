import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import selectedBoardReducer from './selectedBoardReducer';

export default combineReducers({
  tasks: taskReducer,
  selectedBoard: selectedBoardReducer
});
