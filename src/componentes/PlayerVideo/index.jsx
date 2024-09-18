import React from "react";

const videoURL = "https://www.youtube.com/watch?v=ZaYvwn9nBD4&ab_channel=Alura";

function Player(){
    return(
        <div className={style.videoWrapper}>
            <video src={videoURL}/>

        </div>
    );
}

export default Player;