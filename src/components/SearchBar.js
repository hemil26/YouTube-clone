import React,{Component} from 'react'
import './SearchBar.css'
class SearchBar extends Component{
    state={term:''}

    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui borderless fixed menu">
                <p style={{marginLeft:"30px"}} className="item"><i className="large bars icon"></i></p>
                <a style={{marginInlineStart:"20px"}} className="youtube-brand item"><i className="big youtube icon"></i>YouTube</a>
                <p style={{marginInlineEnd:"15%"}} className="item"></p>            
                <div>
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="ui icon input">
                            <input placeholder="Search" style={{marginTop:"10px",width:"500px"}} type="text" value={this.state.term} onChange={(e)=>this.setState({term: e.target.value})} ></input>
                            <i style={{marginTop:"5px"}} className="search link icon"></i>
                        </div>
                    </form>
                </div>
                <p className="item"><i className="large microphone icon"></i></p>
                <div className="right menu">
                    <p className="item"><i className="large video icon"></i></p>
                    <p className="item"><i className="large fitted ellipsis vertical icon"></i><i className="large fitted ellipsis vertical icon"></i><i className="large fitted ellipsis vertical icon"></i></p>
                    <p className="item"><i className="large bell icon"></i></p>
                    <p className="item"><img src="https://play-lh.googleusercontent.com/-FipuNXH4N-c/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclYbEV6OF75dnXV9LIZeiikwX9T0A/photo.jpg" className="ui avatar image"></img></p>
                </div>
            </div>
                
            
            
        )
    }
}
export default SearchBar