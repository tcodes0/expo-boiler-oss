import { State } from '@expoBoiler/app/src/store/store'
import { Fruits } from '@expoBoiler/utils'
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

export type ListState = {
  fruits: Fruits[]
}

const initialState = {
  fruits: [Fruits.banana, Fruits.apple],
}

export const listSlice = createSlice<ListState, SliceCaseReducers<ListState>>({
  name: 'list',
  initialState,
  reducers: {
    addFruit: (state, act) => {
      state.fruits.push(act.payload)
    },
    removeFruit: (state, act) => {
      const index = state.fruits.findIndex(fruit => fruit === act.payload)
      if (index === -1) {
        return
      }
      state.fruits.splice(index, index + 1)
    },
  },
})

export const action = listSlice.actions

export const select = {
  fruits: (state: State) => state.list.fruits,
}

export const listReducer = listSlice.reducer
