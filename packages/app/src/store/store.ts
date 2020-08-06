import { listReducer, ListState } from '@expoBoiler/app/src/store/slices/questions'
import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

export type State = {
  list: ListState
}

export const store = configureStore({
  middleware: [createLogger()],
  reducer: {
    list: listReducer,
  },
})
