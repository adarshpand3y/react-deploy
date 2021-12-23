import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme==='light'?'light':'dark'} bg-${props.theme==='light'?'light':'dark'}`}>
                <div className="container">
                    <Link className="navbar-brand" style={{fontSize: '25px', fontWeight: '600'}} to="/">React Textutils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://github.com/adarshpand3y/textutils-react">Github Repository</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="form-check form-switch">
                                <label className="form-check-label" style={props.theme==='light'?{color:'#707071'}:{color:'#9a9c9e'}} htmlFor="changeThemeSwitch">Switch Theme</label>
                                <input className="form-check-input" type="checkbox" role="switch" onClick={props.changeTheme} id="changeThemeSwitch"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}