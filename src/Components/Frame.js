import React, { useState } from 'react';
import Screen from './Screen';

function Frame() {

    const mainMenuItems = ["Music", "Videos", "Photos", "Extras", "Now Playing", "Games", "Settings"];
    const settingMenuItems = ["Set Wallpaper", "Brightness", "WiFi", "Bluetooth", "Privacy", "GPS"];
    const musicMenuItems = ["All Songs", "Artists", "Favourites"];
    const [currentMenu, setCurrentMenu] = useState("mainMenu")
    const [currentMenuItem, setCurrentMenuItem] = useState(0);
    const [currentMenuItems, setCurrentMenuItems] = useState(mainMenuItems);

    const onClickForwardButton = () => {
        if (currentMenuItem === currentMenuItems.length - 1) {
            setCurrentMenuItem(0);
        } else {
            setCurrentMenuItem(currentMenuItem + 1);
        }
    }

    const onClickBackwardButton = () => {
        if (currentMenuItem === 0) {
            setCurrentMenuItem(currentMenuItems.length - 1);
        } else {
            setCurrentMenuItem(currentMenuItem - 1);
        }
    }

    const onClickMenuButton = () => {
        setCurrentMenu ("mainMenu");
        setCurrentMenuItems(mainMenuItems);
        setCurrentMenuItem(0);
    }

    const onClickCenterButton = () => {
        if (currentMenu === "mainMenu") {
            if (currentMenuItem === 0) {
                setCurrentMenu ("musicMenu");
                setCurrentMenuItems(musicMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 6) {
                setCurrentMenu ("settingMenu");
                setCurrentMenuItems(settingMenuItems);
                setCurrentMenuItem(0);
            }
        }
    }

    console.log(currentMenuItems[currentMenuItem]);

    return (

        <div className="frame">
            <Screen currentMenu={currentMenu} currentMenuItems={currentMenuItems} currentMenuItem={currentMenuItem}></Screen>

            <div id="outer-wheel">
                <p id="menu-btn" onClick={onClickMenuButton}>MENU</p>
                <i className="fas fa-fast-forward" id="next-btn" onClick={onClickForwardButton}></i>
                <i className="fas fa-fast-backward" id="previous-btn" onClick={onClickBackwardButton}></i>
                <i className="fas fa-play" id="play-btn"></i>
                <i className="fas fa-pause" id="pause-btn"></i>
                <div id="center-button" onClick={onClickCenterButton}></div>
            </div>
        </div>
    )
}

export default Frame;
