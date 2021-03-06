import React from 'react';

function Screen(props) {
    const currentMenuItems = props.currentMenuItems;
    return (
        <React.Fragment>
            <div id="screen">
                <img src={props.currentWallpaper} alt="Wallpaper" id="wallpaper-image" />

                {props.brightness && <div id="set-brightness-screen"><h3>Brightness</h3><input type="range" min="1" max="100" value={100 - props.brightnessValue} /></div>}

                {!props.isFullScreen &&
                    <div id="menu-bar">

                        <div id="upper-nav">
                            <p className="menu-items" id="nav-heading"><b>iPod</b></p>
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