import SideBar from "../components/Sidebar";
import SongDetailSidebar from "../components/SongDetailSidebar";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import FavoritesSongs from "../components/FavoritesSongs";
import { useState } from "react";
import type { Song } from "../types/songType";

function Favorites() {
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
            <FavoritesSongs user="Facu:)" numberSongs={79} setCurrentSong={setCurrentSong} />
            <SongDetailSidebar titleAlbum="Your Favorites" titleSong="Panama" src="https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed" artist="Van Halen"/>
            
            </div>
        </div>
        <Player currentSong={currentSong} isPlaying={isPlaying} togglePlay={togglePlay}  />
        </div>
    );
}

export default Favorites;
