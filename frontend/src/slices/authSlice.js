/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const getDataFromLocalStorage = () => {
  const stateString = localStorage.getItem('user');
  if (stateString) {
    return JSON.parse(stateString);
  }
  return {};
};
const slice = createSlice({
  name: 'auth',
  initialState: getDataFromLocalStorage(),
  reducers: {
    auth: (state, { payload: { username, token } }) => {
      state.username = username;
      state.token = token;
      localStorage.setItem('user', JSON.stringify({ username, token }));
    },
    logout: () => {
      localStorage.clear();
      return {};
    },

  },
});

export const { auth, logout } = slice.actions;

export default slice.reducer;
export const userAuth = (state) => state.auth;
