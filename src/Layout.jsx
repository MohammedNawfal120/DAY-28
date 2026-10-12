import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout(props) {
    return (
        <div className="container">
            <Header text="My React Page" />
            <div className="content">
                {props.children}
            </div>
            <Footer text="Thank You" />
        </div>
    );
}

export default Layout;