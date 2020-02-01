import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1 style={headerStyle}>
                TodoList
            </h1>
            <Link linkstyles={linkStyles} to="/">Home</Link> | <Link linkstyles={linkStyles} to="About">About</Link>
        </header>
        
    )
}

const linkStyles = {
    textAlign: 'center'
} 
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header;