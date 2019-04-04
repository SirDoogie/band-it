import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import Wrapper from '../../components/layout/Wrapper'
import ProfileCard from '../../components/users/ProfileCard'
import ExperienceCard from '../../components/users/ExperienceCard'
import FriendsCard from '../../components/users/FriendsCard'
import MusicCard from '../../components/users/MusicCard'
import VideoCard from '../../components/users/VideoCard'

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