import React from "react";

const AlertWindow = (props) => {
  return (
    <div className={`alert-window ${props.isvalid ? "hidden" : ""}`}>
      <h2 className='alert-heading'>Invalid input</h2>
      <p className='alert-message'>{props.errormessage}</p>
      <button onClick={props.onCloseModal}>Okay</button>
    </div>
  )
}

export default AlertWindow;