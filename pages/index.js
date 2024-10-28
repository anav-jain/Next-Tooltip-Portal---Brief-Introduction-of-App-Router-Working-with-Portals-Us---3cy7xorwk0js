// pages/index.js
import React, { useState } from 'react';
import DynamicTooltip from '../components/DynamicTooltip';

const HomePage = () => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleMouseOver = () => {
        setTooltipVisible(true);
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
            <DynamicTooltip isVisible={isTooltipVisible} />
        </div>
    );
};

export default HomePage;
