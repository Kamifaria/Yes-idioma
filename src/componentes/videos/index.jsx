import VideoPlay from "../Banner/Video-Site.mp4";

function Video(){
    return(
        <div>
            <video src={VideoPlay} controls></video>
        </div>
    )
}

export default Video;