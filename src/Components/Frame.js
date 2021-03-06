import React, { useState } from 'react';
import Screen from './Screen';
import Bird from './../Wallpapers/birds/Bird1.jpeg';
import Egypt from './../Wallpapers/buildings/egypt.jpeg';
import PurpleFlowers from './../Wallpapers/flowers/PurpleFlowers.jpeg';
import WhiteFlowers from './../Wallpapers/flowers/Flower1.jpeg';
import Food from './../Wallpapers/food/food1.jpg';
import Galaxy from './../Wallpapers/nature/Galaxy.jpg';
import Beach from './../Wallpapers/water/Beach.jpg';

function Frame() {

    const mainMenuItems = ["Cover Flow", "Music", "Videos", "Photos", "Extras", "Now Playing", "Games", "Settings"];
    const settingMenuItems = ["Set Wallpaper", "Brightness", "WiFi", "Bluetooth", "Privacy", "GPS"];
    //    *****************************************Msic Secction*********************************************
    const musicMenuItems = ["All Songs", "Artists", "Favourites"];
    const songsMenuItems = ["On My Way", "Oh Humsafar", "Ki Samjhaiye", "Sawan Aaya Hai", "Alone", "Dilbar", "Yaarian", "Blank Space"];
    const artistMenuItems = ["Allen Walker", "Taylor Swift", "Neha Kakkar", "Arijit Singh", "Amrinder Gill"]
    const allenWalkerMenuItems = ["On My Way", "Alone"];
    const taylorSwiftMenuItems = ["Blank Space", "Love Story"];
    const nehaKakkarMenuItems = ["Oh Humsafar", "Dilbar"];
    const arijitSinghMenuItems = ["Sawan Aaya Hai", "Sanam Re"];
    const amrinderGillMenuItems = ["Ki Samjhaiye", "Yaarian"];
    const [currentMenu, setCurrentMenu] = useState("mainMenu")
    const [currentMenuItem, setCurrentMenuItem] = useState(0);
    const [currentMenuItems, setCurrentMenuItems] = useState(mainMenuItems);

    // *************************************WallPapers Section*************************************************
    const wallpaperMenuItems = ["Birds", "Buildings", "Flowers", "Food", "Nature", "Beach"];
    const birdsMenuItems = ["Tree Bird"];
    const buildingsMenuItems = ["Pyramid"];
    const flowersMenuItems = ["White Flowers", "Purple Flowers"];
    const foodMenuItems = ["Food"];
    const natureMenuItems = ["Galaxy"];
    const beachMenuItems = ["Beach"];
    const [currentWallpaper, setCurrentWallpaper] = useState(Bird);
    const [brightness, setBrightness] = useState(false);
    const [brightnessValue, setBrightnessValue] = useState(20);

    const [isFullScreen, setIsFullScreen] = useState(false);

    const onClickForwardButton = () => {
        if(brightness){
            setBrightnessValue(brightnessValue - 10);
        }
        else{
            if (currentMenuItem === currentMenuItems.length - 1) {
                setCurrentMenuItem(0);
            } else {
                setCurrentMenuItem(currentMenuItem + 1);
            }    
        }
    }

    const onClickBackwardButton = () => {
        if(brightness){
            setBrightnessValue(brightnessValue + 10);
        }
        else{
            if (currentMenuItem === 0) {
                setCurrentMenuItem(currentMenuItems.length - 1);
            } else {
                setCurrentMenuItem(currentMenuItem - 1);
            }
        }
    }

    const onClickMenuButton = () => {
        if (!isFullScreen || brightness) {
            setCurrentMenu("mainMenu");
            setCurrentMenuItems(mainMenuItems);
            setCurrentMenuItem(0);
        }
        setIsFullScreen(false)
        setBrightness(false)
    }

    const onClickCenterButton = () => {
        if (currentMenu === "mainMenu") {
            if (currentMenuItem === 0){
                setIsFullScreen(true);
            }

            if (currentMenuItem === 1) {
                setCurrentMenu("musicMenu");
                setCurrentMenuItems(musicMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 7) {
                setCurrentMenu("settingMenu");
                setCurrentMenuItems(settingMenuItems);
                setCurrentMenuItem(0);
            }
        }

        else if (currentMenu === "settingMenu") {
            if (currentMenuItem === 0) {
                setCurrentMenu("wallpaperMenu");
                setCurrentMenuItems(wallpaperMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 1) {
                setBrightness(true);
                setIsFullScreen(false);
            }
        }

        else if (currentMenu === "musicMenu") {
            if (currentMenuItem === 0) {
                setCurrentMenu("songsMenu");
                setCurrentMenuItems(songsMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 1) {
                setCurrentMenu("artistMenu");
                setCurrentMenuItems(artistMenuItems);
                setCurrentMenuItem(0);
            }
        }

        else if (currentMenu === "artistMenu") {
            if (currentMenuItem === 0) {
                setCurrentMenu("allenWalkerMenu");
                setCurrentMenuItems(allenWalkerMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 1) {
                setCurrentMenu("taylorSwiftMenu");
                setCurrentMenuItems(taylorSwiftMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 2) {
                setCurrentMenu("nehaKakkarMenu");
                setCurrentMenuItems(nehaKakkarMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 3) {
                setCurrentMenu("arijitSinghMenu");
                setCurrentMenuItems(arijitSinghMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 4) {
                setCurrentMenu("amrinderGillMenu");
                setCurrentMenuItems(amrinderGillMenuItems);
                setCurrentMenuItem(0);
            }
        }

        else if (currentMenu === "wallpaperMenu") {
            if (currentMenuItem === 0) {
                setCurrentMenu("birdsMenu");
                setCurrentMenuItems(birdsMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 1) {
                setCurrentMenu("buildingsMenu");
                setCurrentMenuItems(buildingsMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 2) {
                setCurrentMenu("flowersMenu");
                setCurrentMenuItems(flowersMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 3) {
                setCurrentMenu("foodMenu");
                setCurrentMenuItems(foodMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 4) {
                setCurrentMenu("natureMenu");
                setCurrentMenuItems(natureMenuItems);
                setCurrentMenuItem(0);
            }
            else if (currentMenuItem === 5) {
                setCurrentMenu("beachMenu");
                setCurrentMenuItems(beachMenuItems);
                setCurrentMenuItem(0);
            }
        }

        else if (currentMenu === "birdsMenu") {
            if (currentMenuItem === 0) {
                setCurrentWallpaper(Bird);
                setIsFullScreen(true);
            }
        }
        else if (currentMenu === "buildingsMenu") {
            if (currentMenuItem === 0) {
                setCurrentWallpaper(Egypt);
                setIsFullScreen(true);
            }
        }
        else if (currentMenu === "flowersMenu") {
            if (currentMenuItem === 0) {
                setCurrentWallpaper(WhiteFlowers);
                setIsFullScreen(true);
            }
            else if (currentMenuItem === 1) {
                setCurrentWallpaper(PurpleFlowers);
                setIsFullScreen(true);
            }
        }

        else if (currentMenu === "foodMenu") {
            if (currentMenuItem === 0) {
                setCurrentWallpaper(Food);
                setIsFullScreen(true);
            }
        }

        else if (currentMenu === "natureMenu") {
            if (currentMenuItem === 0) {
                setCurrentWallpaper(Galaxy);
                setIsFullScreen(true);
            }
        }
        else if (currentMenu === "beachMenu") {
            if (currentMenuItem === 0) {
                setCurrentWallpaper(Beach);
                setIsFullScreen(true);
            }
        }
    }

    console.log(currentMenuItems[currentMenuItem]);

    return (

        <div className="frame">
            <Screen currentMenu={currentMenu} currentMenuItems={currentMenuItems} currentMenuItem={currentMenuItem} currentWallpaper={currentWallpaper} isFullScreen={isFullScreen} brightness = {brightness} brightnessValue = {brightnessValue}></Screen>

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
