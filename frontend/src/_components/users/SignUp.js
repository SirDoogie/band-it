import React, { Component } from 'react'
import { Button, Modal, ModalBody, FormGroup, Input, Form } from 'reactstrap'
import { Logo } from '_assets/images'
import { connect } from 'react-redux'

import { userActions } from '_actions'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      user: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.alreadySigned = this.alreadySigned.bind(this)
  }

  toggleModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }))
  }

  handleChange(event) {
    const user = { ...this.state.user, [event.target.id]: event.target.value }
    this.setState({
      user: user
    })
  }

  handleForm(event) {
    event.preventDefault()
    this.props.dispatch(userActions.createUser(this.state.user))
  }

  alreadySigned() {
    this.toggleModal()
    const input = document.getElementById('sign-in-email')
    setTimeout(() => {
      input.focus()
    }, 350)
  }

  render() {
    return (
      <div>
        <Button color={ 'primary' } size='lg' onClick={ this.toggleModal }>Sign Up</Button>
        <Modal centered id='sign-up-modal' isOpen={ this.state.modalOpen } toggle={ this.toggleModal }>
          <div className={ 'modal-image' }>
            <img src={ Logo } alt='Band It'/>
          </div>
          <ModalBody>
            <h1 className='title'>Sign Up <small>Join application - it's free!</small></h1>
            <Form onSubmit={ this.handleForm }>
              <FormGroup>
                <Input type='email' id='email' placeholder={ 'E-mail' } onChange={ this.handleChange }/>
              </FormGroup>
              <FormGroup>
                <Input type='password' id='password' placeholder={ 'Password' } onChange={ this.handleChange }/>
              </FormGroup>
              <FormGroup>
                <Input type='password' id='password_confirmation' placeholder={ 'Password confirmation' } onChange={ this.handleChange }/>
              </FormGroup>
              <div className={ 'actions' }>
                <Button color={ 'primary' } size={ 'lg' }>Sign Up</Button>
                <Button color={ 'link' } onClick={ this.alreadySigned }>Already signed in?</Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.createUser
  }
}

export default connect(mapStateToProps)(SignUp)