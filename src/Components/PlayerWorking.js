//  In the terminal, write "npm i". This will install all the "node_modules" listed in "package.json" file, that are necessary for this projet.

// Declaring all the GLobals
var media, duration, interval, currentTimeAccurate, playNextSong = true;

var isPlaying = 'notStarted';

// Function for creating New Instance of the Audio Object
function newAudio(url) {
    media = new Audio(url);

    // Getting the Duration of the Song
    media.addEventListener('canplay', function (e) {
        duration = Math.round(media.duration);
        try { document.getElementById("progress-bar").style.width = `${0}%`; }
        catch (err) { }
    });
    // Callback to Play Function
    play();
}

// Function for playing video.
function newVideo(url) {
    media = document.getElementById("video");
    media.setAttribute("src", url)

    // Getting the Duration of the Video.
    media.addEventListener('canplay', function (e) {
        duration = Math.round(media.duration);
        try { document.getElementById("progress-bar").style.width = `${0}%`; }
        catch (err) { }
    });
    // Callback to Play Function
    play();
}


// Play Function
function play() {
    isPlaying = 'playing';
    // Playing the media object created above
    media.play();
    // Getting the current duration of media and getting it displayed after each second
    // Also here we are moving the progress bar also
    interval = setInterval(function () {
        if (isPlaying !== "notStarted") {
            currentTimeAccurate = media.currentTime;
            // console.log("actual " + currentTimeAccurate)
            try { document.getElementById("progress-bar").style.width = `${(currentTimeAccurate / duration) * 100}%`; }
            catch (err) { }
        }
        if (media.currentTime === media.duration) {
            clearInterval(interval);
        }
    }, 100);
}

// Pause Function
function pause() {
    isPlaying = 'paused';
    clearInterval(interval)
    media.pause();
}

// Stop Function
function stop() {
    // Now our work is to pause the media and then set the Current Time of the media to 00:00 second. This task would act like that we have stopped the current media.
    if (isPlaying !== "notStarted") {
        clearInterval(interval)
        try {
            media.pause();
            media.currentTime = 0;
        } catch (err) { }
    }

    isPlaying = 'notStarted';
}

//--------------------------- Functions for setting progress of song on click --------------------

// On clicking the forward button, we have to fast forward the song by 30 seconds.
function setProgressForward() {
    isPlaying = "paused"
    // Firstly we will set idNextSong to true.
    playNextSong = true
    // If we hold the forward button for 1 sec, then this function will execute and it will increase the current time of mediany 30 sec else it will play the next song.
    setTimeout(function () {
        try {
            currentTimeAccurate += 30.0;
            media.currentTime += 30.0;
            document.getElementById("progress-bar").style.width = `${(currentTimeAccurate / duration) * 100}%`;
        }
        catch (err) { }
        // Now as we don't have to play next song, then set playNextSong variable to false.
        playNextSong = false
    }, 1000)
}

// if we fastforward the song and then leave the button, then it will start playing the song.
function stopProgressForward() {
    isPlaying = "playing";
}

// On clicking the backward button, we have to rewind the song by 30 seconds.
function setProgressBackward() {
    isPlaying = "paused"
    // Firstly we will set idNextSong to true.
    playNextSong = true
        // If we hold the backward button for 1 sec, then this function will execute and it will decrease the current time of mediany 30 sec else it will play the next song.
    setTimeout(function () {
        try {
            currentTimeAccurate -= 30.0;
            media.currentTime -= 30.0;
            document.getElementById("progress-bar").style.width = `${(currentTimeAccurate / duration) * 100}%`;
        }
        catch (err) { }
                // Now as we don't have to play next song, then set playNextSong variable to false.
        playNextSong = false
    }, 1000)
}

// if we rewind the song and then leave the button, then it will start playing the song.
function stopProgressBackward() {
    isPlaying = "playing";
}

// Exporting All The Functions So We Can Use Them Inside The Frame.jsx and Screen.jsx
export { newAudio, play, pause, setProgressForward, stop, isPlaying, stopProgressForward, playNextSong, setProgressBackward, stopProgressBackward, newVideo };