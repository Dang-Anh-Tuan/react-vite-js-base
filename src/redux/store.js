import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@redux/slices/auth'

const reducer = {
  auth: authReducer
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
