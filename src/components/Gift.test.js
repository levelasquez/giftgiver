import React from 'react'
import { shallow } from 'enzyme'
import Gift from './Gift'

describe('Gift component', () => {
  const mockRemove = jest.fn()
  const id = 1
  const props = {
    gift: { id },
    removeGift: mockRemove,
  }
  const gift = shallow(<Gift {...props} />)

  test('renders properly', () => expect(gift).toMatchSnapshot())

  test('initializes a person and present in `state`', () => {
    const state = gift.state()

    expect(state).toEqual({
      person: '',
      present: '',
    })
  })

  describe('when typing into the persin input', () => {
    const value = 'Uncle'

    beforeEach(() => gift.find('.input-person').simulate('change', {
      target: { value },
    }))

    test('updates the person in `state`', () => {
      const { person } = gift.state()

      expect(person).toEqual(value)
    })
  })

  describe('when typing into the present input', () => {
    const value = 'Golf Clubs'

    beforeEach(() => gift.find('.input-present').simulate('change', {
      target: { value },
    }))

    test('updates the present in `state`', () => {
      const { present } = gift.state()

      expect(present).toEqual(value)
    })
  })

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => gift.find('.btn-remove').simulate('click'))

    test('calls the removeGift callback', () => {

      expect(mockRemove).toHaveBeenCalledWith(id)
    })
  })
})
