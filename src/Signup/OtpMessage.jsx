import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function OtpMessage(props) {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="fw-semibold lh-base otpMessage_paragraph">{props.message}</div>
            </div>
        </div>
    </div>
  )
}

export default OtpMessage
