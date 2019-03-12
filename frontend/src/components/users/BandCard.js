import React, { Component } from 'react'
import { Card, CardHeader, CardTitle } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import EditIcon from '../../images/icons/edit.svg'
import Users from '../../components/band/Users'

class BandCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Band</CardTitle>
          <a href='#!' className={'btn-edit'}>
            <InlineSVG src={EditIcon} />
          </a>
        </CardHeader>
        <div className='profile-band'>
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
        </div>
      </Card>
    )
  }
}

export default BandCard
