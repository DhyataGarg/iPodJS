//  In the terminal, write "npm i". This will install all the "node_modules" listed in "package.json" file, that are necessary for this projet.
import React, { useState } from 'react';

// *********************************************Importing screen component********************************************
import Screen from './Screen';

//**********************Importing some function from and variables from playerWoring.js file.************************
import { newVideo, newAudio, play, pause, isPlaying, stop, setProgressForward, stopProgressForward, playNextSong, setProgressBackward, stopProgressBackward } from "./PlayerWorking";

// *********************************************Import all wallpapers********************************************
import City from './../assets/Wallpapers/City.jpg';
import Bird from './../assets/Wallpapers/Bird.jpeg';
import Flowers from './../assets/Wallpapers/Flower.jpeg';
import Food from './../assets/Wallpapers/Food.jpg';
import Beach from './../assets/Wallpapers/Beach.jpg';
import Mountain from './../assets/Wallpapers/Mountain.jpg';
import Valley from './../assets/Wallpapers/Valley.jpg';

// ***********************************************Import all songs********************************************
import OnMyWay from './../assets/AudioFiles/OnMyWay.mp3';
import Alone from './../assets/AudioFiles/Alone.mp3';
import BlankSpace from './../assets/AudioFiles/BlankSpace.mp3';
import LoveStory from './../assets/AudioFiles/LoveStory.mp3';

// ****************************************Import all song thumbnails********************************************
import OnMyWayThumbnail from './../assets/AudioThumbnails/OnMyWay.jpg';
import AloneThumbnail from './../assets/AudioThumbnails/Alone.jpg';
import BlankSpaceThumbnail from './../assets/AudioThumbnails/BlankSpace.jpg';
import LoveStoryThumbnail from './../assets/AudioThumbnails/LoveStory.jpg';

// *********************************************Import all videos********************************************
import Ocean from "./../assets/VideoFiles/oceans.mp4";
import WayanadGhats from './../assets/VideoFiles/WayanadGhats.mp4';

// *********************************************Import all photos********************************************
import London from './../assets/Photos/London.jpg';
import Party from './../assets/Photos/Party.jpg';
import Roads from './../assets/Photos/Roads.jpg';
import Sunset from './../assets/Photos/Sunset.jpg';
import Family from './../assets/Photos/Family.jpg';
import Travel from './../assets/Photos/Travel.jpg';

