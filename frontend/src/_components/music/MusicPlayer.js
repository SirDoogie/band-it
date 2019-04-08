import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'
import { Container } from 'reactstrap'
import { PlayBtn, NextBtn, PrevBtn, ShuffleBtn, RepeatBtn, ListBtn } from '_assets/images'

class MusicPlayer extends Component {
  constructor(props) {
    super(props)

    this.volumeChange = this.volumeChange.bind(this)
  }

  volumeChange(event) {
    console.log(event.target.value)
  }

  render() {
    return(
      <div id={'music-player'}>
        <Container>
          <div className={'player-control'}>
            <a href='#' className={'prev'}>
              <InlineSVG raw src={PrevBtn} />
            </a>
            <a href='#' className={'play'}>
              <InlineSVG raw src={PlayBtn} />
            </a>
            <a href='#' className={'next'}>
              <InlineSVG raw src={NextBtn} />
            </a>
          </div>
          <div className='current-track'>
            <div className='current-track-info'>
              <span className='track-title'>
                <span className='track-artist'>Nick Cave</span> - Where the wild roses grow
              </span>
              <span className='track-duration'>05:34</span>
            </div>
            <input type='range' min='0' max='100' step='1' className={'playback'} />
          </div>
          <div className='player-volume'>
            <input type='range' min='0' max='100' step='1' onChange={this.volumeChange} />
          </div>
          <div className='player-options'>
            <a href='#' className={'shuffle'}>
              <InlineSVG raw src={ShuffleBtn} />
            </a>
            <a href='#' className={'repeat'}>
              <InlineSVG raw src={RepeatBtn} />
            </a>
            <a href='#' className={'list'}>
              <InlineSVG raw src={ListBtn} />
            </a>
          </div>
        </Container>
      </div>
    )
  }
}

export default MusicPlayer