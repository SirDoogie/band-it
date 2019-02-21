import React, { Component } from 'react'
import { Card, CardHeader, CardTitle } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import EditIcon from '../../images/icons/edit.svg'

class ExperienceCard extends Component {
  render() {
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
              <li><b>Education:</b> School of Music</li>
              <li><b>Skills: </b> Guitar (3), Drums (5), Violin (2)</li>
              <li><b>Experience:</b> Band (5), Band2 (1)</li>
              <li><b>Genre:</b> metal</li>
            </ul>
          </div>
          <div className='profile-about'>
            <b>About:</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ut purus euismod porttitor in at
              lorem.</p>
          </div>
        </div>
      </Card>
    )
  }
}

export default ExperienceCard