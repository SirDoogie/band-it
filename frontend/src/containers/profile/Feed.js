import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Wrapper from '../../components/layout/Wrapper'
import ProfileCard from '../../components/users/ProfileCard'
import ExperienceCard from '../../components/users/ExperienceCard'
import BandCard from '../../components/users/BandCard'
import MusicCard from '../../components/users/MusicCard'
import VideoCard from '../../components/users/VideoCard'
import Advertising from '../../components/advertising/AdvertisingForm'
import Player from '../../components/users/Player'
import FeedCard from '../../components/users/FeedCard'

class Feed extends Component {
  render() {
    return (
      <Wrapper class={'main'}>
        <Container>
          <Row>
            <Col id={'profile'} xs={'3'}>
              <ProfileCard />
              <ExperienceCard />
              <BandCard />
            </Col>
            <Col id={'feed'} xs={'7'}>
              <Player />
              <MusicCard />
              <VideoCard />
              <FeedCard />
            </Col>
            <Col id={'advertisement'} xs={'2'}>
              <Advertising />
              <Advertising />
              <Advertising />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default Feed
