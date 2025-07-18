import { assets } from "../assets/assets";
import type { FavoriteSongCard } from "./FavoritesSongs";
import {  type Song } from "../types/songType";
import { response } from "./Display";

type SongDetailContentProps = FavoriteSongCard & {
    songId: string;
    currentSong?: Song | null;
    isPlayingDetail?: boolean;
    togglePlayDetail?: () => void;
}


function SongDetailContent({ songId, isPlayingDetail, togglePlayDetail}: SongDetailContentProps) {

    const allSongs = [
        ...response.forYou.createdForSection,
        ...response.forYou.heardAgainSection,
        ...response.forYou.favouriteArtistsSection
    ];

    const songsFound = allSongs.find((song) => song.id === parseInt(songId))

    return (
        <div className="bg-[#121212c5]  m-2 mr-0 ml-0 rounded-[9px] text-white lg:w-[75%] overflow-y-auto">
            <div className="flex flex-col">
                <div>
                    <header className="flex items-center h-[450px] bg-gradient-to-b from-[#7757b8d2] via-[#5c33a4c9] to-transparent w-full">
                        <div className="flex mb-32">
                            <img
                                className="h-[224px] w-[226px] ml-6 rounded"
                                src={songsFound?.src}
                            />
                            <div className="flex flex-col items-start px-6 gap-6 mt-14">
                                <span className="font-light">Song Information</span>
                                <h1 className="font-black text-7xl">{songsFound?.title}</h1>
                                <div className="text-[14px] text-white"><strong>{songsFound?.artist}</strong> • {songsFound?.title} • {songsFound?.year} • {songsFound?.duration} • {songsFound?.listeners}</div>
                            </div>
                        </div>
                    </header>
                    <main className="relative bg-[#0000001c] backdrop-blur-md p-4 w-full h-screen -mt-34 z-10 overflow-y-auto">
                        <section className="flex justify-between">
                            <div className="flex items-center p-2 gap-8 px-4">
                                <button onClick={togglePlayDetail}
                                    className="bg-green-500 rounded-full w-12 h-12 text-2xl flex items-center justify-center hover:bg-green-400 cursor-pointer transition-opacity duration-100 text-black">
                                    <img src={isPlayingDetail ? assets.pause_icon : assets.play_icon} className="w-4 h-4" alt="Play/Pause control Detail song" />
                                </button>
                                <img className="h-7 w-7 cursor-pointer" src={assets.add_favorites_icon} alt="Shuffle mode" />
                                <img className="h-6 w-6 cursor-pointer" src={assets.download_icon} alt="Download song" />
                            </div>
                        </section>
                        <section className="flex flex-col text-left w-[300px] items-start mt-6 ml-4 gap-4 ">
                            <h1 className="text-2xl font-bold">Lyrics</h1>
                            <p className="text-gray-400 leading-7">
                                Existe un cielo y un estado de coma
                                Cambia el entorno de persona en persona
                                Giros
                                Dar media vuelta y ver que pasa allá afuera
                                No todo el mundo tiene primaveras
                                Flaco, ¿dónde estás?
                                Estoy imaginándome otro lugar
                                Estoy juntando información
                                Estoy queriendo ser otro (otro tipo)
                                Mi necesidad se va modificando con las demás
                                Así mi Luna llega a vos, así yo llego a tu Luna
                                Giros
                                Todo da vueltas como una gran pelota
                                Todo da vueltas, casi ni se nota
                                Giros
                                Fotografía de distintos lugares
                                Fotográficamente tan distantes
                                Suena un bandoneón
                                Parece el de otro tipo, pero soy yo
                                Que sigo caminando igual
                                Silbando un tango oxidado
                                Giros
                                (Giros)
                                </p>
                            <section className="flex mt-5 items-center hover:bg-[#504e4e44] w-[970px] rounded cursor-pointer p-2 px-2 font-bold">
                                <div className="flex items-center justify-center gap-4">
                                    <img className="rounded-full h-[78px] w-[78px]" src={songsFound?.src} alt="Artist info" />
                                    <div>
                                        <p className="text-[14px]">Artista</p>
                                        <a href="#" className="text-[16px] hover:underline">{songsFound?.artist}</a>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default SongDetailContent;
