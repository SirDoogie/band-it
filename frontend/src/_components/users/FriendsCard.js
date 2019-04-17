import React, { Component } from 'react'
import { Card, CardHeader, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'
import EditIcon from '_assets/images/icons/edit.svg'
import Users from '_components/band/Users'

class FriendsCard extends Component {
  render() {
    const friends = this.props.friends
    return (
      <Card>
        <CardHeader>
          <CardTitle>Friends</CardTitle>
          <Link to='/friends' className={'btn-edit'}>
            <InlineSVG src={EditIcon} />
          </Link>
        </CardHeader>
        <div className='profile-band'>
          { friends &&
            friends.map((friend) =>
              <Users key={friend.id} user={friend}/>
            )
          }
        </div>
      </Card>
    )
  }
}

export default FriendsCard
