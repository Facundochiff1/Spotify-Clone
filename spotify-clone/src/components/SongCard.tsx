type SongCardProps = {
    src: string;
    title: string;
    description: string;
    artist: string;
}

function SongCard(props: SongCardProps) {
    const { src, title, description, artist } = props;
    return(
        <div className="p-2">
            <div className="group relative flex items-center w-full h-[60px] bg-[#2b2b2b] text-white rounded-lg hover:bg-gray-800 transition cursor-pointer gap-3">
                <div>
                    <img className="w-15 h-15 rounded-l object-cover" src={src}/>
                </div>
                <div className="flex flex-col justify-center gap-2 ">
                    <h2 className="flex start">{title}</h2>
                    <p className="flex flex-start text-gray-300">{artist} • {description}</p>
                    <button className="absolute right-2 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-green-400 cursor-pointer transition-opacity duration-100 text-black ">▶</button>
                </div>
            </div>
        </div>
    )
}

export default SongCard