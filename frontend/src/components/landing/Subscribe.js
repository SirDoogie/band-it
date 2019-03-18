import React, { Component } from 'react'
import { Container, Row, Col, NavItem, NavLink, Nav, Button, Form, FormGroup, Input } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter);

class Subscribe extends Component {
  render(){
    return(
      <section id={'subscribe-us'}>
        <Container>
          <Row>
            <Col xs={'5'} className={'section-title'}>
              <h1 className={'title'}>Subscribe to <span>us</span></h1>
              <Nav className={'social-nav'}>
                <NavItem>
                  <NavLink href='#!'>
                    <FontAwesomeIcon icon={faFacebookF}/>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#!'>
                    <FontAwesomeIcon icon={faInstagram}/>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#!'>
                    <FontAwesomeIcon icon={faTwitter}/>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form id={'subscribe-form'} inline>
                <FormGroup className='mb-2 mr-sm-5 mb-sm-0'>
                  <Input type='text' name='name' id='subscribeName' placeholder='Name' />
                </FormGroup>
                <FormGroup className='mb-2 mr-sm-5 mb-sm-0'>
                  <Input type='email' name='email' id='subscribeEmail' placeholder='E-mail' />
                </FormGroup>
                <FormGroup className='mb-2 mr-sm-5 mb-sm-0'>
                  <Input type='text' name='phone' id='subscribePhone' placeholder='Phone'/>
                </FormGroup>
                <Button color={'light'} outline size={'lg'}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Subscribe;