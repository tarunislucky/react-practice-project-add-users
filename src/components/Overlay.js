import React from "react";

const Overlay = (props) => {
  return (
    <div className={`overlay ${props.isvalid ? "hidden" : ""}`} onClick={props.closemodal}>
    </div>
  )
}

export default Overlay;