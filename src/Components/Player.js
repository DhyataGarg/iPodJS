import React from 'react';

function Player(props) {
    return (
        <div class="player">
            <div class="main">

                {props.mediaType === "Music" && <React.Fragment><div className="thumbnail">
                    <img src={props.songThumbnail} alt="img" /></div>
                    <div class="seekbar">
                        <input type="range" id="progress-bar" value="100" />
                    </div>
                    <div class="details">
                        <h2>{props.songName}</h2>
                        <p>{props.artistName}</p>
                    </div></React.Fragment>
                }

                {props.mediaType === "Video" &&
                    <React.Fragment>
                        <div className="thumbnail">
                            <video id="video"></video>
                        </div>
                        <div class="seekbar">
                            <input type="range" id="progress-bar" value="100" />
                        </div>
                    </React.Fragment>
                }

                <div class="controls">
                    <div class="prev-control">
                        <i class="fa fa-backward"></i>
                    </div>
                    <div class={props.isPaused ? "play-pause-control paused" : "play-pause-control"} >
                        <i class="fa fa-play"></i>
                        <i class="fa fa-pause"></i>
                    </div>
                    <div class="next-control">
                        <i class="fa fa-forward"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;