import React from 'react';
import PurpleFlowers from '../Wallpapers/flowers/PurpleFlowers.jpeg'

function Screen (){
    return(
        <div id="screen">
                <img src={PurpleFlowers} alt="Wallpaper" id="wallpaper-image" />
                <div id="menu-bar">
                    <div id="upper-nav">
                        <p className="menu-items" id="nav-heading"><b>iPod</b></p>
                        <i className="fas fa-battery-full"></i>
                    </div>
                    <hr width="100%" />
                    <p className="menu-items" id="selected">Music</p>
                    <p className="menu-items">Videos</p>
                    <p className="menu-items">Photos</p>
                    <p className="menu-items">Extras</p>
                    <p className="menu-items">Now Playing</p>
                    <p className="menu-items">Games</p>
                    <p className="menu-items">Settings</p>
                </div>
            </div>
    )
}

export default Screen;