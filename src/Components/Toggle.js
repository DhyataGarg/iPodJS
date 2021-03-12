import React from 'react';

function Toggle(props) {
    return (
        <React.Fragment>
            <div id="toggle-btn" className={(props.isWifiOn || props.isBluetoothOn || props.isGPSOn) && "active"}>
                <div className="inner-circle"></div>
            </div>
        </React.Fragment>
    )
}

export default Toggle;