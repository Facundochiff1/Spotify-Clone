import SideBar from "../components/layout/Sidebar";
import SongDetailSidebar from "../components/song/SongDetailSidebar";
import Navbar from "../components/layout/Navbar";
import Player from "../components/layout/Player";
import FavoritesSongs from "../components/favorites/FavoritesSongs";
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
                    <SongDetailSidebar titleAlbum="Your Favorites" titleSong="Survival" src="https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9" artist="Muse" />

                </div>
            </div>
            <Player currentSong={currentSong} isPlaying={isPlaying} togglePlay={togglePlay} />
        </div>
    );
}

export default Favorites;
