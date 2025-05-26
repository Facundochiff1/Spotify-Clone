function SongDetailSidebar() {
    return(
        <aside className="w-[25%] h-full p-2 flex-col text-white hidden lg:flex ">
            <nav className="bg-[#121212] h-[15%] rounded-t flex flex-col justify-around">
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                </div>
            </nav>
            <section className="bg-[#121212] h-[85%] rounded-b">
                    <header className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        </div>
                        <div className="flex justify-between gap-4">
                        </div>
                    </header>
            </section>
        </aside>
    )
}

export default SongDetailSidebar