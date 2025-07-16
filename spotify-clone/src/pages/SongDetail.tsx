import SideBar from "../components/Sidebar";
import SongDetailSidebar from "../components/SongDetailSidebar";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
// import { response } from "../components/Display";
import SongInfo from "../components/SongInfo";
import type { Song } from "../types/songType";
import { useState } from "react";
import { useParams } from "react-router";

// const allSongs = [
//     ...response.forYou.createdForSection,
//     ...response.forYou.heardAgainSection,
//     ...response.forYou.favouriteArtistsSection
// ];

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

    // const songData = allSongs.find((song) => song.id === parseInt(id!))

    // const normalizedSongs =  allSongs.map(song => {
    //     return {
    //         id: song.id,
    //         title: song.title || song.description || 'Título desconocido',
    //         artist: song.artist || song.description || 'Artista desconocido',
    //         src: song.src,
    //         year: song.year || 'N/A',
    //         duration: song.duration || '0:00',
    //         listeners: song.listeners || '0',
    //     };
    // });
    return (
        <div className="flex flex-col justify-center items-center bg-black w-screen h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-y-hidden bg-black">
            <div className="flex">
                <SideBar />
                <SongInfo togglePlayDetail={togglePlayDetail} isPlayingDetail={isPlayingDetail} setCurrentSong={setCurrentSong} year="1" duration="3:45" listeners="30,131,547" artist="Fito Paez" song="Giros" songId={id!} />
                <SongDetailSidebar titleAlbum="Your Favorites" titleSong="Panama" src="https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed" artist="Van Halen"/>
            </div>
        </div>
        <Player currentSong={currentSong} isPlaying={isPlaying} togglePlay={togglePlay}  />
        </div>
    );
};

export default SongDetail;