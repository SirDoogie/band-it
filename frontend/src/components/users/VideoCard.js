import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'
import Video from '../../components/video/Video'

class VideoCard extends Component {
  render() {
    return (
      <Card>
        <div className='header'>
          <CardTitle>
            Video<small className={'subtitle'}>5 Video</small>
          </CardTitle>
        </div>

        <div className={'video-playlist'}>
          <Video />
          <Video />
          <Video />
        </div>
      </Card>
    )
  }
}

export default VideoCard
