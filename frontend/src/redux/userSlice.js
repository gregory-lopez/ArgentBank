import { createSlice } from '@reduxjs/toolkit';

const savedToken = localStorage.getItem("token");

const initialState = {
  isLoggedIn: !!savedToken,
  user: null,
  token: savedToken || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    updateUserInfo: (state, action) => {
      state.user = action.payload; 
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginUser, updateUserInfo, logOut } = userSlice.actions;
export default userSlice.reducer;
