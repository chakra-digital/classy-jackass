import React from 'react'
import PropTypes from 'prop-types'

// Components
import Header from '../components/Header'

// Styles
import '../styles/global/global.scss'

const Layout = (props) => {
    console.log(props)

    const {children, header, footer} = props

    return (
        <>
            {header && <Header/> }
            {children}
            {footer && <footer>This is my footer</footer> }
        </>
    )
}

Layout.propTypes = {
    header: PropTypes.bool.isRequired
}

export default Layout
