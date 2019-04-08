import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import Wrapper from '_components/layout/Wrapper'
import ProfileCard from '_components/users/ProfileCard'
import ExperienceCard from '_components/users/ExperienceCard'
import FriendsCard from '_components/users/FriendsCard'
import MusicCard from '_components/users/MusicCard'
import VideoCard from '_components/users/VideoCard'

class Profile extends Component {
  render() {
    const currentUser = this.props.currentUser

    return (
      <Wrapper class={ 'main wrapper-profile' }>
        { currentUser.loading &&
        <Loader type='Audio' color='#fff' height={150} width={150} />
        }
        { currentUser.id &&
        <Container>
          <Row>
            <Col id={ 'profile' } xs={ '3' }>
              <ProfileCard user={ currentUser }/>
              <ExperienceCard user={ currentUser }/>
              <FriendsCard friends={ currentUser.friends }/>
            </Col>
            <Col id={ 'feed' } xs={ '7' }>
              <MusicCard/>
              <VideoCard/>
            </Col>
            <Col xs={ '2' }>

            </Col>
          </Row>
        </Container>
        }
        { currentUser.error &&
        <div>

        </div>
        }
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Profile)