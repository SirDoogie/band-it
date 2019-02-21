import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Wrapper from '../../components/layout/Wrapper'
import ProfileCard from '../../components/users/ProfileCard'
import ExperienceCard from '../../components/users/ExperienceCard'

class Profile extends Component {
  render() {
    return(
      <Wrapper class={'main'}>
        <Container>
          <Row>
            <Col id={'profile'} xs={'3'}>
              <ProfileCard/>
              <ExperienceCard/>
            </Col>
            <Col id={'feed'} xs={'7'}>

            </Col>
            <Col id={'advertisement'} xs={'2'}>

            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default Profile;