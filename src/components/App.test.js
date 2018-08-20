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
    const id = 1

    beforeEach(() => app.find('.btn-add').simulate('click'))

    afterEach(() => app.setState({ gifts: [] }))

    test('adds a new gift to `state` when clicking the `add gift` button', () => {
      const { gifts } = app.state()

      expect(gifts).toEqual([{ id }])
    })

    test('adds a new gift to the rendered list when clicking the `add gift` button', () => {
      const { length } = app.find('.gift-list').children()

      expect(length).toEqual(1)
    })

    test('creates a Gift component', () => {
      const exists = app.find('Gift').exists()

      expect(exists).toBe(true)
    })

    describe('and the user wants tp remove the added gift', () => {
      beforeEach(() => app.instance().removeGift(id))

      test('removes the gift from `state`', () => {
        const { gifts } = app.state()

        expect(gifts).toEqual([])
      })
    })
  })
})
