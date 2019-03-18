import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'
import Track from '../../components/music/Track'

class MusicCard extends Component {
  render() {
    return (
      <Card>
        <div className='header'>
          <CardTitle>
            Music<small className={'subtitle'}>18 songs</small>
          </CardTitle>
        </div>

        <div className={'music-playlist'}>
          <Track />
          <Track />
        </div>
      </Card>
    )
  }
}

export default MusicCard
