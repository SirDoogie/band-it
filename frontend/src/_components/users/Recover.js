import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalBody,
  FormGroup,
  Input,
  Form,
  FormText
} from 'reactstrap'
import { connect } from 'react-redux'
import { userActions } from '_actions'

class Recover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      email: ''
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  handleChange(event) {
    const email = event.target.value
    this.setState({
      email: email
    })
  }

  toggleModal() {
    this.props.dispatch(userActions.recoverPassword(undefined, false))

    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }))
  }

  handleForm(event) {
    event.preventDefault()
    this.props.dispatch(userActions.recoverPassword(this.state.email, true))
  }
  render() {
    return (
      <div>
        <Button
          color="muted"
          className={'password-reset-link'}
          onClick={this.toggleModal}
        >
          forgot password?
        </Button>
        <Modal
          centered
          id="sign-up-modal"
          isOpen={this.state.modalOpen}
          toggle={this.toggleModal}
        >
          <ModalBody>
            <h1 className="restpwd-title">reset password</h1>
            <p className="restpwd-body">
              Please enter your email address to request
            </p>
            <p className="restpwd-body">a password reset</p>

            <Form>
              <FormGroup className={'recover'}>
                {this.props.recover &&
                  this.props.recover.status === 'created' && (
                    <p className={'recovery-msg-succeed'}>
                      Recovery instructions have been sent to your email
                      address!
                    </p>
                  )}

                {this.props.recover &&
                  this.props.recover.status === 'not found' && (
                    <p className={'recovery-msg-failed'}>
                      Email address not found
                    </p>
                  )}
                <Input
                  type="email"
                  id="email"
                  placeholder={'E-mail'}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <div className={'recover-actions'}>
                <Button color={'primary'} size={'lg'} onClick={this.handleForm}>
                  reset password
                </Button>
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
    recover: state.recoverPassword
  }
}

export default connect(mapStateToProps)(Recover)
