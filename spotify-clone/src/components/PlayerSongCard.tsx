type PlayerSongCardProps = {
    artist: string;
    src: string;
    title: string;
}

function PlayerSongCard(props: PlayerSongCardProps) {
    const {artist, src, title} = props;
    return(
        <div className="flex flex-col gap-2 p-2">
            <div className="flex items-center w-[300px] h-[63px] ml-1 bg-black text-white gap-3">
                <div>
                    <img className="w-14 h-14 rounded-sm object-cover cursor-pointer" src={src}/>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="cursor-pointer hover:underline">{title}</h2>
                    <p className="flex flex-start text-gray-400 cursor-pointer hover:underline hover:text-white">{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerSongCard