import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'
import { PlayBtn } from '../../images'

class Track extends Component {
  render() {
    return (
      <div className={'track'}>
        <div className={'track-ctrl'}>
          <a href='#' className={'play-btn'}>
            <InlineSVG raw src={PlayBtn} />
          </a>
        </div>
        <div className={'track-info'}>
          <span className={'track-title'}>
            <span className={'track-artist'}>Kylie Minoque & Nick Cave</span> - Where the wild roses grow
          </span>
          <span className='track-duration'>05:34</span>
        </div>
      </div>
    )
  }
}

export default Track
