import { assets } from "../assets/assets";

type SongDetailSidebarProps = {
    titleAlbum: string;
    src: string;
    artist: string;
    titleSong: string;
}


function SongDetailSidebar(props: SongDetailSidebarProps) {
    const { titleAlbum, src, titleSong, artist } = props;
    return(
        <aside className="group w-[28%] h-full p-2 flex-col text-white hidden lg:flex">
            <nav className="bg-[#121212] rounded-t flex flex-col justify-around">
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
            <section className="bg-[#121212] h-[85%] rounded-b">
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
            </section>
        </aside>
    )
}

export default SongDetailSidebar