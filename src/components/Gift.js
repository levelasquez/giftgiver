import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Gift extends Component {
  state = {
    person: '',
    present: '',
  }

  onChangePerson = ({ target: { value } }) => this.setState({ person: value })

  onChangePresent = ({ target: { value } }) => this.setState({ present: value })

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>
              Person
            </ControlLabel>
            <FormControl
              className='input-person'
              onChange={this.onChangePerson}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Present
            </ControlLabel>
            <FormControl
              className='input-present'
              onChange={this.onChangePresent}
            />
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Gift
