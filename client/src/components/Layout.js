import React from 'react'

const Layout = ({ children }) => {
    console.log(children)
    return (
        <>
            <header>This is my header</header>
            <h1>This is our Layout</h1>
            {children}
            <footer>This is my Buttholes</footer>
        </>
    )
}

export default Layout
