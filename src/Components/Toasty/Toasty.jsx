import React from 'react';
import { ToastContainer, toast } from "react-toastify";

const Message = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
)

const Toasty = () => {
  const displayMsg = () => {
    toast(<Message />)
    // toast(Msg) would also work
  }

  return (
  <div>
    <button onClick={displayMsg}>Click me</button>
    <ToastContainer />
  </div>
);
}

export default Toasty