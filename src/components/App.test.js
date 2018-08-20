import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App component', () => {
  const app = shallow(<App />)

  test('renders correctly', () => expect(app).toMatchSnapshot())

  test('initializes the `state` with an empty list of gifts', () => {
    const { gifts } = app.state()

    expect(gifts).toEqual([])
  })

  describe('when clicking the `add-gift` button', () => {
    beforeEach(() => app.find('.btn-add').simulate('click'))

    afterEach(() => app.setState({ gifts: [] }))

    test('adds a new gift to `state` when clicking the `add gift` button', () => {
      const { gifts } = app.state()

      expect(gifts).toEqual([{ id: 1 }])
    })

    test('adds a new gift to the rendered list when clicking the `add gift` button', () => {
      const { length } = app.find('.gift-list').children()

      expect(length).toEqual(1)
    })
  })
})
