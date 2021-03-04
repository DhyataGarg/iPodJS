import React from 'react';

function Wheel(){
    return (
        <div id="outer-wheel">
                <p id="menu-btn">MENU</p>
                <i className="fas fa-fast-forward" id="next-btn"></i>
                <i className="fas fa-fast-backward" id="previous-btn"></i>
                <i className="fas fa-play" id="play-btn"></i>
                <i className="fas fa-pause" id="pause-btn"></i>
                <div id="center-button"></div>
            </div>
    )
}

export default Wheel;