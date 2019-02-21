import React, { Component } from 'react'
import ForFree from '../../images/for_free.svg'
import Band from '../../images/Band.svg';
import It from '../../images/it.svg';

class Intro extends Component {
    render() {
        return(
            <section id={'intro'}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="intro-brand col-6">
                            <div className="get-started">
                                <span>Get started</span>
                                <img src={ForFree} alt="FOR FREE" className={'for-free-img'}/>
                            </div>
                            <div className="brand">
                                <img src={Band} alt="BAND"/>
                                <img src={It} alt="IT"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet, consectetur adipiscing elit, sed</p>
                            <a href="#!" className={'btn btn-primary btn-lg'}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Intro;