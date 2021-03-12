import React from 'react';

function Player(props) {
    return (
        <div className="player">
            <div className="main">

                {props.mediaType === "Music" && <React.Fragment><div className="thumbnail">
                    <img src={props.songThumbnail} alt="img" /></div>
                    <div className="seekbar">
                        <input type="range" id="progress-bar" value="100" />
                    </div>
                    <div className="details">
                        <h2>{props.songName}</h2>
                        <p>{props.artistName}</p>
                    </div></React.Fragment>
                }

                {props.mediaType === "Video" &&
                    <React.Fragment>
                        <div className="thumbnail">
                            <video id="video"></video>
                        </div>
                        <div className="seekbar">
                            <input type="range" id="progress-bar" value="100" />
                        </div>
                    </React.Fragment>
                }

                <div className="controls">
                    <div className="prev-control">
                        <i className="fa fa-backward"></i>
                    </div>
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