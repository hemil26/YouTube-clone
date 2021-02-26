import React,{Component} from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect})=>{
    const Renderedvideos=videos.map((video)=>{
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
    })
    return <div className="ui relaxed divided list">{Renderedvideos}</div>
}

export default VideoList