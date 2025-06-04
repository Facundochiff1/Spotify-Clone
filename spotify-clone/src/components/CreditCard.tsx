type CreditsProps = {
    artist: string;
    compositor: string;
}

function Credits (props: CreditsProps) {
    const { artist, compositor } = props
    return(
        <section className="bg-white/8 flex p-4 rounded-[10px] flex-col m-3 min-h-56">
            <div className="flex items-center justify-between w-full ">
                <h2 className="text-[18px]">Credits</h2>
                <p className="text-[16px] text-gray-400 font-semibold hover:underline hover:text-white cursor-pointer">Mostrar todo</p>
                
            </div>
            
            <div className="mt-6 flex justify-between items-center">
                <div className="flex flex-col leading-none gap-1.5">
                    <h2 className="m-0 p-0 text-[20px] text-left hover:underline cursor-pointer">{artist}</h2>
                    <p className="m-0 p-0 text-left">Principal Artist</p>
                </div>
                <button className="border w-20 h-9 rounded-full border-gray-400 text-[15px] font-semibold hover:border-white cursor-pointer">
                Follow
                </button>
            </div>
            <div className="flex flex-col leading-none mt-6 gap-1.5">
                <h2 className="m-0 p-0 text-[20px] text-left">{compositor}</h2>
                <p className="m-0 p-0 text-left">Composer</p>
            </div>
        </section>
    )
}

export default Credits