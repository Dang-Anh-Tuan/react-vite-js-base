import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { factories } from '@plugin/axios'
import Cookies from "js-cookie"

const initialState = {
  token: null,
  user: null
}

export const login = createAsyncThunk(
  'login',
  async ({ username, password, dispatch }) => {
    const response = await factories.auth.login({
      username,
      password
    })
    if (response.status === 200 || response.status === 201) {
      const token = response.data.access_token
      await dispatch(getUser(token))
    }
    return response;
  }
);

export const getUser = createAsyncThunk(
  'getUser',
  // TODO : fake when use json server, in real server BE unnecessary pass id, just need token in header
  async (id) => {
    const response = await factories.user.getUser(id)
    return response;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        // TODO: set loading
      })
      .addCase(login.fulfilled, (state, action) => {
        const resp = action.payload
        const token = resp.data.access_token
        state.token = token
        Cookies.set('access_token', token)
        return true
      })
      .addCase(getUser.pending, (state) => {
        // TODO: set loading
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const resp = action.payload
        state.user = resp.data
      });
  }
})

const { actions, reducer } = authSlice

export default reducer