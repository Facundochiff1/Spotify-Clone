function ButtonsSidebar () {
    return(
        <div className="flex gap-2">
            <button className="bg-[#fff]/10 rounded-full px-4 py-1 cursor-pointer hover:bg-white/25 transition duration-100">Playlists</button>
            <button className="bg-[#fff]/10 rounded-full px-4 py-1 cursor-pointer hover:bg-white/25 transition duration-100">Albums</button>
            <button className="bg-[#fff]/10 rounded-full px-4 py-1 cursor-pointer hover:bg-white/25 transition duration-100">Artists</button>
            <button className="bg-[#fff]/10 rounded-full px-4 py-1 cursor-pointer hover:bg-white/25 transition duration-100">Downloads</button>
        </div>
    )
}

export default ButtonsSidebar