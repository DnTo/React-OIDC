import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import Nav from '../components/Nav'

const Layout = (props) => {


    return (
        <>
            <BrowserRouter>
                <Nav />
                <App />
                {props.children}
            </BrowserRouter>

        </>
    )
}
export default Layout

