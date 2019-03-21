import React, { Component } from 'react'
import { Card, CardHeader, CardTitle } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import EditIcon from '../../images/icons/edit.svg'

class ExperienceCard extends Component {
  render() {
    const user = this.props.user

    return (
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <a href='#' className={ 'btn-edit' }>
            <InlineSVG src={ EditIcon }/>
          </a>
        </CardHeader>
        <div className='profile-experience'>
          <div className='profile-skills'>
            <ul>
              <li><b>Education:</b> { user.profile.education }</li>
              <li><b>Skills: </b> Guitar (3), Drums (5), Violin (2)</li>
              <li><b>Experience:</b> Band (5), Band2 (1)</li>
              <li><b>Genre:</b> { user.profile.genre }</li>
            </ul>
          </div>
          <div className='profile-about'>
            <b>About:</b>
            <p>{ user.profile.about ? user.profile.about: 'Not set' }</p>
          </div>
        </div>
      </Card>
    )
  }
}

export default ExperienceCard