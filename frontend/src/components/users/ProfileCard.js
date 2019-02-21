import React, { Component} from 'react'
import { Card, CardHeader, CardTitle } from 'reactstrap'
import InlineSVG from 'svg-inline-react';
import DemoAvatar from '../../images/demo/avatar.png'
import EditIcon from '../../images/icons/edit.svg'
class ProfileCard extends Component {
  render() {
    return(
      <Card>
        <CardHeader>
          <CardTitle>Info</CardTitle>
          <a href="#!" className={'btn-edit'}>
            <InlineSVG src={EditIcon}/>
          </a>
        </CardHeader>
        <div className='profile-card'>
          <div className='profile-photo'>
            <div className='profile-image'>
              <img src={DemoAvatar} alt='User Name' className={'img-fluid'}/>
              <span className='presence-pill offline'></span>
            </div>
          </div>
          <div className='profile-name'>
            <p className={'full-name'}>Tony Stark</p>
            <p className='band-name'>Fly DeLorean Band</p>
          </div>
          <div className='profile-info'>
            <ul>
              <li><b>Location:</b> New York</li>
              <li><b>Status:</b> In band</li>
              <li><b>Birth: </b> 12.05.1992</li>
              <li><b>Gender:</b> Male</li>
            </ul>
          </div>
        </div>
      </Card>
    )
  }
}

export default ProfileCard;