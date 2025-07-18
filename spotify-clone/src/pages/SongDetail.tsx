import SideBar from "../components/Sidebar";
import SongDetailSidebar from "../components/SongDetailSidebar";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import SongDetailContent from "../components/SongDetailContent";
import type { Song } from "../types/songType";
import { useState } from "react";
import { useParams } from "react-router";

function SongDetail() {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isPlayingDetail, setIsPlayingDetail] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    function togglePlay() {
        setIsPlaying((prev) => !prev);
    };

    function togglePlayDetail() {
        setIsPlayingDetail((prev) => !prev);
    };

    return (
        <div className="flex flex-col justify-center items-center bg-black w-screen h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-y-hidden bg-black">
            <div className="flex">
                <SideBar />
                <SongDetailContent togglePlayDetail={togglePlayDetail} isPlayingDetail={isPlayingDetail} setCurrentSong={setCurrentSong} songId={id!} />
                <SongDetailSidebar titleAlbum="FFP Muse" titleSong="Survival" src="https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9" artist="Muse"/>
            </div>
        </div>
        <Player currentSong={currentSong} isPlaying={isPlaying} togglePlay={togglePlay}  />
        </div>
    );
};

export default SongDetail;