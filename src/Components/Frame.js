import React, { useState } from 'react';
import Screen from './Screen';
import Bird from './../Wallpapers/birds/Bird1.jpeg';
import Egypt from './../Wallpapers/buildings/egypt.jpeg';
import PurpleFlowers from './../Wallpapers/flowers/PurpleFlowers.jpeg';
import WhiteFlowers from './../Wallpapers/flowers/Flower1.jpeg';
import Food from './../Wallpapers/food/food1.jpg';
import Galaxy from './../Wallpapers/nature/Galaxy.jpg';
import Beach from './../Wallpapers/water/Beach.jpg';
import {newAudio, play, pause, isPlaying,stop} from "./PlayerWorking";
import OnMyWay from './../AudioFiles/OnMyWay.mp3';
import Alone from './../AudioFiles/Alone.mp3';
import BlankSpace from './../AudioFiles/BlankSpace.mp3';

import OnMyWayThumbnail from './../AudioThumbnails/OnMyWay.jpg';
import AloneThumbnail from './../AudioThumbnails/Alone.jpg';
import BlankSpaceThumbnail from './../AudioThumbnails/BlankSpace.jpg';


function Frame() {
    
    const mainMenuItems = ["Cover Flow", "Music", "Videos", "Photos", "Extras", "Now Playing", "Games", "Settings"];
    const settingMenuItems = ["Set Wallpaper", "Brightness", "WiFi", "Bluetooth", "Privacy", "GPS"];
    //    *****************************************Msic Secction*********************************************
    const musicMenuItems = ["All Songs", "Artists", "Favourites"];
    const songsMenuItems = ["On My Way", "Oh Humsafar", "Ki Samjhaiye", "Sawan Aaya Hai", "Alone", "Dilbar", "Yaarian", "Blank Space"];
    const artistMenuItems = ["Alan Walker", "Taylor Swift", "Neha Kakkar", "Arijit Singh", "Amrinder Gill"]
    const alanWalkerMenuItems = ["On My Way", "Alone"];
    const taylorSwiftMenuItems = ["Blank Space", "Love Story"];
    const nehaKakkarMenuItems = ["Oh Humsafar", "Dilbar"];
    const arijitSinghMenuItems = ["Sawan Aaya Hai", "Sanam Re"];
    const amrinderGillMenuItems = ["Ki Samjhaiye", "Yaarian"];
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
        else if (!isFullScreen) {
            if (currentMenuItem === currentMenuItems.length - 1) {
                setCurrentMenuItem(0);
            } else {
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
        else if (!isFullScreen) {
            if (currentMenuItem === 0) {
                setCurrentMenuItem(currentMenuItems.length - 1);
            } else {
                setCurrentMenuItem(currentMenuItem - 1);
            }
        }
    }

    const onClickMenuButton = () => {
        if ((!isFullScreen || brightness || privacy) && !bluetooth && !wifi && !gps) {
            setCurrentMenu("mainMenu");
            setCurrentMenuItems(mainMenuItems);
            setCurrentMenuItem(0);
        }
        setIsFullScreen(false);
        setBrightness(false);
        setPrivacy(false);
        setIsMusic(false);
    }

    // console.log(isPlaying)
    const onClickPlayButton = () => {
        if(isMusic){
            if(isPlaying === "notStarted" || isNewSong){
                newAudio(songURL);
            }else{
                play();
            }
            setIsPaused(false);
            setIsNewSong(false);
        }
    }
console.log(isNewSong)
    const onClickPauseButton = () => { 
        if(isMusic){
            setIsPaused(true);
            pause();
        }
        setIsNewSong(false)
    }

    const onClickCenterButton = () => {
        if (!isFullScreen) {
            if (currentMenu === "mainMenu") {
                if (currentMenuItem === 0) {
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
                    setCurrentMenu("brightnessMenu");
                }
                else if (currentMenuItem === 2) {
                    setWIFI(true);
                    setIsFullScreen(false);
                    setCurrentMenu("wifiMenu");
                }
                else if (currentMenuItem === 3) {
                    setBluetooth(true);
                    setIsFullScreen(false);
                    setCurrentMenu("bluetoothMenu");
                }
                else if (currentMenuItem === 4) {
                    setPrivacy(true);
                    setIsFullScreen(false);
                    setCurrentMenu("privacyMenu");
                }
                else if (currentMenuItem === 5) {
                    setGPS(true);
                    setIsFullScreen(false);
                    setCurrentMenu("gpsMenu");
                }
            }

            else if (currentMenu === "gpsMenu") {
                setIsFullScreen(true);
                setGPS(false);
                setCurrentMenu("settingMenu");
                setCurrentMenuItems(settingMenuItems);
                // setCurrentMenuItem(0);
            }

            else if (currentMenu === "bluetoothMenu") {
                setIsFullScreen(true);
                setBluetooth(false);
                setCurrentMenu("settingMenu");
                setCurrentMenuItems(settingMenuItems);
                // setCurrentMenuItem(0);
            }

            else if (currentMenu === "wifiMenu") {
                setIsFullScreen(true);
                setWIFI(false);
                setCurrentMenu("settingMenu");
                setCurrentMenuItems(settingMenuItems);
                // setCurrentMenuItem(0);
            }

            else if (currentMenu === "privacyMenu") {
                setIsFullScreen(true);
                setPrivacy(false)
                setCurrentMenu("settingMenu");
                setCurrentMenuItems(settingMenuItems);
                // setCurrentMenuItem(0);
            }

            else if (currentMenu === "brightnessMenu") {
                setIsFullScreen(true);
                setBrightness(false);
                setCurrentMenu("settingMenu");
                setCurrentMenuItems(settingMenuItems);
                // setCurrentMenuItem(0);
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
                    setCurrentMenu("alanWalkerMenu");
                    setCurrentMenuItems(alanWalkerMenuItems);
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

            else if (currentMenu === "alanWalkerMenu") {
                if (currentMenuItem === 0) {
                    if(songName !== alanWalkerMenuItems[0]){
                        setIsNewSong(true);
                        stop();
                    }
                    setSongName(alanWalkerMenuItems[0]);
                    setSongURL(OnMyWay);
                    setSongThumbnail(OnMyWayThumbnail);
                }
                else if (currentMenuItem === 1) {
                    if(songName !== alanWalkerMenuItems[1]){
                        setIsNewSong(true);
                        stop();
                    }
                    setSongName(alanWalkerMenuItems[1]);
                    setSongURL(Alone);
                    setSongThumbnail(AloneThumbnail);
                    pause();
                }
                setIsMusic(true);
                setArtistName("Alan Walker");
            }

            else if (currentMenu === "taylorSwiftMenu") {
                if (currentMenuItem === 0) {
                    if(songName !== taylorSwiftMenuItems[0]){
                        setIsNewSong(true);
                        stop();
                    }
                    setSongName(taylorSwiftMenuItems[0]);
                    setSongURL(BlankSpace);
                    setSongThumbnail(BlankSpaceThumbnail);
                }
                // else if (currentMenuItem === 1) {
                //     if(songName !== taylorSwiftMenuItems[1]){
                //         setIsNewSong(true);
                //         stop();
                //     }
                //     setSongName(taylorSwiftMenuItems[1]);
                //     setSongURL(Alone);
                //     setSongThumbnail(AloneThumbnail);
                //     pause();
                // }
                setIsMusic(true);
                setArtistName("Taylor Swift");
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
    }


    return (

        <div className="frame">
            <Screen currentMenu={currentMenu} currentMenuItems={currentMenuItems} currentMenuItem={currentMenuItem} currentWallpaper={currentWallpaper} isFullScreen={isFullScreen} brightness={brightness} brightnessValue={brightnessValue} isWiFi={wifi} isWifiOn={isWifiOn} isBluetoothOn={isBluetoothOn} isBluetooth={bluetooth} isGPS = {gps} isGPSOn = {isGPSOn} privacy = {privacy} isMusic = {isMusic} isPaused = {isPaused} songName = {songName} artistName = {artistName} songThumbnail = {songThumbnail}></Screen>

            <div id="outer-wheel">
                <p id="menu-btn" onClick={onClickMenuButton}>MENU</p>
                <i className="fas fa-fast-forward" id="next-btn" onClick={onClickForwardButton}></i>
                <i className="fas fa-fast-backward" id="previous-btn" onClick={onClickBackwardButton}></i>
                <i className="fas fa-play" id="play-btn" onClick={onClickPlayButton}></i>
                <i className="fas fa-pause" id="pause-btn" onClick={onClickPauseButton}></i>
                <div id="center-button" onClick={onClickCenterButton}></div>
            </div>
        </div>
    )
}

export default Frame;
