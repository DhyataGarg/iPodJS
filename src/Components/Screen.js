//  In the terminal, write "npm i". This will install all the "node_modules" listed in "package.json" file, that are necessary for this projet.

// Importing all the required stuff.
import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';
import Lock from './../assets/GifFiles/Lock.gif';
import Dice from './../assets/GifFiles/dice.gif';
import Player from './Player';

// This is the main Screen function, which is imported in Frame.js file.
function Screen(props) {
    // This is the hook variable, which will show time on upper nav of iPod.
    const [time, setTime] = useState(new Date().toLocaleTimeString('it-IT'));
    // we are defining a variable, which will have the value of currently selected menu item.
    const currentMenuItems = props.currentMenuItems;
    // In this block of code, we are change the time variable after every 1 sec.
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleTimeString('it-IT')), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <React.Fragment>
            <div id="screen">
            {/* Here we are setting the wallpaper. */}
                <img src={props.currentWallpaper} alt="Wallpaper" id="wallpaper-image" />
                {/* If we are on brightness setting, we have to change the value of the slider as we click on backward or forward button. */}
                {props.brightness && <div id="set-settings-screen"><h3>Brightness</h3><input type="range" min="1" max="100" value={100 - props.brightnessValue} readOnly={true} /></div>}
               {/* In this section, for each setting, we are passing a prop to Toggle, which we have imported earlier, according to which it will set its styling. */}
                {props.isWiFi && <div id="set-settings-screen"><h3>WiFi</h3><Toggle isWifiOn={props.isWifiOn} /></div>}
                {props.isBluetooth && <div id="set-settings-screen"><h3>Bluetooth</h3><Toggle isBluetoothOn={props.isBluetoothOn} /></div>}
                {props.isGPS && <div id="set-settings-screen"><h3>GPS</h3><Toggle isGPSOn={props.isGPSOn} /></div>}
                {/* If we are on privacy page, then we have to show a paragraph and a lock image. */}
                {props.privacy && <div id="set-settings-screen"><p><b>Your device is secured.</b></p><img src={Lock} alt="Lock" id="gif-img" /></div>}
                {/* If we are on games page, then we have to show a heading and the dice image. */}
                {props.games && <div id="set-settings-screen"><h2>Games</h2><img src={Dice} alt="Dice" id="gif-img" /></div>}
                {/* If we are on photos, then we have to show all the images in currentMenuItems array and give them a className of image-widgets. */}
                {props.photos && <div id="photos-section">{currentMenuItems.map((items) => <img src={items} className="image-widget" key={items} />)}</div>}
                {/* If we are on Music or Video, then we will pass some props to Player, according to which it will show the content of current media item. */}
                {props.isMusic && <div id="song-view"><Player songName={props.songName} artistName={props.artistName} isPaused={props.isPaused} songThumbnail={props.songThumbnail} mediaType={"Music"}></Player></div>}
                {props.isVideo && <div id="song-view"><Player isPaused={props.isPaused} mediaType={"Video"}></Player></div>}
                
                {/* If the following conditions fulfill, then we have to show the upper nav on screen. */}
                {(!props.isFullScreen && !props.isMusic && !props.isVideo) &&
                    <React.Fragment>
                        <div id="upper-nav">
                            {/* Here we have a paragraph saying iPod. */}
                            <p className="menu-items" id="nav-heading"><b>iPod</b></p>
                            {/* This paragraph is for displaying time. */}
                            <p>{time}</p>
                            {/* This will show the wifi, bluetooth and GPS icons on upper nav according to their toggle state. */}
                            {props.isWifiOn && <i className="fas fa-wifi"></i>}
                            {props.isBluetoothOn && <i className="fab fa-bluetooth-b"></i>}
                            {props.isGPSOn && <i className="fas fa-map-marker-alt"></i>}
                            {/* This line of code is to show the battery icon on upper nav. */}
                            <i className="fas fa-battery-full"></i>
                        </div>
                        {/* Now here we are setting our side menu bar. */}
                        <div id="menu-bar">

                            <hr width="100%" />
                            {/* Here the selected menu item will have a blue background while others will have white. */}
                            {currentMenuItems.map((items) => (items === currentMenuItems[props.currentMenuItem] ? <p className="menu-items" id="selected" key={items}>{items} <i className="fas fa-chevron-right"></i></p> : <p className="menu-items" key={items}>{items}</p>))}</div>
                    </React.Fragment>
                }

                {/* At last we have a div over our screen, which will change its opacity as we set the brightness. */}
                <div id="screen-glass" style={{ backgroundColor: 'hsl(0deg 0% 0% /' + props.brightnessValue + '%)' }}></div>
            </div>

        </React.Fragment>
    )
}

export default Screen;