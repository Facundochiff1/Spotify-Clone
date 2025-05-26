function ButtonsDisplay() {
    return(
        <div className="flex ml-1 py-4 gap-4">
            <button className="bg-white rounded-full px-4 py-1 text-black cursor-pointer">All</button>
            <button className="bg-[#353535] rounded-full px-4 py-1 text-white cursor-pointer">Music</button>
            <button className="bg-[#353535] rounded-full px-4 py-1 text-white cursor-pointer">Podcasts</button>
        </div>
    )
}

export default ButtonsDisplay