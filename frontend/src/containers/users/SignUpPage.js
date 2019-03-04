import React, { Component } from 'react'
import { usersActions } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import SignUpForm from '../../components/users/SignUpForm'


class SignUpPage extends Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onInputChange(input) {
    this.setState(input)
  }

  submitForm(input) {
    const user = { user: input }
    this.props.dispatch(usersActions.createUser(user))
  }

  render() {
    console.log(this.props.match);
    return(
      <div className={'container'}>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <h1 className='text-center'>Sign Up</h1>
            <div className='card'>
              <div className='card-body'>
                <SignUpForm onInputChange={this.onInputChange} submitForm={this.submitForm}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    newUser: state.newUser
  }
}


export default withRouter(connect(mapStateToProps)(SignUpPage));