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

function newVideo(url) {
    media = document.getElementById("video");
    media.setAttribute("src", url)

    // Getting the Duration of the Song
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
    // Playing the audio object created above
    media.play();
    // Getting the current duration of song and getting it displayed after each second
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
    // Now our work is to pause the song and then set the Current Time of the song to 00:00 second. This task would act like that we have stopped the current song.
    if (isPlaying !== "notStarted") {
        clearInterval(interval)
        media.pause();
        media.currentTime = 0;
    }

    isPlaying = 'notStarted';
}

//--------------------------- Functions for setting progress of song on click --------------------

function setProgressForward() {
    isPlaying = "paused"
    playNextSong = true
    setTimeout(function () {
        try {
            currentTimeAccurate += 30.0;
            media.currentTime += 30.0; 
            document.getElementById("progress-bar").style.width = `${(currentTimeAccurate / duration) * 100}%`;
        }
        catch (err) { }
        playNextSong = false
    }, 1000)
}


function stopProgressForward() {
    isPlaying = "playing";
}

function setProgressBackward() {
    isPlaying = "paused"
    playNextSong = true
    setTimeout(function () {
        try {
            currentTimeAccurate -= 30.0;
            media.currentTime -= 30.0;
            document.getElementById("progress-bar").style.width = `${(currentTimeAccurate / duration) * 100}%`;
        }
        catch (err) { }
        playNextSong = false
    }, 1000)
}


function stopProgressBackward() {
    isPlaying = "playing";
}

// Exporting All The Functions So We Can Use Them Inside The Frame.jsx and Screen.jsx
export { newAudio, play, pause, setProgressForward, stop, isPlaying, stopProgressForward, playNextSong, setProgressBackward, stopProgressBackward, newVideo };