import React, { Component } from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'
import { Logo } from '_assets/images'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row className={ 'justify-content-between' }>
            <Col xs={ 4 }>
              <div className='copyright'>
                <img src={ Logo } alt='Logo' className={ 'img-fluid' }/>
                <span>Band It. All rights reserved.</span>
              </div>
            </Col>
            <Col xs={ 3 }>
              <div className='footer-menu'>
                <Nav>
                  <NavItem>
                    <NavLink href={ '#!' }>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={ '#!' }>About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={ '#!' }>Blog</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer