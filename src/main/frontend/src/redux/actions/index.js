import axios from 'axios';
import { FETCH_TASKS, SELECTED_BOARD, CREATE_TASK, DELETE_TASK } from './types';

const TASK_URL = '/api/tasks';

export const fetchTasks = () => async dispatch => {
  dispatch({ type: FETCH_TASKS, payload: (await axios.get(TASK_URL)).data.tasks });
};

export const setSelectedBoard = index => {
  return { type: SELECTED_BOARD, payload: index };
};

// Retuns the entired request so to access it must be action.payload.data
export const createTask = values => async dispatch => {
  const res = await axios.post(TASK_URL, values);
  return res.status === 201
    ? dispatch({ type: CREATE_TASK, payload: res.data })
    : dispatch({ type: CREATE_TASK, payload: null });
};

export const deleteTask = id => async dispatch => {
  return (await axios.delete(`${TASK_URL}/${id}`)).status === 200
    ? dispatch({ type: DELETE_TASK, payload: id })
    : dispatch({ type: DELETE_TASK, payload: null });
};
