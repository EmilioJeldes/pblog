import axios from 'axios';
import { FETCH_TASKS } from './types';

export const fetchTasks = () => async dispatch => {
	dispatch({ type: FETCH_TASKS, payload: (await axios.get('/api/tasks')).data.tasks });
};
