import React, { useState } from 'react';
import Screen from './Screen';
import Bird from './../Wallpapers/birds/Bird1.jpeg';
import Egypt from './../Wallpapers/buildings/egypt.jpeg';
import PurpleFlowers from './../Wallpapers/flowers/PurpleFlowers.jpeg';
import WhiteFlowers from './../Wallpapers/flowers/Flower1.jpeg';
import Food from './../Wallpapers/food/food1.jpg';
import Galaxy from './../Wallpapers/nature/Galaxy.jpg';
import Beach from './../Wallpapers/water/Beach.jpg';
import { newAudio, play, pause, isPlaying, stop } from "./PlayerWorking";
import OnMyWay from './../AudioFiles/OnMyWay.mp3';
import Alone from './../AudioFiles/Alone.mp3';
import BlankSpace from './../AudioFiles/BlankSpace.mp3';
import LoveStory from './../AudioFiles/LoveStory.mp3';

import OnMyWayThumbnail from './../AudioThumbnails/OnMyWay.jpg';
import AloneThumbnail from './../AudioThumbnails/Alone.jpg';
import BlankSpaceThumbnail from './../AudioThumbnails/BlankSpace.jpg';
import LoveStoryThumbnail from './../AudioThumbnails/LoveStory.jpg';

function Frame() {

    const mainMenuItems = ["Cover Flow", "Music", "Videos", "Photos", "Extras", "Now Playing", "Games", "Settings"];
    const settingMenuItems = ["Set Wallpaper", "Brightness", "WiFi", "Bluetooth", "Privacy", "GPS"];
    //    *****************************************Msic Secction*********************************************
    const musicMenuItems = ["All Songs", "Artists", "Favourites"];
    const songsMenuItems = ["On My Way", "Love Story", "Alone", "Blank Space"];
    const artistMenuItems = ["Alan Walker", "Taylor Swift"]
    const alanWalkerMenuItems = ["On My Way", "Alone"];
    const taylorSwiftMenuItems = ["Blank Space", "Love Story"];
    const [currentMenu, setCurrentMenu] = useState("mainMenu");
    const [currentMenuItem, setCurrentMenuItem] = useState(0);
    const [currentMenuItems, setCurrentMenuItems] = useState(mainMenuItems);
    const [isMusic, setIsMusic] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [isNewSong, setIsNewSong] = useState(false);
    const [songName, setSongName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [songURL, setSongURL] = useState("");
    const [songThumbnail, setSongThumbnail] = useState("");

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

    const [wifi, setWIFI] = useState(false);
    const [isWifiOn, setIsWifiOn] = useState(true);

    const [bluetooth, setBluetooth] = useState(false);
    const [isBluetoothOn, setIsBluetoothOn] = useState(false);

    const [gps, setGPS] = useState(false);
    const [isGPSOn, setIsGPSOn] = useState(false);

    const [privacy, setPrivacy] = useState(false);

    const [isFullScreen, setIsFullScreen] = useState(false);



    const onClickForwardButton = () => { 
        if (brightness) {
            setBrightnessValue(brightnessValue - 10);
        }
        else if (wifi) {
            setIsWifiOn(true);
        }
        else if (bluetooth) {
            setIsBluetoothOn(true);
        }
        else if (gps) {
            setIsGPSOn(true);
        }
        else if (!isFullScreen && !isMusic) {
            if (currentMenuItem === currentMenuItems.length - 1) {
                setCurrentMenuItem(0);
            } else {
                setCurrentMenuItem(currentMenuItem + 1);
            }
        }
        else if(isMusic){
            onClickCenterButton();
            stop();
            setIsPaused(true);
            if (currentMenuItem === currentMenuItems.length - 1){
                setCurrentMenuItem(0);
            }
            else{
                setCurrentMenuItem(currentMenuItem + 1);
            }
        }
    }
    
    const onClickBackwardButton = () => {
        if (brightness) {
            setBrightnessValue(brightnessValue + 10);
        }
        else if (wifi) {
            setIsWifiOn(false);
        }
        else if (bluetooth) {
            setIsBluetoothOn(false);
        }
        else if (gps) {
            setIsGPSOn(false);
        }
        else if (!isFullScreen && !isMusic) {
            if (currentMenuItem === 0) {
                setCurrentMenuItem(currentMenuItems.length - 1);
            } else {
                setCurrentMenuItem(currentMenuItem - 1);
            }
        }
        if(isMusic){
            setIsNewSong(true);
            stop();
            setCurrentMenuItem(currentMenuItem - 1);
            onClickCenterButton();
            if (currentMenuItem === 0){
                setCurrentMenuItem(currentMenuItems.length - 1);
            }
        }
    }

    const onClickMenuButton = () => {
        if ((!isFullScreen || !brightness || privacy) && !bluetooth && !wifi && !gps) {
            setCurrentMenu("mainMenu");
            setCurrentMenuItems(mainMenuItems);
            setCurrentMenuItem(0);
        }
        setIsFullScreen(false);
        setBrightness(false);
        setPrivacy(false);
        setIsMusic(false);
    }

    const onClickPlayPauseButton = () => {
        if (isMusic || currentMenu === "mainMenu") {
            if(isPaused){
                if (isPlaying === "notStarted" || isNewSong) {
                    newAudio(songURL);
                } else {
                    play();
                }
                setIsPaused(false);
            }else{setIsPaused(true);
                pause();}
            
            setIsNewSong(false);
        }
    }

    const onClickCenterButton = () => {
        if (!isFullScreen) {
            switch (currentMenu) {
                case "mainMenu":
                    switch (currentMenuItem) {
                        case 0:
                            setIsFullScreen(true);
                            break;
                        case 1:
                            changeMenu("musicMenu", musicMenuItems);
                            break;
                        case 5:
                            changeMenu("songsMenu", songsMenuItems)
                            setIsMusic(true);
                            break;    
                        case 7:
                            changeMenu("settingMenu", settingMenuItems);
                            break;
                        default:
                            break;
                    };
                    break;

                case "settingMenu":
                    switch (currentMenuItem) {
                        case 0:
                            changeMenu("wallpaperMenu", wallpaperMenuItems);
                            break;
                        case 1:
                            openDeviceSettings(setBrightness, "brightnessMenu");
                            break;
                        case 2:
                            openDeviceSettings(setWIFI, "wifiMenu");
                            break;
                        case 3:
                            openDeviceSettings(setBluetooth, "bluetoothMenu");
                            break;
                        case 4:
                            openDeviceSettings(setPrivacy, "privacyMenu");
                            break;
                        case 5:
                            openDeviceSettings(setGPS, "gpsMenu");
                            break;
                        default:
                            break;
                    };
                    break;

                case "gpsMenu":
                    setDeviceSettings(setGPS);
                    onClickMenuButton();
                    break;

                case "bluetoothMenu":
                    setDeviceSettings(setBluetooth);
                    onClickMenuButton();
                    break;

                case "wifiMenu":
                    setDeviceSettings(setWIFI);
                    onClickMenuButton();
                    break;

                case "privacyMenu":
                    setDeviceSettings(setPrivacy);
                    onClickMenuButton();
                    break;

                case "brightnessMenu":
                    setDeviceSettings(setBrightness);
                    onClickMenuButton();
                    break;

                case "musicMenu":
                    if (currentMenuItem === 0) {
                        changeMenu("songsMenu", songsMenuItems)
                    }
                    else if (currentMenuItem === 1) {
                        changeMenu("artistMenu", artistMenuItems)
                    }
                    break;

                case "songsMenu":
                    switch (currentMenuItem) {
                        case 0:
                            setCurrentSongDetails(songsMenuItems, 0, OnMyWay, OnMyWayThumbnail, "Alan Walker");
                            break;
                        case 1:
                            setCurrentSongDetails(songsMenuItems, 1, LoveStory, LoveStoryThumbnail, "Taylor Swift");
                            break;
                        case 2:
                            setCurrentSongDetails(songsMenuItems, 2, Alone, AloneThumbnail, "Alan Walker")
                            break;
                        case 3:
                            setCurrentSongDetails(songsMenuItems, 3, BlankSpace, BlankSpaceThumbnail, "Taylor Swift")
                            break;
                        default:
                            break;    
                    }
                    break;
                        
                        case "artistMenu":
                            switch (currentMenuItem) {
                                case 0:
                                    changeMenu("alanWalkerMenu", alanWalkerMenuItems);
                                    break;
                                case 1:
                                    changeMenu("taylorSwiftMenu", taylorSwiftMenuItems);
                                    break;
                                default:
                                    break;
                            };
                            break;

                        case "alanWalkerMenu":
                            if (currentMenuItem === 0) {
                                setCurrentSongDetails(alanWalkerMenuItems, 0, OnMyWay, OnMyWayThumbnail, "Alan Walker")
                            }
                            else if (currentMenuItem === 1) {
                                setCurrentSongDetails(alanWalkerMenuItems, 1, Alone, AloneThumbnail, "Alan Walker")
                            };
                            break;


                        case "taylorSwiftMenu":
                            if (currentMenuItem === 0) {
                                setCurrentSongDetails(taylorSwiftMenuItems, 0, BlankSpace, BlankSpaceThumbnail, "Taylor Swift")
                            }
                            else if (currentMenuItem === 1) {
                                setCurrentSongDetails(taylorSwiftMenuItems, 1, LoveStory, LoveStoryThumbnail, "Taylor Swift")
                            };
                            break;


                        case "wallpaperMenu":
                            switch (currentMenuItem) {
                                case 0:
                                    changeMenu("birdsMenu", birdsMenuItems);
                                    break;
                                case 1:
                                    changeMenu("buildingsMenu", buildingsMenuItems);
                                    break;
                                case 2:
                                    changeMenu("flowersMenu", flowersMenuItems);
                                    break;
                                case 3:
                                    changeMenu("foodMenu", foodMenuItems);
                                    break;
                                case 4:
                                    changeMenu("natureMenu", natureMenuItems);
                                    break;
                                case 5:
                                    changeMenu("beachMenu", beachMenuItems);
                                    break;
                                default:
                                    break;
                            }
                            break;

                        case "birdsMenu":
                            setSelectedWallpaper(Bird)
                            break;

                        case "buildingsMenu":
                            setSelectedWallpaper(Egypt)
                            break;

                        case "flowersMenu":
                            if (currentMenuItem === 0) {
                                setSelectedWallpaper(WhiteFlowers)
                            }
                            else if (currentMenuItem === 1) {
                                setSelectedWallpaper(PurpleFlowers)
                            }
                            break;

                        case "foodMenu":
                            setSelectedWallpaper(Food);
                            break;
                        case "natureMenu":
                            setSelectedWallpaper(Galaxy)
                            break;
                        case "beachMenu":
                            setSelectedWallpaper(Beach)
                            break;
                        default:
                            break;
                    }
            }
        }

        const setCurrentSongDetails = (menuItems, menuItemsIndex, currentSongURL, currentSongThumbnail, curretArtistName) => {
            if (songName !== menuItems[menuItemsIndex]) {
                setIsNewSong(true);
                stop();
            }
            setSongName(menuItems[menuItemsIndex]);
            setSongURL(currentSongURL);
            setSongThumbnail(currentSongThumbnail);
            setIsMusic(true);
            setArtistName(curretArtistName)
        }

        const setSelectedWallpaper = (wallpaperName) => {
            setCurrentWallpaper(wallpaperName);
            setIsFullScreen(true);
        }

        const changeMenu = (menu, menuItems) => {
            setCurrentMenu(menu);
            setCurrentMenuItems(menuItems);
            setCurrentMenuItem(0);
        }

        const openDeviceSettings = (settingName, menu) => {
            settingName(true);
            setIsFullScreen(false);
            setCurrentMenu(menu);
        }

        const setDeviceSettings = (settings) => {
            setIsFullScreen(true);
            settings(false);
            setCurrentMenu("settingMenu");
            setCurrentMenuItems(settingMenuItems);
        }

        return (

            <div className="frame">
                <Screen currentMenu={currentMenu} currentMenuItems={currentMenuItems} currentMenuItem={currentMenuItem} currentWallpaper={currentWallpaper} isFullScreen={isFullScreen} brightness={brightness} brightnessValue={brightnessValue} isWiFi={wifi} isWifiOn={isWifiOn} isBluetoothOn={isBluetoothOn} isBluetooth={bluetooth} isGPS={gps} isGPSOn={isGPSOn} privacy={privacy} isMusic={isMusic} isPaused={isPaused} songName={songName} artistName={artistName} songThumbnail={songThumbnail}></Screen>

                <div id="outer-wheel">
                    <p id="menu-btn" onClick={onClickMenuButton}>MENU</p>
                    <i className="fas fa-fast-forward" id="next-btn" onClick={onClickForwardButton}></i>
                    <i className="fas fa-fast-backward" id="previous-btn" onClick={onClickBackwardButton}></i>
                    <span id="play-pause-btn" onClick={onClickPlayPauseButton}>
                        <i className="fas fa-play" id="play-btn"></i>
                        <i className="fas fa-pause" id="pause-btn"></i>
                    </span>
                    <div id="center-button" onClick={onClickCenterButton}></div>
                </div>
            </div>
        )
    }

    export default Frame;
