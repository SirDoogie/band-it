import React, { Component } from 'react';
import { Card, CardTitle, Form, FormGroup, Input, Button } from 'reactstrap';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.handleForm = this.handleForm.bind(this)
  }

  handleForm(event) {
    event.preventDefault();
  }

  render() {
    return(
      <Card body className={'sign-in-form'}>
        <CardTitle>Sign In</CardTitle>
        <Form onSubmit={this.handleForm}>
          <FormGroup>
            <Input type="email" name="email" id="user_email" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="user_password" placeholder="Password" />
          </FormGroup>
          <Button color={'primary'} size={'lg'} block>Login</Button>
        </Form>
      </Card>
    )
  }
}

export default SignInForm;