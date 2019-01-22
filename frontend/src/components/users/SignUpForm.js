import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }


  handleChange(event) {
    const user = {...this.state, [event.target.id]: event.target.value};
    this.setState(user);
  }

  handleForm(event) {
    event.preventDefault()
    this.props.submitForm(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleForm}>
        <div className='form-group'>
          <label htmlFor='email'>E-mail</label>
          <input type='text' id='email' className='form-control' onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' className='form-control' onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='user_password_confirmation'>Password confirmation</label>
          <input type='password' id='password_confirmation' className='form-control' onChange={this.handleChange}/>
        </div>
        <div className='actions'>
          <input type='submit' className='btn btn-primary btn-block' value='Submit'/>
        </div>
      </form>
    )
  }
}

export default SignUpForm;