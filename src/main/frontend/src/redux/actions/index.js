import axios from 'axios';
import {CREATE_TASK, DELETE_TASK, FETCH_TASKS, SELECTED_BOARD, UPDATE_TASK} from './types';

const TASK_URL = 'http://localhost:8080/api/tasks';

/**
 |--------------------------------------------------
 | Board
 |--------------------------------------------------
 */
export const setSelectedBoard = index => {
    return {type: SELECTED_BOARD, payload: index};
};

/**
 |--------------------------------------------------
 | Tasks
 |--------------------------------------------------
 */
export const fetchTasks = () => async dispatch => {
    dispatch({type: FETCH_TASKS, payload: (await axios.get(TASK_URL)).data.tasks});
};

export const createTask = values => async dispatch => {
    const res = await axios.post(TASK_URL, values);
    return res.status === 201
        ? dispatch({type: CREATE_TASK, payload: res.data})
        : dispatch({type: CREATE_TASK, payload: null});
};

export const deleteTask = id => async dispatch => {
    return (await axios.delete(`${TASK_URL}/${id}`)).status === 200
        ? dispatch({type: DELETE_TASK, payload: id})
        : dispatch({type: DELETE_TASK, payload: null});
};

export const updateTask = (id, values) => async dispatch => {
    const res = await axios.put(`${TASK_URL}/${id}`, values);
    return res.status === 200
        ? dispatch({type: UPDATE_TASK, payload: res.data})
        : dispatch({type: UPDATE_TASK, payload: null});
};
