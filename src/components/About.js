import React from 'react'

export default function About(props) {
    return (
        <div className="container">
            <h2 className={`my-2 text-${props.theme==='light'?'dark':'light'}`}>About Us</h2>
            <p className={`text-${props.theme==='light'?'dark':'light'}`}>TextUtils is a word analyzer and manipulator, created in React.</p>
            <a href="https://github.com/adarshpand3y/textutils-react" rel="noreferrer" target="_blank" className={`text-${props.theme === 'dark' ? 'light' : 'dark'}`}>Github Repository Link</a>
        </div>
    )
}
