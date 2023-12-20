"use client"
import Youtube from "react-youtube"
import { useState } from "react"
import { FilmSlate, XCircle } from "@phosphor-icons/react/dist/ssr"

const videoPlayer = ({YoutubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return(
            <div className="fixed bottom-2 right-2">
            <button 
            onClick={handleVideoPlayer}
            className="cursor-pointer hover:text-on-primary hover:bg-on-accent 
            rounded text-on-accent float-right bg-on-primary px-3 mb-1"> <XCircle size={32}/> </button>
            <Youtube videoId={YoutubeId} 
            onReady={(event) => event.target.pauseVideo() }
            opts={option}
            onError={() => alert("Video is broken, Please try another.")}
            />
        </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return(
            <button onClick={handleVideoPlayer} 
            className="cursor-pointer bg-on-primary fixed bottom-5 right-5 text-on-accent text-xl hover:bg-on-accent hover:text-on-primary transition-all shadow-xl"
            style={{borderRadius: '15px'}}>
                <FilmSlate size={35}/>
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />

}

export default videoPlayer