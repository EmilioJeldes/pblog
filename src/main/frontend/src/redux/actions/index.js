import axios from 'axios';
import { FETCH_TASKS, SELECTED_BOARD } from './types';

export const fetchTasks = () => async dispatch => {
  dispatch({ type: FETCH_TASKS, payload: (await axios.get('/api/tasks')).data.tasks });
};

export const setSelectedBoard = index => {
  return { type: SELECTED_BOARD, payload: index };
};
