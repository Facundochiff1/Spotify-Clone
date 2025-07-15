import { assets } from "../assets/assets";

import ArtistAboutCard from "./ArtistAboutCard";
import VideoCard from './VideoCard'
import CreditCard from './CreditCard'

type SongDetailSidebarProps = {
    titleAlbum: string;
    src: string;
    artist: string;
    titleSong: string;
}


function SongDetailSidebar(props: SongDetailSidebarProps) {
    const { titleAlbum, src, titleSong, artist } = props;
    return(
        <aside className="w-[28%] p-2 flex-col text-white lg:flex mr-0 ml-0 overflow-auto">
            <nav className="group h-full bg-[#121212] rounded-t flex flex-col justify-around">
                <div className="flex items-center mt-5 gap-2 px-3 justify-between relative">
                    <div className="flex items-center gap-2">
                        <img className="w-0 pacity-0  group-hover:w-5 transition-all duration-100 group-hover:opacity-100" src={assets.panel_icon}/>
                        <h1 className="font-bold text-[18px] cursor-pointer hover:underline">{titleAlbum}</h1>
                    </div>
                    <img className="w-6 h-4 px-1 cursor-pointer opacity-0 group-hover:opacity-100" src={assets.zoom_icon}/>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-[90%] h-[100%] mt-10 rounded-[10px] cursor-pointer" src={src}/>
                </div>
            </nav>
            <section className="bg-[#121212] rounded-b h-auto">
                <header className="p-4 flex items-center justify-between">
                    <div className="px-1">
                        <h2 className="text-[25px] font-bold cursor-pointer hover:underline">{titleSong}</h2>
                        <p className="flex text-gray-400 text-[17px] cursor-pointer hover:underline hover:text-white">{artist}</p>
                    </div>
                        
                    <div className="flex justify-between gap-4 pr-2 px-0.5">
                        <img className="w-5 h-5 cursor-pointer" src={assets.like_icon}/>
                        <img className="w-5 h-5 cursor-pointer" src={assets.plus_icon}/>
                    </div>
                </header>
                <div>
                    <VideoCard title='Muse'/>
                </div>
                <div className="mt-5">
                    <ArtistAboutCard artist="Muse" src="https://cdn-images.dzcdn.net/images/artist/cd7c5861be0009d3b75d4d3c069317a7/1900x1900-000000-80-0-0.jpg" description="Muse es una banda británica de rock alternativo formada en Teignmouth, Devon, en 1994. Integrada por Matt Bellamy (voz, guitarra, piano), Chris Wolstenholme (bajo, coros) y Dominic Howard (batería), Muse es conocida por su estilo poderoso y cinematográfico que fusiona rock progresivo, electrónica, música clásica y temática distópica. Con álbumes icónicos como Origin of Symmetry, Absolution y Black Holes and Revelations, el trío ha ganado reconocimiento mundial por sus actuaciones en vivo llenas de energía y por su constante experimentación sonora. A lo largo de su carrera, Muse ha vendido millones de discos y ha ganado múltiples premios, incluyendo Grammys, BRIT Awards y NME Awards." listeners="1.345"/>
                </div>
                <div>
                    <CreditCard artist="Muse" compositor="Math Bellamy"/>
                </div>
            </section>
        </aside>
    )
}

export default SongDetailSidebar