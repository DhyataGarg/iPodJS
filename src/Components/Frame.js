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

    // This function will be called when we will click the forward button.
    const onClickForwardButton = () => {
        // If we are on brightness screen, then forward button will decrese the brightness value by 10, which in turn will increase the brightness.
        if (brightness) {
            setBrightnessValue(brightnessValue - 10);
        }
        // Else we will simply set the wheel direction and call changeCurrentMenuOption function to change the menu item.
        else {
            wheelMoveDirection = "down";
            changeCurrentMenuOption()
        }
        // If we are on music page and value of playNextSong is true, then this code block will execute.
        if (isMusic && playNextSong) {
            stop();
            onClickCentreButton();
        }
    }

    // This function will be called when we will click the backward button.
    const onClickBackwardButton = () => {
        // If we are on brightness screen, then forward button will increase the brightness value by 10, which in turn will decrease the brightness.
        if (brightness) {
            setBrightnessValue(brightnessValue + 10);
        }
        // Else we will simply set the wheel direction and call changeCurrentMenuOption function to change the menu item.
        else {
            wheelMoveDirection = "up";
            changeCurrentMenuOption()
        }
        // If we are on music page and value of playNextSong is true, then this code block will execute.
        if (isMusic && playNextSong) {
            stop();
            onClickCentreButton();
        }

    }

    // This function will be called when we will click the MENU button.
    const onClickMenuButton = () => {
        // If the followin conditions fulfill, then we have yo return to the main menu.
        if ((!isFullScreen || isPhotos) && !bluetooth && !wifi && !gps && !brightness && !privacy) {
            setCurrentMenu("mainMenu");
            setCurrentMenuItems(mainMenuItems);
            setCurrentMenuItem(0);
        }
        // Everytime we click on MENU button, we are setting these variables to false.
        setIsFullScreen(false);
        setBrightness(false);
        setPrivacy(false);
        setIsMusic(false);
        setIsVideo(false);
        setGames(false);
        setPhotos(false);
    }

    // This function will be called when we will click the Play-Pause button.
    const onClickPlayPauseButton = () => {
        // If we are on music page or on mainmenu, then the following if statement will execute.
        if (isMusic || currentMenu === "mainMenu") {
            // If our song is paused...
            if (isPaused) {
                // If we have to play a new song or we have not stared a song yet.
                if (isPlaying === "notStarted" || isNewSong) {
                    // We will call a fuction named newAudio, which we have imported from playerWorking.js.
                    newAudio(songURL);
                }
                // Else we will call the play function from PlayerWorking.js to play the current song. 
                else {
                    play();
                }
                // Here we are setting the value of isPaused variable to false.
                setIsPaused(false);
            }
            // If our song is not paused at that moment, then we will set the value of isPaused variable to true and call te pause function from playerWorking.js.
            else {
                setIsPaused(true);
                pause();
            }
            // Finally we will set isNewSong to false.
            setIsNewSong(false);
        }

        // If we are currently on videos page...
        else if (isVideo) {
            // if the video is paused...
            if (isPaused) {
                // If the video has not started...
                if (isPlaying === "notStarted") {
                    // We will call the newVideo function imported from playerWorking.js file.
                    newVideo(videoURL);
                }
                // If the video is paused...
                else {
                    // call play function imported from playerWorking.js file.
                    play();
                }
                // set isPaused variable to false.
                setIsPaused(false);
            }
            // If the current video is playing... 
            else {
                // set isPaused to true and call pause function imported from playerWorking.js.
                setIsPaused(true);
                pause();
            }
        }

        // If we are on wifi page, call the toggleSettings function to accordingly turn on or off the setting.
        else if (wifi) {
            toggleSettings(isWifiOn, setIsWifiOn);
        }
        // If we are on bluetooth page, call the toggleSettings function to accordingly turn on or off the setting.
        else if (bluetooth) {
            toggleSettings(isBluetoothOn, setIsBluetoothOn);
        }
        // If we are on gps page, call the toggleSettings function to accordingly turn on or off the setting.
        else if (gps) {
            toggleSettings(isGPSOn, setIsGPSOn);
        }
    }

    // This function will be called when we will click the centre button.
    const onClickCentreButton = () => {
        // This function will only execute if isFullScreen is false.
        if (!isFullScreen) {
            // Switch cases are used to reduce the complexity and the parameter to check cases id currentMenu.
            switch (currentMenu) {
                // Case 1: If the currentMenu is mainMenu.
                case "mainMenu":
                    // Here we have used nested switch case, this will be based on the currentMenuItem.
                    switch (currentMenuItem) {
                        // Nested Case 1: If currentMenuItem is 0, which is coverflow, then we have to show full screen, and for that we have to set isFullScreen variable to true.
                        case 0:
                            setIsFullScreen(true);
                            break;

                        // Nested Case 2: If currentMenuItem is 1, 2 or 6.    
                        case 1:
                        case 2:
                        case 6:
                            // We have to change the current menu and for that, we have to call the change menu functions.
                            changeMenu(changeMenuDetails[currentMenuItem][0], changeMenuDetails[currentMenuItem][1]);
                            break;
                        // Nested Case 3: If currentMenuItem is 3.    
                        case 3:
                            // Firstly change the current menu to photosMenu.
                            changeMenu("photosMenu", photosMenuItems);
                            // Now call the openDeviceSettings function.
                            openDeviceSettings(setPhotos, "photosMenu");
                            // Now we have set the value of isScreen to true to show wallpaper in background.
                            setIsFullScreen(true);
                            break;

                        // Nested Case 4: If currentMenuItem is 4.
                        case 4:
                            // If we have not started a song yet, then it will display a default song in nowplaying section.
                            if (isPlaying === "notStarted") {
                                setCurrentSongDetails(songsMenuItems, 0, songMenuItemDetails[0]);
                            }
                            // Here we are changing the current menu by calling the changeMenu function.
                            changeMenu("songsMenu", songsMenuItems)
                            // To display the music page, we set the isMusic variable to true.
                            setIsMusic(true);
                            break;

                        // Nested Case 5: If currentMenuItem is 5.
                        case 5:
                            // Here we called the openDeviceSettings function to set games page.
                            openDeviceSettings(setGames, "gamesMenu")
                            break;
                        default:
                            break;
                    };
                    break;

                // Case 2: If the currentMenu is videosMenu.
                case "videosMenu":
                    // Here we have called the setCurrentVideoDetails function, in which we have passed the arguement, that is the currentMenuItem index of videosToApply array.
                    setCurrentVideoDetails(videosToApply[currentMenuItem])
                    break;

                // Case 3: If the currentMenu is settingsMenu.   
                case "settingMenu":
                    // If current setting is to set wallpaper, then we have to change the menu to wallpaperMenu.
                    if (currentMenuItem === 0) {
                        changeMenu("wallpaperMenu", wallpaperMenuItems);
                    }
                    // else we have to open the settings page for the given setting. 
                    else {
                        openDeviceSettings(settingsToApply[currentMenuItem][0], settingsToApply[currentMenuItem][1])
                    }
                    break;

                // Case 4: If the currentMenu is wifiMenu, gpsMenu, bluetoothMenu, privacyMenu, brightnessMenu.
                case "wifiMenu":
                case "gpsMenu":
                case "bluetoothMenu":
                case "privacyMenu":
                case "brightnessMenu":
                    // Here we have to move to settings menu and close the settings page so we have to call setDeviceSettings function.
                    setDeviceSettings(settingsToApply[currentMenuItem][0]);
                    // Here we have called the onClickMenuButton function, which will lead us to settings menu.
                    onClickMenuButton();
                    break;

                // Case 5: If the currentMenu is musicMenu, then we have to change the menu by the selected menu item.   
                case "musicMenu":
                    changeMenu(changeMusicMenuItems[currentMenuItem][0], changeMusicMenuItems[currentMenuItem][1])
                    break;

                // Case 6: If the currentMenu is artistMenu, then we have to change the menu by the selected menu item.   
                case "artistMenu":
                    changeMenu(changeArtistMneuItems[currentMenuItem][0], changeArtistMneuItems[currentMenuItem][1]);
                    break;

                // Case 7: If the currentMenu is songsMenu, then we have to play the selected song and for that we have setCurrentSongDetails function.   
                case "songsMenu":
                    setCurrentSongDetails(songsMenuItems, currentMenuItem, songMenuItemDetails[currentMenuItem]);
                    break;

                // Case 8: If the currentMenu is alanWalkerMenu, then we have to play the selected song and for that we have setCurrentSongDetails function.   
                case "alanWalkerMenu":
                    setCurrentSongDetails(alanWalkerMenuItems, currentMenuItem, alanWalkerMenuItemDetails[currentMenuItem]);
                    break;

                // Case 9: If the currentMenu is taylorSwiftMenu, then we have to play the selected song and for that we have setCurrentSongDetails function.   
                case "taylorSwiftMenu":
                    setCurrentSongDetails(taylorSwiftMenuItems, 0, taylorSwiftMenuItemsDetails[currentMenuItem]);
                    break;

                // Case 10: If currentMenu is wallpaperMenu, then we have to apply the selected wallpaper and for that we have to call setSelectedWallpaper function.
                case "wallpaperMenu":
                    setSelectedWallpaper(wallpapersToApply[currentMenuItem])
                    break;
                default:
                    break;
            }
        }
    }

    // This function is to toggle the wifi, bluetooth and gps settings accordingly.
    // This function is asking for 2 parameters, one is the hook variable, by which we will detect that whether the setting is currently on or off and 2nd is the hook function to change that variable. 
    const toggleSettings = (setting, setSetting) => {
        // If setting is true, change it to false.
        if (setting) {
            setSetting(false);
        }
        // Else change it to true.
        else { setSetting(true) }
    }

    // Here we are declaring setCurrentVideoDetails function, which will handle the current video details.
    const setCurrentVideoDetails = (currentVideoURL) => {
        // Firstly it will stop the currenty playing media.
        stop();
        // set isVideo to true so that Screen shows the video page. 
        setIsVideo(true);
        // This will show the pause icon on screen, when video will not started.
        setIsPaused(true);
        // This variable will contain the video, which we will pass to playerWorking.js file.
        setVideoURL(currentVideoURL);
    }

    // Here we are declaring setCurrentSongDetails function, which will handle the current song details.
    const setCurrentSongDetails = (menuItems, menuItemsIndex, songDetails) => {
        // This if statement will exucute if the song we have selected is not the one playing in background.
        if (songName !== menuItems[menuItemsIndex]) {
            // Now as we have opened a new song, so we have to set isNewSong to true.
            setIsNewSong(true);
            // This will stop the previously playing song.
            stop();
            // This will show the pause icon on screen till the song will not pe played by clicking the play-pause button.
            setIsPaused(true);
        }
        // Here we are defining the values of hooks variables, that contains the current song details.
        setSongName(menuItems[menuItemsIndex]);
        setSongURL(songDetails[0]);
        setSongThumbnail(songDetails[1]);
        setIsMusic(true);
        setArtistName(songDetails[2]);
    }

    // Here we are declaring setSelectedWallpaper function, which will handle the current wallpaper details.
    const setSelectedWallpaper = (wallpaperName) => {
        // This will change the hooks variable name, that contains the current wallpaper, imported earlier.
        setCurrentWallpaper(wallpaperName);
        // As we have to apply the wallpaper and show it on full screen, so we set isFullScreen to true.
        setIsFullScreen(true);
    }

    // Here we are declaring changeMenu function, which will handle the current menu details.
    const changeMenu = (menu, menuItems) => {
        // Here we are changing the current menu to be displayed on main screen.
        setCurrentMenu(menu);
        // Here we are changing the current menu Items to be displayed on main screen.
        setCurrentMenuItems(menuItems);
        // We have by default selected the 1st item.
        setCurrentMenuItem(0);
    }

    // Here we are declaring openDeviceSettings function, which will handle the current settings details.
    const openDeviceSettings = (settingName, menu) => {
        // we are having an arguement as settingname, we are setting that hook variable to true.
        settingName(true);
        // Here we are setting the current menu to the one we have in our 2nd arguement.
        setCurrentMenu(menu);
    }

    // Here we are declaring setDeviceSettings function, which will handle the current settings details.
    const setDeviceSettings = (settings) => {
        // We set the settings variable to false and set current menu to be settigns menu.
        settings(false);
        setCurrentMenu("settingMenu");
        setCurrentMenuItems(settingMenuItems);
    }


    return (
        <div className="frame">
            {/* ---------------Screen Section --------------------------------------------- */}
            {/* we are passing various props to Screen as according to their current state it will display the required features on screen. */}
            <Screen currentMenu={currentMenu} currentMenuItems={currentMenuItems} currentMenuItem={currentMenuItem} currentWallpaper={currentWallpaper} isFullScreen={isFullScreen} brightness={brightness} brightnessValue={brightnessValue} isWiFi={wifi} isWifiOn={isWifiOn} isBluetoothOn={isBluetoothOn} isBluetooth={bluetooth} isGPS={gps} isGPSOn={isGPSOn} privacy={privacy} isMusic={isMusic} isVideo={isVideo} isPaused={isPaused} songName={songName} artistName={artistName} songThumbnail={songThumbnail} games={games} photos={isPhotos}></Screen>

            {/* -----------------------------Wheel Section ----------------------------------------- */}
            <div id="outer-wheel" onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp}>
                <p id="menu-btn" onClick={onClickMenuButton}>MENU</p>
                <i className="fas fa-fast-forward" id="next-btn" onClick={onClickForwardButton} onMouseDown={(isMusic || isVideo) ? setProgressForward : null} onMouseUp={(isMusic || isVideo) ? stopProgressForward : null}></i>
                <i className="fas fa-fast-backward" id="previous-btn" onClick={onClickBackwardButton} onMouseDown={(isMusic || isVideo) ? setProgressBackward : null} onMouseUp={(isMusic || isVideo) ? stopProgressBackward : null}></i>
                <span id="play-pause-btn" onClick={onClickPlayPauseButton}>
                    <i className="fas fa-play" id="play-btn"></i>
                    <i className="fas fa-pause" id="pause-btn"></i>
                </span>
                <div id="centre-button" onClick={onClickCentreButton}></div>
            </div>
        </div>
    )
}

export default Frame;
