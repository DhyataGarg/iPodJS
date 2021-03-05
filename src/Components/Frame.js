import React, { useState } from 'react';
import Screen from './Screen';

function Frame() {

    const mainMenuItems = ["Music", "Videos", "Photos", "Extras", "Now Playing", "Games", "Settings"];
    const [currentMenuItem, setCurrentMenuItem] = useState(0);

    const onClickForwardButton = () => {
        if (currentMenuItem === mainMenuItems.length - 1) {
            setCurrentMenuItem(0);
        } else {
            setCurrentMenuItem(currentMenuItem + 1);
        }

        console.log(currentMenuItem);

        return currentMenuItem;
    }

    const onClickBackwardButton = () => {
        if (currentMenuItem === 0) {
            setCurrentMenuItem(mainMenuItems.length - 1);
        } else {
            setCurrentMenuItem(currentMenuItem - 1);
        }

        console.log(currentMenuItem);

        return currentMenuItem;
    }


    return (

        <div className="frame">
            <Screen currentMenuItem = {currentMenuItem}></Screen>

            <div id="outer-wheel">
                <p id="menu-btn">MENU</p>
                <i className="fas fa-fast-forward" id="next-btn" onClick={onClickForwardButton}></i>
                <i className="fas fa-fast-backward" id="previous-btn" onClick={onClickBackwardButton}></i>
                <i className="fas fa-play" id="play-btn"></i>
                <i className="fas fa-pause" id="pause-btn"></i>
                <div id="center-button"></div>
        </div>
        </div>
    )
}

export default Frame;
