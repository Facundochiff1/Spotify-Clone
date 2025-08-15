type PlayerSongCardProps = {
    artist: string;
    src: string;
    title: string;
    description?: string;
}

function PlayerSongCard(props: PlayerSongCardProps) {
    const { artist, src, title } = props;
    return(
        <div className="flex flex-col mb-1">
            <div className="flex items-center w-[300px] h-[63px] ml-1 text-white gap-3">
                <div>
                    <img className="w-[60px] h-[60px] rounded-sm object-cover cursor-pointer" src={src}/>
                </div>
                <div className="flex flex-col max-w-[200px]">
                    <h2 className="cursor-pointer flex hover:underline truncate w-full">{title}</h2>
                    <p className="flex flex-start text-gray-400 cursor-pointer hover:underline hover:text-white">{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerSongCard