import React, { Component } from 'react'
import { Card, CardHeader, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'
import { EditIcon } from '../../images'
import _ from 'lodash'

class ProfileCard extends Component {
  render() {
    const user = this.props.user

    return (
      <Card>
        <CardHeader>
          <CardTitle>Info</CardTitle>
          <Link to='/profile/update' className={ 'btn-edit' }>
            <InlineSVG src={ EditIcon }/>
          </Link>
        </CardHeader>
        <div className='profile-card'>
          <div className='profile-photo'>
            <div className='profile-image'>
              <img src={ user.profile.avatar_url } alt={ user.profile.full_name } className={ 'img-fluid' }/>
              <span className='presence-pill online'></span>
            </div>
          </div>
          <div className='profile-name'>
            <p className={ 'full-name' }>{ user.profile.full_name }</p>
            <p className='band-name'>Fly DeLorean Band</p>
          </div>
          { !this.props.compact &&
          <div className='profile-info'>
            <ul>
              <li><b>Location:</b> { user.profile.country }, { user.profile.city }</li>
              <li><b>Status:</b> { _.capitalize(user.profile.status) }</li>
              <li><b>Birth: </b> { user.profile.birth_date }</li>
              <li><b>Gender:</b> { _.capitalize(user.profile.gender) }</li>
            </ul>
          </div>
          }
        </div>
      </Card>
    )
  }
}

export default ProfileCard