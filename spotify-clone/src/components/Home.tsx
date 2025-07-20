import SideBar from "./Sidebar"
import Player from "./Player"
import Display from "./Display"
import SongDetailSidebar from "./SongDetailSidebar"
import Navbar from "./Navbar"
import { useState } from "react"
import type { Song } from "../types/songType"


function Home() {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    function togglePlay() {
        setIsPlaying((prev) => !prev);
    }

    return (
        <div className="flex flex-col justify-center items-center bg-black w-screen h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-y-hidden bg-black">
                <div className="flex">
                    <SideBar />
                    <Display setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} />
                    <SongDetailSidebar titleSong="Survival" artist="Muse" titleAlbum="FFP Muse" src="https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9" />
                </div>
            </div>
            <Player currentSong={currentSong} isPlaying={isPlaying} togglePlay={togglePlay} />
        </div>
    )
};


export default Home;