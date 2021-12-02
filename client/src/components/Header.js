import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>   
                <Link to='/about'>About</Link>   
            </nav>
        </header>
    )
}

Header.propTypes = {

}

export default Header
