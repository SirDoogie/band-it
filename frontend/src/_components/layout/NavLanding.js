import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { connect } from 'react-redux'
import Recover from '_components/users/Recover'

class NavLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.submitLogin = this.submitLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const user = { ...this.state, [event.target.name]: event.target.value }
    this.setState(user)
  }

  submitLogin(event) {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    return (
      <Form inline className={'ml-auto nav-login'} onSubmit={this.submitLogin}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="email"
            name="email"
            id={'sign-in-email'}
            placeholder="email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <Recover />
        </FormGroup>
        <Button color={'outline-light'}>Sign In</Button>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(NavLanding)
