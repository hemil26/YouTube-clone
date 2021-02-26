import React,{Component} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends Component{
    state={videos:[],selectedVideo:null,selectedChannel:null}

    componentDidMount(){
        this.onSearchSubmit('Michael Scott')
    }

    onSearchSubmit=async(term)=>{
        const response= await youtube.get('/search',{
            params:{
                q:term,
                part:"snippet",
                type:"video",
                maxResults:7,
            }
        })
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
        
        
        // console.log(this.state.selectedVideo)
        // console.log(response.data.items)
    }

    onVideoSelect=(video)=>{
        console.log(video)
        this.setState({selectedVideo:video})
    }

    render(){
        return(
            <div>
                <div style={{marginTop:'10px'}}>
                    <SearchBar onFormSubmit={this.onSearchSubmit}/>
                </div>
                
                <div className="ui container" style={{marginTop:'10px',paddingTop:"5%"}}>
                    <div className="ui two column grid">
                        <div className="eleven wide column">
                            <VideoDetail  video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default App