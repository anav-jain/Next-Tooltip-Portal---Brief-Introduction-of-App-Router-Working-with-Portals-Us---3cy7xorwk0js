// pages/index.js
import React, { useState } from 'react';
import DynamicTooltip from '../components/DynamicTooltip';

const HomePage = () => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseOver = (event) => {
        setTooltipVisible(true);
        // Set tooltip position based on mouse position
        setTooltipPosition({ x: event.clientX, y: event.clientY + 20 }); // Offset for visibility
    };

    const handleMouseOut = () => {
        setTooltipVisible(false);
    };

    return (
        <div style={{ padding: '50px' }}>
            <span
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
                Hover over this text to see the dynamic tooltip.
            </span>
            <DynamicTooltip isVisible={isTooltipVisible} position={tooltipPosition} />
        </div>
    );
};

export default HomePage;
