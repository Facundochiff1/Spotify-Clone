import { assets } from "../assets/assets";

type SidebarSongCardProps = {
    title: string;
    description: string;
    creator: string;
    src: string;
}

function SidebarSongCard(props: SidebarSongCardProps) {
    const { title, description, creator, src } = props;
    return(
        <div className="group relative flex flex-col px-2.5 py-1 cursor-pointer">
            <div className="flex items-center w-[300px] h-[63px] text-white gap-3">
                <div className="w-[50px] h-[50px]">
                    <img className="w-full h-full rounded-[5px] object-cover cursor-pointer" src={src} alt="Album image"/>
                </div>

                <div className="absolute inset-0 bg-black/10 rounded-[5px] opacity-0 group-hover:opacity-100 transition duration-100"/>
                  
                <div className="absolute inset-0 bg-[#fff]/5 rounded-[5px] opacity-0 group-hover:opacity-100 transition duration-100"> 
                    <button className="absolute top-6 left-5 m-auto  w-7 h-7 flex opacity-0 group-hover:opacity-100  cursor-pointer transition duration-100 text-white">
                        <img src={assets.play_icon} alt="Play" />
                    </button>
                </div>

                <div className="flex flex-col">
                    <h2 className="cursor-pointer flex font-semibold">{title}</h2>
                    <p className="flex flex-start text-gray-400 cursor-pointer">{description} • {creator}</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarSongCard