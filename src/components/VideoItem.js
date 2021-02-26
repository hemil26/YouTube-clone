import React,{Component} from 'react';
import './VideoItem.css';

const VideoItem = ({video,onVideoSelect})=>{
        const{thumbnails,title}=video.snippet
        return(
            <div onClick={()=>onVideoSelect(video)} className="video-item item">
                <img className="ui image" src={thumbnails.medium.url}></img>
                <div className="content">
                    <div className="header">{title}</div>
                </div>
            </div>
        )
}


export default VideoItem