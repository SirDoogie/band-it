import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'
import PlayBtn from '../../images/icons/play.svg'

class Track extends Component {
  render() {
    return (
      <div className={'track'}>
        <div className={'track-ctrl'}>
          <a href='#!' className={'play-btn'}>
            <InlineSVG src={PlayBtn} />
          </a>
        </div>
        <div className={'track-info'}>
          <span className={'track-artist'}>Kylie Minoque & Nick Cave</span>
          <span className={'track-title'}>Where the wild roses grow</span>
        </div>
        <div className={'track-duration'}>05:34</div>
      </div>
    )
  }
}

export default Track
