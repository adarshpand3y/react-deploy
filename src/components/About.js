import React from 'react'

export default function About(props) {
    return (
        <div className="container">
            <h2 className={`my-2 text-${props.theme==='light'?'dark':'light'}`}>About Us</h2>
            <p className={`text-${props.theme==='light'?'dark':'light'}`}>TextUtils is a word analyzer and manipulator, created in React.</p>
            <p className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noreferrer" className={`text-${props.theme === 'dark' ? 'light' : 'dark'}`}>CodeWithHarry ke react videos</a> ko dekh ke banaya hai. Chhap kar nahi, samajh kar.
                </p>
            <a href="https://github.com/adarshpand3y/textutils-react" rel="noreferrer" target="_blank" className={`text-${props.theme === 'dark' ? 'light' : 'dark'}`}>Github Repository Link</a>
        </div>
    )
}
