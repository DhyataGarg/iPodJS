import React, { useState } from 'react';
import Screen from './Screen';
import { newVideo, newAudio, play, pause, isPlaying, stop, setProgressForward, stopProgressForward, playNextSong, setProgressBackward, stopProgressBackward } from "./PlayerWorking";

import City from './../assets/Wallpapers/City.jpg';
import Bird from './../assets/Wallpapers/Bird.jpeg';
import Flowers from './../assets/Wallpapers/Flower.jpeg';
import Food from './../assets/Wallpapers/Food.jpg';
import Beach from './../assets/Wallpapers/Beach.jpg';
import Mountain from './../assets/Wallpapers/Mountain.jpg';
import Valley from './../assets/Wallpapers/Valley.jpg';
import OnMyWay from './../assets/AudioFiles/OnMyWay.mp3';
import Alone from './../assets/AudioFiles/Alone.mp3';
import BlankSpace from './../assets/AudioFiles/BlankSpace.mp3';
import LoveStory from './../assets/AudioFiles/LoveStory.mp3';
import OnMyWayThumbnail from './../assets/AudioThumbnails/OnMyWay.jpg';
import AloneThumbnail from './../assets/AudioThumbnails/Alone.jpg';
import BlankSpaceThumbnail from './../assets/AudioThumbnails/BlankSpace.jpg';
import LoveStoryThumbnail from './../assets/AudioThumbnails/LoveStory.jpg';
import Ocean from "./../assets/VideoFiles/oceans.mp4";
import WayanadGhats from './../assets/VideoFiles/WayanadGhats.mp4';
import London from './../assets/Photos/London.jpg';
import Party from './../assets/Photos/Party.jpg';
import Roads from './../assets/Photos/Roads.jpg';
import Sunset from './../assets/Photos/Sunset.jpg';
import Family from './../assets/Photos/Family.jpg';
import Travel from './../assets/Photos/Travel.jpg';

