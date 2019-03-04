import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Wrapper from '../../components/layout/Wrapper';
import SignInForm from '../../components/auth/SignInForm';

class SignInPage extends Component {
  render() {
    return (
      <Wrapper class={'sign-in'}>
        <Container>
          <Row className={'justify-content-center'}>
            <Col xs={4}>
              <SignInForm />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default SignInPage;