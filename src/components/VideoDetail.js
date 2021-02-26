import React from 'react';

const VideoDetail=({video})=>{
    if(!video){
        return <div>NO VIDEO SELECTED !</div>
    }
    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
            </div>
            <div className="ui vertical segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <hr></hr>
                <div className="ui basic segment">
                    <h3>{video.snippet.channelTitle}</h3>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        </div>
        
    )
}

export default VideoDetail