import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/bandit-logo.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter);

class NavbarLanding extends Component {
    render(){


        return(
            <nav className='navbar navbar-expand-lg navbar-dark fixed-top navbar-landing'>
                <Link to='/' className='navbar-brand'>
                    <img src={Logo} alt="BandIt" className={'img-fluid'} />
                </Link>
                <div className='container'>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className="navbar-nav social-nav">
                            <li className='nav-item'>
                                <a href="#!" className={'nav-link'}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="#!" className={'nav-link'}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="#!" className={'nav-link'}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                        </ul>
                        <ul className='navbar-nav m-auto'>
                            <li className='nav-item'>
                                <a href="#!" className={'nav-link'}>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#!" className={'nav-link'}>About</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#!" className={'nav-link'}>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <Link to='/signin/' className='btn btn-outline-light btn-lg'>Sign In</Link>
                </div>

            </nav>
        )
    }
}

export default NavbarLanding;