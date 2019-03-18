import React, { Component } from 'react'
import { ForFree, Band, It, PlayBtn, PrevBtn, NextBtn, Soundwave } from '../../images'
import SignUp from '../users/SignUp'
import InlineSVG from 'svg-inline-react'

class Intro extends Component {

  render() {
    return (
      <section id={ 'intro' }>
        <div className="container">
          <div className="row align-items-center">
            <div className="intro-brand col-6">
              <div className="get-started">
                <span>Get started</span>
                <InlineSVG src={ ForFree } className={ 'for-free-img' }/>
              </div>
              <div className="brand">
                <InlineSVG src={ Band } element={ 'div' } className={ 'band' }/>
                <InlineSVG src={ It } element={ 'div' } className={ 'it' }/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna sit amet, consectetur adipiscing elit, sed</p>
              <SignUp/>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              <div className="soundwave">
                <div className="player">
                  <a href="#!" className={ 'prev' }>
                    <InlineSVG src={ PrevBtn }/>
                  </a>
                  <a href="#!" className={ 'play' }>
                    <InlineSVG src={ PlayBtn }/>
                  </a>
                  <a href="#!" className={ 'next' }>
                    <InlineSVG src={ NextBtn }/>
                  </a>
                </div>
                <div className="wave">
                  <img src={ Soundwave } alt="Soundwave" className={ 'img-fluid' }/>
                </div>
              </div>
            </div>
            <div className="col-6">
              <nav className="intro-nav">
                <ul>
                  <li><a href="#!">Start a band</a></li>
                  <li><a href="#!">Join a band</a></li>
                  <li><a href="#!">Band - it</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Intro