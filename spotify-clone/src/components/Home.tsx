import SideBar from "./SideBar"
import Player from "./Player"
import Display from "./Display"
import SongDetailSidebar from "./SongDetailSidebar"


function Home() {
    return(
        <div className="h-screen w-screen bg-black ">
            <div className="h-[90%] flex">
                <SideBar />
                <Display />
                <SongDetailSidebar/>
            </div>
            <div>
                <Player time="2:35" timeLeft="1:12"/>
            </div>
        </div>
    )
}


export default Home