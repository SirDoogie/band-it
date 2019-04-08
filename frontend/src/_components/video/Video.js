import React, { Component } from 'react'
import YouTube from 'react-youtube'

class Video extends Component {
  render() {
    const opts = {
      height: '114',
      width: '202',
      playerVars: {
        autoplay: 0,
        autohide: 1
      }
    }
    return (
      <div className={'video'}>
        <YouTube videoId='-6Xl9tBWt54' opts={opts} onReady={this._onReady} />
        <span className={'video-title'}>
          SAOR - Bròn (Official Music Video)
        </span>
      </div>
    )
  }
}

export default Video
