// Declaring all the GLobals
var audio, duration, interval;

var isPlaying = 'notStarted';

// Function for creating New Instance of the Audio Object
function newAudio(url){
    audio = new Audio(url);

    // Getting the Duration of the Song
    audio.addEventListener('canplay', function(e){
        duration =  Math.round(audio.duration);
    });
    // Callback to Play Function
    play();
}

// Play Function
function play(){
    isPlaying = 'playing';
    // Playing the audio object created above
    audio.play();
    // Getting the current duration of song and getting it displayed after each second
    // Also here we are moving the progress bar also
    interval = setInterval(function(){
        if (isPlaying !== "notStarted"){
            let currentTimeAccurate = audio.currentTime;
            document.getElementById("progress-bar").style.width = `${(currentTimeAccurate/duration)*100}%`;
        }
        if(audio.currentTime === audio.duration){
            clearInterval(interval);
        }
    }, 100);
}

// Pause Function
function pause(){
    isPlaying = 'paused';
    clearInterval(interval)
    audio.pause();
}



//--------------------------- Functions for setting progress of song on click or on dragging --------------------

// This One is When The User Clicks On Any Portion of the SongProgress Bar, The Song's Duration Would Reach to that Part
function setProgress(xPos, playerWidth) {
    const xPosPercent = (xPos/playerWidth)*100;
    document.getElementById("progress").style.width = (xPosPercent+1.5) + "%";
    const currentTime = (xPosPercent/100)*duration;
    audio.currentTime = currentTime;
}


// Exporting All The Functions So We Can Use Them Inside The Frame.jsx and Screen.jsx
export {newAudio, play, pause, setProgress, isPlaying};