import React from 'react'
import ReactDOM from 'react-dom'

export default function ModalWrapper({children, outClick}) {
    return ReactDOM.createPortal((
        <div className="modalWrapper">
            <div className="modalWrapper--bg" onClick={outClick}></div>
            <div className="modalWrapper__content">{children}</div>
        </div>
    ),document.getElementById('root'))
}
