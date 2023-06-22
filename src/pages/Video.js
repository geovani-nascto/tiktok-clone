import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import './video.css'

function Video({likes, messages, shares, name, description, music, url}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart(){
        if(play){
            videoRef.current.pause()
            setPlay(false)
        } else{
            videoRef.current.play()
            setPlay(true)
        }
    }

    return (
        <div className="video">
            <video
            ref={videoRef}
            className="video__player"
            onClick={handdleStart}
            src={ url }
            // controls (JS no lugar)
            loop
            ></video>
            { /* Side bar */ }
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
            { /* Footer */ }
            <VideoFooter
                name={name}
                description={description}
                music={music}
            />
        </div>
    )
}

export default Video
