import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

test('renders correctly', () => {
  expect(app).toMatchSnapshot()
})

test('initializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([])
})

test('adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click')

  expect(app.state().gifts).toEqual([{ id: 1 }])
})
