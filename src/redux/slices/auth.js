import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.token = 'abcde'
    }
  },
})

const { actions, reducer } = authSlice

export const { login } = actions

export default reducer