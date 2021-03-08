import React from 'react';
import OnMyWay from './../AudioThumbnails/OnMyWay.jpg';

function Player(props) {
    // const audio = document.getElementById("audio");

    return (
        <div class="player">
            <div class="main">
                <div class="thumbnail">
                    <img src={OnMyWay} alt="img" /></div>
                <div class="seekbar">
                    <input type="range" id="progress-bar" value="100" />
                </div>
                <div class="details">
                    <h2>{props.songName}</h2>
                    <p>{props.artistName}</p>
                </div>
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