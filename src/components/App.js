import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'

class App extends Component {
  state = { gifts: [] }

  addGift = () => {
    const { gifts } = this.state

    const ids = gifts.map(gift => gift.id)

    const max_id = ids.length > 0
      ? Math.max(...ids) + 1
      : 0

    const addedGift = gifts.concat({ id: max_id + 1 })

    this.setState({ gifts: addedGift })
  }

  removeGift = id => {
    const { gifts } = this.state

    const filteredGifts = gifts.filter(gift => gift.id !== id)

    this.setState({ gifts: filteredGifts })
  }

  render() {
    const { gifts } = this.state

    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {gifts.map(gift => (
            <Gift
              key={gift.id}
              gift={gift}
              removeGift={this.removeGift}
            />
          ))}
        </div>
        <Button
          className='btn-add'
          onClick={this.addGift}
        >
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App
