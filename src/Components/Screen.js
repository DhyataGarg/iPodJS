import React from 'react';
import PurpleFlowers from '../Wallpapers/flowers/PurpleFlowers.jpeg'

function Screen(props) {
    const menuItems = ["Music","Videos", "Photos", "Extras", "Now Playing", "Games", "Settings"];
    console.log(menuItems[props.currentMenuItem] + props.currentMenuItem)
    return (
        <React.Fragment>
            <div id="screen">
                <img src={PurpleFlowers} alt="Wallpaper" id="wallpaper-image" />
                <div id="menu-bar">
                    <div id="upper-nav">
                        <p className="menu-items" id="nav-heading"><b>iPod</b></p>
                        <i className="fas fa-battery-full"></i>
                    </div>
                    <hr width="100%" />
                    {menuItems.map((items) => (items === menuItems[props.currentMenuItem] ? <p className="menu-items" id="selected" key={items}>{items}</p> : <p className="menu-items" key={items}>{items}</p>))}
</div>

                    <div id="screen-glass"></div>
                </div>
     
        </React.Fragment>
    )
}

export default Screen;