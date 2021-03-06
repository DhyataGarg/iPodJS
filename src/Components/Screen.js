import React from 'react';
import Toggle from './Toggle';
import Lock from './../GifFiles/Lock.gif'

function Screen(props) {
    const currentMenuItems = props.currentMenuItems;
    return (
        <React.Fragment>
            <div id="screen">
                <img src={props.currentWallpaper} alt="Wallpaper" id="wallpaper-image" />

                {props.brightness && <div id="set-settings-screen"><h3>Brightness</h3><input type="range" min="1" max="100" value={100 - props.brightnessValue} /></div>}
                {props.isWiFi && <div id="set-settings-screen"><h3>WiFi</h3><Toggle isWifiOn = {props.isWifiOn} /></div>}
                {props.isBluetooth && <div id="set-settings-screen"><h3>Bluetooth</h3><Toggle isBluetoothOn = {props.isBluetoothOn} /></div>}
                {props.isGPS && <div id="set-settings-screen"><h3>GPS</h3><Toggle isGPSOn = {props.isGPSOn} /></div>}
                {props.privacy && <div id="set-settings-screen"><p><b>Your device is secured.</b></p><img src={Lock} alt="Lock" id="lock-img" /></div>}

                {!props.isFullScreen &&
                    <div id="menu-bar">

                        <div id="upper-nav">
                            <p className="menu-items" id="nav-heading"><b>iPod</b></p>
                            {props.isWifiOn && <i class="fas fa-wifi"></i>}
                            {props.isBluetoothOn && <i class="fab fa-bluetooth-b"></i>}
                            {props.isGPSOn && <i class="fas fa-map-marker-alt"></i>}
                            <i className="fas fa-battery-full"></i>
                        </div>

                        <hr width="100%" />

                        {currentMenuItems.map((items) => (items === currentMenuItems[props.currentMenuItem] ? <p className="menu-items" id="selected" key={items}>{items} <i class="fas fa-chevron-right"></i></p> : <p className="menu-items" key={items}>{items}</p>))}</div>
                }

                <div id="screen-glass" style={{ backgroundColor: 'hsl(0deg 0% 0% /' + props.brightnessValue + '%)'}}></div>
            </div>

        </React.Fragment>
    )
}

export default Screen;