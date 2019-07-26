import axios from 'axios';
import history from '../history';

export const signIn = userId => {
  return { type: 'SIGN_IN', payload: userId };
};

export const signOut = () => {
  return { type: 'SIGN_OUT' };
};

export const createStream = formUserInput => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await axios.post('http://localhost:3001/streams', { ...formUserInput, userId });
  dispatch({ type: 'CREATE_STREAM', payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await axios.get('http://localhost:3001/streams');
  dispatch({ type: 'FETCH_STREAMS', payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await axios.get(`http://localhost:3001/streams/${id}`);
  dispatch({ type: 'FETCH_STREAM', payload: response.data });
};

// PUT replaces all properties, PATCH just a selected few
export const editStream = (id, formUserInput) => async dispatch => {
  const response = await axios.patch(`http://localhost:3001/streams/${id}`, formUserInput);
  dispatch({ type: 'EDIT_STREAM', payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await axios.delete(`http://localhost:3001/streams/${id}`);
  dispatch({ type: 'DELETE_STREAM', payload: id });
};
