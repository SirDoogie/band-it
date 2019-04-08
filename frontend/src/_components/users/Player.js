import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'
import Play from '../../assets/images/icons/player-play.svg'
import Back from '../../assets/images/icons/back.svg'
import Next from '../../assets/images/icons/next.svg'
import Shuffle from '../../assets/images/icons/shuffle.svg'
import Repeat from '../../assets/images/icons/repeat.svg'
import List from '../../assets/images/icons/list.svg'

class Player extends Component {
  render() {
    return (
      <div className={'music-player'}>
        <div className={'player-play'}>
          <a href='#' className={'ctrl-btn back-btn'}>
            <InlineSVG src={Back} />
          </a>
          <a href='#' className={'play-btn'}>
            <InlineSVG src={Play} />
          </a>
          <a href='#' className={'ctrl-btn next-btn'}>
            <InlineSVG src={Next} />
          </a>
        </div>
        <div className={'container-info'}>
          <div className={'player-info'}>
            <div className={'track-description'}>
              <span className={'player-artist'}>Nick Cave</span>
              <span className={'player-title'}>Where the wild roses grow</span>
            </div>
            <div className={'duration'}>
              <span className={'player-duration'}>05:34</span>
            </div>
          </div>
          <input type='range' />
        </div>
        <div className={'volume'}>
          <input type='range' />
        </div>
        <div className='tools'>
          <div className={'shuffle'}>
            <a href='#' className={'shuffle-ico'}>
              <InlineSVG src={Shuffle} />
            </a>
          </div>
          <div className={'repeat'}>
            <a href='#' className={'repeat-ico'}>
              <InlineSVG src={Repeat} />
            </a>
          </div>
          <div className={'list'}>
            <a href='#' className={'list-ico'}>
              <InlineSVG src={List} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Player
