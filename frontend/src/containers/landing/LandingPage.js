import React, { Component } from 'react'

import Intro from '../../components/landing/Intro';
import JoinUs from '../../components/landing/JoinUs';

class LandingPage extends Component {
    render() {
        return(
            <div>
                <Intro />
                <JoinUs />
            </div>
        )
    }
}

export default LandingPage;