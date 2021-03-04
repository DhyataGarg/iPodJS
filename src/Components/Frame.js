import React from 'react';
import Screen from './Screen';
import Wheel from './Wheel';

function Frame() {
    return (
        <div className="frame">
            <Screen></Screen>
            <Wheel></Wheel>
        </div>
    )
}

export default Frame;