function Frame() {
    const videosToApply = [Ocean, WayanadGhats]
    const mainMenuItems = ["Cover Flow", "Music", "Videos", "Photos", "Now Playing", "Games", "Settings"];
    const settingMenuItems = ["Set Wallpaper", "Brightness", "WiFi", "Bluetooth", "Privacy", "GPS"];
    const photosMenuItems = [London, Party, Roads, Sunset, Family, Travel]
    //    *****************************************Msic Secction*********************************************
    const musicMenuItems = ["All Songs", "Artists"];
    const videosMenuItems = ["Ocean", "Wayand Ghats"];
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

    const [isVideo, setIsVideo] = useState(false);
    const [videoURL, setVideoURL] = useState("")

    // *************************************WallPapers Section*************************************************
    const wallpaperMenuItems = ["Birds", "Flowers", "City", "Food", "Beach", "Valley", "Mountains"];
    const wallpapersToApply = [Bird, Flowers, City, Food, Beach, Valley, Mountain];
    const [currentWallpaper, setCurrentWallpaper] = useState(Bird);
    const [brightness, setBrightness] = useState(false);
    const [brightnessValue, setBrightnessValue] = useState(20);

    const [wifi, setWIFI] = useState(false);
    const [isWifiOn, setIsWifiOn] = useState(true);

    const [bluetooth, setBluetooth] = useState(false);
    const [isBluetoothOn, setIsBluetoothOn] = useState(false);
    const alanWalkerMenuItemDetails = [[OnMyWay, OnMyWayThumbnail, "Alan Walker"], [Alone, AloneThumbnail, "Alan Walker"]]

    const [gps, setGPS] = useState(false);
    const [isGPSOn, setIsGPSOn] = useState(false);
    const songMenuItemDetails = [[OnMyWay, OnMyWayThumbnail, "Alan Walker"], [LoveStory, LoveStoryThumbnail, "Taylor Swift"], [Alone, AloneThumbnail, "Alan Walker"], [BlankSpace, BlankSpaceThumbnail, "Taylor Swift"]]
    const taylorSwiftMenuItemsDetails = [[BlankSpace, BlankSpaceThumbnail, "Taylor Swift"], [LoveStory, LoveStoryThumbnail, "Taylor Swift"]]

    const [privacy, setPrivacy] = useState(false);
    const changeMenuDetails = [[], ["musicMenu", musicMenuItems], ["videosMenu", videosMenuItems], [], [], [], ["settingMenu", settingMenuItems]]
    const changeMusicMenuItems = [["songsMenu", songsMenuItems], ["artistMenu", artistMenuItems]]
    const changeArtistMneuItems = [["alanWalkerMenu", alanWalkerMenuItems], ["taylorSwiftMenu", taylorSwiftMenuItems]]

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [games, setGames] = useState(false);
    const [isPhotos, setPhotos] = useState(false);
    const settingsToApply = [[], [setBrightness, "brightnessMenu"], [setWIFI, "wifiMenu"], [setBluetooth, "bluetoothMenu"], [setPrivacy, "privacyMenu"], [setGPS, "gpsMenu"]]
    // These 2 variables are for tracking the direction of mouse move on our wheel, if the user is moving upwards or downwards
    const [isMoving, setMoving] = useState(false);
    var wheelMoveDirection;
    var clientY;

    // ------------------------- Handling of Mouse Events and Changing Direction Section -------------------//

    // This is the mousedown event.
    // Basically when the use press on the mouse button and move the mouse on the wheel while holding the mouse we should change the options
    function mouseDown(e) {
        // Here we changing isMoving from false to true, and depicting that now we are moving the mouse over the wheel
        setMoving(true);
    }
    function mouseMove(e) {
        // This event works only when it see that user has a hold on mouse click button
        if (isMoving && !isPhotos) {
            // If user is starting to move the mouse its initial position would be captured for the first time
            if (clientY === undefined) {
                clientY = e.clientY;
            }
            // Now after that after a regular interval of 13px of movement we changes the selected option
            // And now if the Y-Coordinate is increasing, then we are going downwards
            if (e.clientY - clientY > 13) {
                wheelMoveDirection = "down";
                clientY = e.clientY;
                changeCurrentMenuOption();
                // If Y-Coordinate is decreasing then mouse is moving up
            } else if (clientY - e.clientY > 13) {
                wheelMoveDirection = "up";
                clientY = e.clientY;
                changeCurrentMenuOption();
            }
        }
    }
    // Now this event is handling when the user leaves the click, and now isMoving should become false as now user have stopped changing the options
    function mouseUp(e) {
        // Here we change isMoving to false and also changes Y-Coordinate to undefined so that next time when we start moving again it would be initialized from the position from where user has started this time
        setMoving(false);
        clientY = undefined;
    }


    const changeCurrentMenuOption = () => {
        if (wheelMoveDirection === "down") {
            if (currentMenuItem === currentMenuItems.length - 1) {
                setCurrentMenuItem(0);
            } else {
                setCurrentMenuItem(currentMenuItem + 1);
            }
        } else {
            if (currentMenuItem === 0) {
                setCurrentMenuItem(currentMenuItems.length - 1);
            } else {
                setCurrentMenuItem(currentMenuItem - 1);
            }
        }
    }

    const onClickForwardButton = () => {
        if (brightness) {
            setBrightnessValue(brightnessValue - 10);
        }

        else if (!isFullScreen && !isMusic) {
            wheelMoveDirection = "down";
            changeCurrentMenuOption();
        }
        else if (isMusic && playNextSong) {
            stop();
            if (currentMenuItem === currentMenuItems.length - 1) {
                setCurrentMenuItem(0);
            }
            else {
                setCurrentMenuItem(currentMenuItem + 1);
            }
            onClickCenterButton();
        }
    }

    const onClickBackwardButton = () => {
        if (brightness) {
            setBrightnessValue(brightnessValue + 10);
        }
        else if (!isFullScreen && !isMusic) {
            wheelMoveDirection = "up";
            changeCurrentMenuOption();
        }
        if (isMusic && playNextSong) {
            setIsPaused(true)
            stop();
            if (currentMenuItem === 0) {
                setCurrentMenuItem(currentMenuItems.length - 1);
            } else {
                setCurrentMenuItem(currentMenuItem - 1);
            }
            onClickCenterButton();

        }
    }

    const onClickMenuButton = () => {
        if ((!isFullScreen || isPhotos) && !bluetooth && !wifi && !gps && !brightness && !privacy) {
            setCurrentMenu("mainMenu");
            setCurrentMenuItems(mainMenuItems);
            setCurrentMenuItem(0);
        }
        setIsFullScreen(false);
        setBrightness(false);
        setPrivacy(false);
        setIsMusic(false);
        setIsVideo(false);
        setGames(false)
        setPhotos(false)
    }

    const onClickPlayPauseButton = () => {
        if (isMusic || currentMenu === "mainMenu") {
            if (isPaused) {
                if (isPlaying === "notStarted" || isNewSong) {
                    newAudio(songURL);
                } else {
                    play();
                }
                setIsPaused(false);
            } else {
                setIsPaused(true);
                pause();
            }

            setIsNewSong(false);
        }

        else if (isVideo) {
            if (isPaused) {
                if (isPlaying === "notStarted") {
                    newVideo(videoURL);
                } else {
                    play();
                }
                setIsPaused(false);
            } else {
                setIsPaused(true);
                pause();
            }

        }

        else if (wifi) {
            if (isWifiOn) {
                setIsWifiOn(false)
            } else { setIsWifiOn(true) }
        }
        else if (bluetooth) {
            if (isBluetoothOn) {
                setIsBluetoothOn(false)
            } else { setIsBluetoothOn(true) }
        }
        else if (gps) {
            if (isGPSOn) {
                setIsGPSOn(false)
            } else { setIsGPSOn(true) }
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
                        case 2:
                        case 6:
                            changeMenu(changeMenuDetails[currentMenuItem][0], changeMenuDetails[currentMenuItem][1]);
                            break;

                        case 3:
                            changeMenu("photosMenu", photosMenuItems);
                            openDeviceSettings(setPhotos, "photosMenu");
                            setIsFullScreen(true);
                            break;

                        case 4:
                            if (isPlaying === "notStarted") {
                                setCurrentSongDetails(songsMenuItems, 0, OnMyWay, OnMyWayThumbnail, "Alan Walker");
                            }
                            changeMenu("songsMenu", songsMenuItems)
                            setIsMusic(true);
                            break;

                        case 5:
                            openDeviceSettings(setGames, "gamesMenu")
                            break;
                        default:
                            break;
                    };
                    break;

                case "videosMenu":
                    setCurrentVideoDetails(videosToApply[currentMenuItem])
                    break;

                case "settingMenu":
                    if (currentMenuItem === 0) {
                        changeMenu("wallpaperMenu", wallpaperMenuItems);
                    }
                    else {
                        openDeviceSettings(settingsToApply[currentMenuItem][0], settingsToApply[currentMenuItem][1])
                    }
                    break;

                case "gpsMenu":
                case "bluetoothMenu":
                case "wifiMenu":
                case "privacyMenu":
                case "brightnessMenu":
                    setDeviceSettings(settingsToApply[currentMenuItem][0]);
                    onClickMenuButton();
                    break;

                case "musicMenu":
                    changeMenu(changeMusicMenuItems[currentMenuItem][0], changeMusicMenuItems[currentMenuItem][1])
                    break;
                case "songsMenu":
                    setCurrentSongDetails(songsMenuItems, currentMenuItem, songMenuItemDetails[currentMenuItem]);
                    break;

                case "artistMenu":
                    changeMenu(changeArtistMneuItems[currentMenuItem][0], changeArtistMneuItems[currentMenuItem][1]);
                    break;
                case "alanWalkerMenu":
                    setCurrentSongDetails(alanWalkerMenuItems, currentMenuItem, alanWalkerMenuItemDetails[currentMenuItem]);
                    break;
                case "taylorSwiftMenu":
                    setCurrentSongDetails(taylorSwiftMenuItems, 0, taylorSwiftMenuItemsDetails)
                    break;
                case "wallpaperMenu":
                    setSelectedWallpaper(wallpapersToApply[currentMenuItem])
                    break;
                default:
                    break;
            }
        }
    }

    const setCurrentVideoDetails = (currentVideoURL) => {
        // setIsNewSong(true);
        stop();
        setIsMusic(false);
        setIsVideo(true);
        setIsPaused(true);
        setVideoURL(currentVideoURL);
    }

    const setCurrentSongDetails = (menuItems, menuItemsIndex, songDetails) => {
        if (songName !== menuItems[menuItemsIndex]) {
            setIsNewSong(true);
            stop();
            setIsPaused(true);
        }
        setSongName(menuItems[menuItemsIndex]);
        setSongURL(songDetails[0]);
        setSongThumbnail(songDetails[1]);
        setIsMusic(true);
        setArtistName(songDetails[2]);
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
        console.log(isPhotos);
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
            <Screen currentMenu={currentMenu} currentMenuItems={currentMenuItems} currentMenuItem={currentMenuItem} currentWallpaper={currentWallpaper} isFullScreen={isFullScreen} brightness={brightness} brightnessValue={brightnessValue} isWiFi={wifi} isWifiOn={isWifiOn} isBluetoothOn={isBluetoothOn} isBluetooth={bluetooth} isGPS={gps} isGPSOn={isGPSOn} privacy={privacy} isMusic={isMusic} isVideo={isVideo} isPaused={isPaused} songName={songName} artistName={artistName} songThumbnail={songThumbnail} games={games} photos={isPhotos}></Screen>

            <div id="outer-wheel" onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp}>
                <p id="menu-btn" onClick={onClickMenuButton}>MENU</p>
                <i className="fas fa-fast-forward" id="next-btn" onClick={onClickForwardButton} onMouseDown={(isMusic || isVideo) && setProgressForward} onMouseUp={(isMusic || isVideo) && stopProgressForward}></i>
                <i className="fas fa-fast-backward" id="previous-btn" onClick={onClickBackwardButton} onMouseDown={(isMusic || isVideo) && setProgressBackward} onMouseUp={(isMusic || isVideo) && stopProgressBackward}></i>
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
