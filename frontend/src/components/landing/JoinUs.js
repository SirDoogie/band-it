import React, { Component } from 'react'

class JoinUs extends Component {
    render() {
        return(
            <section id={'join-us'}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="section-title">Join the Band IT<br/>community to Lorem ipsum</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="about col-4">
                            <div className="title">
                                <span className="number">01</span>
                                <h3>Find your inspiration</h3>
                            </div>
                            <div className="text">
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            </div>
                        </div>
                        <div className="about col-4">
                            <div className="title">
                                <span className="number">02</span>
                                <h3>Connect with local musicians for shows or project</h3>
                            </div>
                            <div className="text">
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            </div>
                        </div>
                        <div className="about col-4">
                            <div className="title">
                                <span className="number">03</span>
                                <h3>Go solo with Band-IT Tools designed to help</h3>
                            </div>
                            <div className="text">
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default JoinUs;