import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: 'checking', // 'checking', 'not-authenticated", 'auth'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {
      state.status= 'authenticated'; // 'checking', 'not-authenticated", 'auth'
      state.uid= action.payload.uid;
      state.email= action.payload.email;
      state.displayName= action.payload.displayName;
      state.photoURL= action.payload.photoURL;
      state.errorMessage= null;

    },
    logout: (state, action) => {
      state.status= 'not-authenticated'; // 'checking', 'not-authenticated", 'auth'
      state.uid= null;
      state.email= null;
      state.displayName= null;
      state.photoURL= null;
      state.errorMessage= action.payload?.errorMessage;
    },
    chekingCredentials: (state) => {
        state.status= "checking";
    },

  },
});
export const { login, logout, chekingCredentials } = authSlice.actions;
