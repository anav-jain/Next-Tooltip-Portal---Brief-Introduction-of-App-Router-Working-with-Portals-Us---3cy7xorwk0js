// components/DynamicTooltip.js
import React from 'react';
import TooltipPortal from './TooltipPortal';

const DynamicTooltip = ({ isVisible }) => {
    return (
        <>
            {isVisible && <TooltipPortal content="This is a tooltip" />}
        </>
    );
};

export default DynamicTooltip;
