import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        // when clicking on the background  we should go back to home
        <div className='ui dimmer modals visible active' onClick={props.onDismiss}>
            {/* stopping the propagation of parent click handler (now the navigation to home screen does not happen when we click the modal box) */}
            <div className='ui standard modal visible active' onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    {props.title}
                </div>
                <div className='content'>{props.content}</div>
                <div className='actions'>
                    {props.actions}
                </div>
            </div>
        </div>, document.getElementById('modal')
    )
}

export default Modal;