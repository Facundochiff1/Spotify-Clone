import SideBar from "./Sidebar"
import Player from "./Player"
import Display from "./Display"
import SongDetailSidebar from "./SongDetailSidebar"
import Navbar from "./Navbar"


function Home() {
    return(
        <div className="flex flex-col justify-center items-center pt-[62px] bg-black w-screen h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-y-hidden  bg-black"> 
                <div className="flex h-screen overflow-hidden">
                    <SideBar />
                    <Display />
                    <SongDetailSidebar titleSong="Survival" artist="Muse" titleAlbum="FFP Muse" src="https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6"/>
                </div>
                <div>
                    <Player time="2:35" timeLeft="1:12"/>
                </div>
            </div>
        </div>

    )
}


export default Home