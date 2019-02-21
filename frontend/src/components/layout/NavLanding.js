import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap'
import { connect } from 'react-redux'
import { authActions } from '../../actions'

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
    const user = { ...this.state, [event.target.id]: event.target.value }
    this.setState(user)
  }

  submitLogin(event) {
    event.preventDefault()
    this.props.dispatch(authActions.login(this.state.user))
  }

  render() {
    return (
      <Form inline className={ 'ml-auto nav-login' } onSubmit={ this.submitLogin }>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Input type='email' name='email' id={ 'sign-in-email' } placeholder='email' onChange={ this.handleChange }/>
        </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Input type='password' name='password' placeholder='password' onChange={ this.handleChange }/>
          <FormText tag='a' href='#!' color='muted' className={ 'password-reset-link' }>
            forgot password?
          </FormText>
        </FormGroup>
        <Button color={ 'outline-light' }>Sign In</Button>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state,
  }
}

export default connect(mapStateToProps)(NavLanding)