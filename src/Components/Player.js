// In the terminal, write "npm i". This will install all the "node_modules" listed in "package.json" file, that are necessary for this projet.
import React from 'react';

// This is the main Player function, which is imported in Screen.js file.
function Player(props) {
    return (
        // This is the main div element, in which all the details will be shown.
        <div className="player">
            <div className="main">
                {/* If our media type is song, then we have to create a new audio instance and show the song and artist name as well*/}
                {props.mediaType === "Music" &&
                    <React.Fragment>
                        {/* This div will contain the current song thumbnail */}
                        <div className="thumbnail">
                            <img src={props.songThumbnail} alt="img" />
                        </div>

                        {/* This div is for seekbar, whose width is increasing as our audio proceedes. */}
                        <div className="seekbar">
                            <input type="range" id="progress-bar" value="100" />
                        </div>

                        {/* This div contains the song and artist name */}
                        <div className="details">
                            <h2>{props.songName}</h2>
                            <p>{props.artistName}</p>
                        </div>
                    </React.Fragment>
                }

                {/* If out media type id video, then we have to create a new video tag. */}
                {props.mediaType === "Video" &&
                    <React.Fragment>
                        {/* Here in this div, we will show our video. */}
                        <div className="thumbnail">
                            <video id="video"></video>
                        </div>
                        {/* This div is for seekbar */}
                        <div className="seekbar">
                            <input type="range" id="progress-bar" value="100" />
                        </div>
                    </React.Fragment>
                }

                {/* In both audio and video case, we have to show the control buttons. */}
                <div className="controls">
                    <div className="prev-control">
                        <i className="fa fa-backward"></i>
                    </div>
                    {/* The icon for play-pause will change according to the current state of media. */}
                    <div className={props.isPaused ? "play-pause-control paused" : "play-pause-control"} >
                        <i className="fa fa-play"></i>
                        <i className="fa fa-pause"></i>
                    </div>
                    <div className="next-control">
                        <i className="fa fa-forward"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;