// This is the main Frame of our iPod which contains mainly 2 items : The Wheel and The Screen
function Frame() {
    //*****************************************Declaring some globel hooks and variables**********************

    //*****************************************Main Menu Secction ********************************************
    //This is an array of all the items of main menu, which we will pass on to Screen component as props to display on screen.
    const mainMenuItems = ["Cover Flow", "Music", "Videos", "Photos", "Now Playing", "Games", "Settings"];
    //This variale created by useState hook stores the current menu to be displayed on main screen and it's default value is mainMenu.
    const [currentMenu, setCurrentMenu] = useState("mainMenu");
    //This variable stores the reference of the array, which contains the current menu items to be displayed and it's default value is mainMenuItems.
    const [currentMenuItems, setCurrentMenuItems] = useState(mainMenuItems);
    //This variable indicated the index of the currently selcted item in the menu and it's default value is 0.
    const [currentMenuItem, setCurrentMenuItem] = useState(0);
    //This variable stores a boolean value, which we have used to handle wheathr to show the full wallpaper screen or not.
    const [isFullScreen, setIsFullScreen] = useState(false);
    //This variable stores a boolean value, which we have used to handle wheathr to show the games screen or not.
    const [games, setGames] = useState(false);

    // ********************************************Msic Secction*********************************************
    // These arrays contain their respective items to be displayed on screen.
    const musicMenuItems = ["All Songs", "Artists"];
    const songsMenuItems = ["On My Way", "Love Story", "Alone", "Blank Space"];
    const artistMenuItems = ["Alan Walker", "Taylor Swift"]
    const alanWalkerMenuItems = ["On My Way", "Alone"];
    const taylorSwiftMenuItems = ["Blank Space", "Love Story"];

    // This variable is used to state whether we have to show the music screen or not.
    const [isMusic, setIsMusic] = useState(false);
    // This variable will state that to show the play or pause icon on screen according to the play-pause state of the song.
    const [isPaused, setIsPaused] = useState(true);
    // This variable tells that we have to play a new song or continue with the current playing song.
    const [isNewSong, setIsNewSong] = useState(false);
    // These variables store the details of the playing song.
    const [songName, setSongName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [songURL, setSongURL] = useState("");
    const [songThumbnail, setSongThumbnail] = useState("");

    // These arrays contains the parameters to be passed to changeMenu function.
    const changeMusicMenuItems = [["songsMenu", songsMenuItems], ["artistMenu", artistMenuItems]];
    const changeArtistMneuItems = [["alanWalkerMenu", alanWalkerMenuItems], ["taylorSwiftMenu", taylorSwiftMenuItems]];

    // These arrays contains the parameters to be passed to setCurrentSongDetails function.
    const songMenuItemDetails = [[OnMyWay, OnMyWayThumbnail, "Alan Walker"], [LoveStory, LoveStoryThumbnail, "Taylor Swift"], [Alone, AloneThumbnail, "Alan Walker"], [BlankSpace, BlankSpaceThumbnail, "Taylor Swift"]];
    const alanWalkerMenuItemDetails = [[OnMyWay, OnMyWayThumbnail, "Alan Walker"], [Alone, AloneThumbnail, "Alan Walker"]];
    const taylorSwiftMenuItemsDetails = [[BlankSpace, BlankSpaceThumbnail, "Taylor Swift"], [LoveStory, LoveStoryThumbnail, "Taylor Swift"]];

    // **************************************** Videos Section ***************************************************
    // This array contains the videos menu list items to be displayed on main screen.
    const videosMenuItems = ["Ocean", "Wayand Ghats"];
    // This array stores the videos that we have imported earlier.
    const videosToApply = [Ocean, WayanadGhats]
    // This variable defines that we have to show the videos screen on main screen or not.
    const [isVideo, setIsVideo] = useState(false);
    // This variable stores the current video, that we will pass to newVideo function defined in playerWorking.js file.
    const [videoURL, setVideoURL] = useState("");

    //*****************************************Settings Section***************************************************
    // This array contains the settings menu list items to be displayed on main screen.
    const settingMenuItems = ["Set Wallpaper", "Brightness", "WiFi", "Bluetooth", "Privacy", "GPS"];

    // This variable tells whether we have to display the brightness screen or not.
    const [brightness, setBrightness] = useState(false);
    // This variable stores the brightness value, which we will pass to Sreen as props, according to which the brightness and range will change.
    const [brightnessValue, setBrightnessValue] = useState(20);

    // This variable tells whether we have to display the brightness screen or not.
    const [wifi, setWIFI] = useState(false);
    // This variable is for switching the on-off value of Wifi.
    const [isWifiOn, setIsWifiOn] = useState(true);

    // This variable tells whether we have to display the bluetooth screen or not.
    const [bluetooth, setBluetooth] = useState(false);
    // This variable is for switching the on-off value of bluetooth.  
    const [isBluetoothOn, setIsBluetoothOn] = useState(false);

    // This variable tells whether we have to display the GPS screen or not.
    const [gps, setGPS] = useState(false);
    // This variable is for switching the on-off value of GPS.
    const [isGPSOn, setIsGPSOn] = useState(false);

    // This variable tells whether we have to display the privacy screen or not.
    const [privacy, setPrivacy] = useState(false);

    // This array contains the parameters to be passed to openDeviceSettings function.
    const settingsToApply = [[], [setBrightness, "brightnessMenu"], [setWIFI, "wifiMenu"], [setBluetooth, "bluetoothMenu"], [setPrivacy, "privacyMenu"], [setGPS, "gpsMenu"]]

    //***************************************** Photos Section*************************************************
    // This array contains all the photos to be displayed.
    const photosMenuItems = [London, Party, Roads, Sunset, Family, Travel];
    // This variable stores a boolean value, which tells that we have to display the photos screen or not.
    const [isPhotos, setPhotos] = useState(false);

    // *************************************WallPapers Section*************************************************
    // This array contains the wallpaper menu list items to be displayed on main screen.
    const wallpaperMenuItems = ["Birds", "Flowers", "City", "Food", "Beach", "Valley", "Mountains"];
    // This array stores the wallpapers that we have imported earlier.
    const wallpapersToApply = [Bird, Flowers, City, Food, Beach, Valley, Mountain];
    // This variable stores the current wallpaper, that we will pass to Sreen component.
    const [currentWallpaper, setCurrentWallpaper] = useState(Bird);


    // This array contains the parameters to be passed to changeMenu function.
    const changeMenuDetails = [[], ["musicMenu", musicMenuItems], ["videosMenu", videosMenuItems], [], [], [], ["settingMenu", settingMenuItems]]

    // This variable will keep a track that our mouse is moving over the wheel or not.
    const [isMoving, setMoving] = useState(false);
    // These 2 variables are for tracking the direction of mouse move on our wheel, if the user is moving upwards or downwards
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
        if (isMoving) {
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
    // This function is for changing the current menu options and is called only when the mouse moves over wheel.
    const changeCurrentMenuOption = () => {
        // This if block will only execute when the wheelMoveDirection is down and it will change the menu items in downward direction.
        if (wheelMoveDirection === "down") {
            // This if statement will only execute if we are on the last option of the current menu.
            if (currentMenuItem === currentMenuItems.length - 1) {
                //By this we can set the current menu item index to 0.
                setCurrentMenuItem(0);
            } else {
                //This will simply increase the current menu item index by 1.
                setCurrentMenuItem(currentMenuItem + 1);
            }
        }
        // This if block will only execute when the wheelMoveDirection is not down, that means it is up and it will change the menu items in upward direction.
        else {
            // This if statement will only execute if we are on the first option of the current menu.
            if (currentMenuItem === 0) {
                //By this we can set the current menu item index to last.
                setCurrentMenuItem(currentMenuItems.length - 1);
            } else {
                //This will simply decrease the current menu item index by 1.
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
                                setCurrentSongDetails(songsMenuItems, 0, songMenuItemDetails[0]);
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

                case "wifiMenu":
                case "gpsMenu":
                case "bluetoothMenu":
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
                    setCurrentSongDetails(taylorSwiftMenuItems, 0, taylorSwiftMenuItemsDetails[currentMenuItem]);
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
                <i className="fas fa-fast-forward" id="next-btn" onClick={onClickForwardButton} onMouseDown={(isMusic || isVideo) ? setProgressForward : null} onMouseUp={(isMusic || isVideo) ? stopProgressForward : null}></i>
                <i className="fas fa-fast-backward" id="previous-btn" onClick={onClickBackwardButton} onMouseDown={(isMusic || isVideo) ? setProgressBackward : null} onMouseUp={(isMusic || isVideo) ? stopProgressBackward : null}></i>
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
