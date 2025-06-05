type ArtistAboutCardProps = {
    artist: string;
    listeners: string;
    description: string;
    src: string;
};

function ArtistAboutCard (props: ArtistAboutCardProps) {
    const { artist, listeners, description, src } = props
    return(
        <section className="cursor-pointer bg-white/8 h-[510px] flex px-2 py-4 rounded-[10px] flex-col m-3">
            <div className="relative top-0 left-0">                
                <img src={src} alt="Image artist about" className="w-[400px] h-[300px] rounded-t-[8px] brightness-80"/>
                <h1 className="text-xl font-semibold absolute left-6 top-4">About the artist</h1>
            </div>
            <div className="flex p-4 flex-col gap-3">
                <h2 className="flex text-xl font-bold hover:underline">{artist}</h2>
                <div className="flex justify-between items-center">
                    <p className="flex text-gray-400 text-[16px] cursor-pointer">{listeners} monthly listeners</p>  
                    <button className="flex justify-center items-center border w-20 h-9 rounded-full border-gray-400 text-[16px] font-semibold hover:border-white cursor-pointer">
                    Follow
                    </button>        
                </div>
                <div className="flex mt-1 items-center text-gray-400">
                    <p className="line-clamp-3 text-left">{description}</p>
                </div>
            </div>

        </section>
    )
};

export default ArtistAboutCard;