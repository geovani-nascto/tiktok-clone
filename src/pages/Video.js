import React, { useRef, useState } from 'react'
import './video.css'

function Video() {

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
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
            // controls (JS no lugar)
            loop
            >

            </video>
        </div>
    )
}

export default Video
