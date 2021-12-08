import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// SVG
import LogoInline from '../images/svg/innerbrand.inline.svg'

// styles
import * as styles from "../styles/modules/Header.module.scss"

const Header = (props) => {
    return (
        <header className={styles.header}>
            <LogoInline className={styles.logo}/>
            
            <nav className={styles.nav}>
                <Link className={styles.navItem} to='/'>Home</Link>   
                <Link className={styles.navItem} to='/about'>About</Link>   
            </nav>
        </header>
    )
}

Header.propTypes = {

}

export default Header
