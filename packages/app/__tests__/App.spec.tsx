import App from '@expoBoiler/app/App'
import React from 'react'
import { render } from 'react-native-testing-library'

describe('App', () => {
  it("doesn't crash", () => {
    render(<App />)
  })
})
