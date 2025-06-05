function ButtonsDisplay() {
    return(
        <div className="flex py-2 px-3 gap-3">
            <button className="rounded-full px-4 py-[5px] bg-[#fff] text-black cursor-pointer hover:bg-[#fff]/95">All</button>
            <button className="rounded-full px-4 py-1 bg-[#fff]/20 text-white cursor-pointer hover:bg-[#fff]/25">Music</button>
            <button className="rounded-full px-4 py-1 bg-[#fff]/20 text-white cursor-pointer hover:bg-[#fff]/25">Podcasts</button>
        </div>
    )
}

export default ButtonsDisplay