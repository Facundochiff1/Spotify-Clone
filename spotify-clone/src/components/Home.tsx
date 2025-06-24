import SideBar from "./Sidebar"
import Player from "./Player"
import Display from "./Display"
import SongDetailSidebar from "./SongDetailSidebar"
import Navbar from "./Navbar"

function Home() {
    return(
        <div className="flex flex-col justify-center items-center bg-black w-screen h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-y-hidden bg-black"> 
                <div className="flex">
                    <SideBar />
                    <Display />
                    <SongDetailSidebar titleSong="Survival" artist="Muse" titleAlbum="FFP Muse" src="https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9"/>
                </div>
            </div>
            <Player />
        </div>
    )
}


export default Home