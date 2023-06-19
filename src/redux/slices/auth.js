import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    }
  },
})

const { actions, reducer } = authSlice

export const { setUser } = actions

export default reducer