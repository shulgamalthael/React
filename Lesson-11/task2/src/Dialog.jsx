import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ children, title, isOpen, hideDialog }) => {

    if(!isOpen) {
        return null;
    }

    return (
        <div class="dialog">
            <div class="dialog__heading">
                <h4 class="dialog__title">{title}</h4>
                <button class="dialog__close-btn" onClick={hideDialog}>+</button>
            </div>
            <div class="dialog__content">
                <p>{children}</p>
            </div>
        </div>
    );
}

Dialog.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
}

Dialog.defaultProps = {
    title: '',
    isOpen: false,
}

export default Dialog;