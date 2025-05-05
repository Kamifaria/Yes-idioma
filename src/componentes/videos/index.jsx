import VideoPlay from "../Banner/Institucional Vilarejo Praia.mp4";

function Video(){
    return(
        <div>
            <video src={VideoPlay} controls></video>
        </div>
    )
}

export default Video;