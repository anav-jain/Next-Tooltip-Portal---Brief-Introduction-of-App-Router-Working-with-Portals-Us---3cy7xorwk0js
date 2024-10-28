// components/DynamicTooltip.js
import React from 'react';
import TooltipPortal from './TooltipPortal';

const DynamicTooltip = ({ isVisible, position }) => {
    return (
        <>
            {isVisible && <TooltipPortal content="This is a tooltip" position={position} />}
        </>
    );
};

export default DynamicTooltip;
