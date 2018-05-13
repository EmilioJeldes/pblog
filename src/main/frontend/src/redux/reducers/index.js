import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import selectedBoardReducer from './selectedBoardReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  tasks: taskReducer,
  selectedBoard: selectedBoardReducer,
  form: formReducer
});
