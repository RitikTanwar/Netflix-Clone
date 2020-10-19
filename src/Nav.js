import React from 'react'
import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <img
                className="Nav-logo"
                src={require('./Netflix-Logo.wine.png')}
                alt="Netflix Logo"
            />
            <img
                className="Nav-avatar"
                src={require('./download.png')}
            />
        </div>
    )
}

export default Nav
