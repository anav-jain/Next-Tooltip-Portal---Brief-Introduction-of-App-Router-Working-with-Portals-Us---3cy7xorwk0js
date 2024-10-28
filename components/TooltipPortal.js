// components/TooltipPortal.js
import React from 'react';
import ReactDOM from 'react-dom';

const TooltipPortal = ({ content }) => {
    return ReactDOM.createPortal(
        <div style={tooltipStyles}>
            {content}
        </div>,
        document.body // Render the tooltip in the body
    );
};

const tooltipStyles = {
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    zIndex: 1000,
};

export default TooltipPortal;
