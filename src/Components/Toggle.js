//  In the terminal, write "npm i". This will install all the "node_modules" listed in "package.json" file, that are necessary for this projet.
import React from 'react';

// By this function, we are returning the toggle button, used in WIFI, BLUETOOTH and GPS settings.
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