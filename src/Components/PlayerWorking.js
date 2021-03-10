// Declaring all the GLobals
var audio, duration, interval, currentTimeAccurate, initialTime = new Date(), currentTime, playNextSong = false;

var isPlaying = 'notStarted';

// Function for creating New Instance of the Audio Object
function newAudio(url) {
    audio = new Audio(url);

    // Getting the Duration of the Song
    audio.addEventListener('canplay', function (e) {
        duration = Math.round(audio.duration);
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
    audio.play();
    // Getting the current duration of song and getting it displayed after each second
    // Also here we are moving the progress bar also
    interval = setInterval(function () {
        if (isPlaying !== "notStarted") {
            currentTimeAccurate = audio.currentTime;
            // console.log("actual " + currentTimeAccurate)
            try { document.getElementById("progress-bar").style.width = `${(currentTimeAccurate / duration) * 100}%`; }
            catch (err) { }
        }
        if (audio.currentTime === audio.duration) {
            clearInterval(interval);
        }
    }, 100);
}

// Pause Function
function pause() {
    isPlaying = 'paused';
    clearInterval(interval)
    audio.pause();
}

// Stop Function
function stop() {
    // Now our work is to pause the song and then set the Current Time of the song to 00:00 second. This task would act like that we have stopped the current song.
    if (isPlaying !== "notStarted") {
        clearInterval(interval)
        audio.pause();
        audio.currentTime = 0;
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
            audio.currentTime += 30.0; document.getElementById("progress-bar").style.width = `${(currentTimeAccurate / duration) * 100}%`;
        }
        catch (err) { }
        playNextSong = false
    }, 1000)
}


function stopProgressForward() {
    isPlaying = "playing";
    try{
}
    catch (err) { }
}

function setProgressBackward() {
    isPlaying = "paused"
    playNextSong = true
    setTimeout(function () {
        try {
            currentTimeAccurate -= 30.0;
            audio.currentTime -= 30.0;
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
export { newAudio, play, pause, setProgressForward, stop, isPlaying, stopProgressForward, playNextSong, setProgressBackward, stopProgressBackward };