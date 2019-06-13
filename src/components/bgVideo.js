import React from "react";
import YouTube from 'react-youtube';
import './styles/bgVideo.css';



class Bgvideo extends React.Component{
	
	render(){
        const opts = {
            height: '1920',
            width: '1920',
            playerVars: { 
                rel: 0,
                autohide: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                disablekb: 1,
                enablejsapi: 0,
                modestbranding: 0,
                iv_load_policy: 3,
                playsinline: 1,
                wmode: 'transparent'
            }
          };

		return (
            <div id="bgVideo" className="video-background">
                <div className="video-foreground">
                 <YouTube
                        videoId={this.props.VideoId}
                        opts={opts}
                        className="video-iframe"
                        onReady={this._onReady}
                        onEnd={this._onEnd}
                />
                <div className="shadowBox"></div>
                </div>
            </div>
        )
    }
    
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.mute();
    }
    _onStateChange(event) {
       
    }
    _onEnd(event) {
        event.target.playVideo();
    }
      

}


export default Bgvideo;

