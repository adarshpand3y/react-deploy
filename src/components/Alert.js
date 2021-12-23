import React from 'react'

export default function Alert(props) {
    return (
        props.alertMessage && <div className="alert alert-success" role="alert">
            <div className="container">
                <strong>Alert: </strong>{props.alertMessage}
            </div>
        </div>
    )
}
