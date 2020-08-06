import { listReducer } from '@expoBoiler/app/src/store/slices/questions'
import { Fruits } from '@expoBoiler/utils'

describe('list reducer has some lists, one of them is a list of fruits', () => {
  it('initial state', () => {
    const initialState = listReducer(undefined, { type: 'init' })
    expect(Object.keys(initialState.fruits).length).toBe(2)
  })
  it('addFruit actions adds fruits in state', () => {
    const payload: Fruits = Fruits.avocado
    const result = listReducer(undefined, { type: 'list/addFruit', payload })
    expect(result.fruits.includes(Fruits.avocado)).toBe(true)
  })
  it('removeFruit actions removes fruits from state', () => {
    const payload: Fruits = Fruits.apple
    const result = listReducer(undefined, { type: 'list/removeFruit', payload })
    expect(result.fruits.includes(Fruits.apple)).toBe(false)
  })
})
