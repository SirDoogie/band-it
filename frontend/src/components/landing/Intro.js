import React, {Component} from 'react'
import ForFree from '../../images/for_free.svg'
import Band from '../../images/Band.svg';
import It from '../../images/it.svg';
import Soundwave from '../../images/soundwave.png';
import Play from '../../images/Play.svg';

import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faStepBackward, faStepForward);

class Intro extends Component {
    render() {
        return (
            <section id={'intro'}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="intro-brand col-6">
                            <div className="get-started">
                                <span>Get started</span>
                                <img src={ForFree} alt="FOR FREE" className={'for-free-img'}/>
                            </div>
                            <div className="brand">
                                <img src={Band} alt="BAND" className={'band'}/>
                                <img src={It} alt="IT" className={'it'}/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna sit amet, consectetur adipiscing elit, sed</p>
                            <a href="#!" className={'btn btn-primary btn-lg'}>Sign Up</a>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="soundwave">
                                <div className="player">
                                    <a href="#!" className={'prev'}>
                                        <FontAwesomeIcon icon={faStepBackward} />
                                    </a>
                                    <a href="#!" className={'play'}>
                                        <img src={Play} alt="Play"/>
                                    </a>
                                    <a href="#!" className={'next'}>
                                        <FontAwesomeIcon icon={faStepForward} />
                                    </a>
                                </div>
                                <div className="wave">
                                    <img src={Soundwave} alt="Soundwave" className={'img-fluid'}/>
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

export default Intro;