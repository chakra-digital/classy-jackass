import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// SVG
import LogoInline from '../images/svg/innerbrand.inline.svg'


const Header = props => {
    return (
        <header>
            <LogoInline className='logo'/>
            
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
