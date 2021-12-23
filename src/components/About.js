import React from 'react'

export default function About(props) {
    return (
        <div className="container my-4">
            <h1 className={`my-2 text-${props.theme==='light'?'dark':'light'}`}>About Us</h1>
            <p className={`text-${props.theme==='light'?'dark':'light'}`}>This is my about page.</p>
        </div>
    )
}
