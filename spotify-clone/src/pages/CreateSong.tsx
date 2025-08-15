import SideBar from "../components/layout/Sidebar"
import Player from "../components/layout/Player"
import SongDetailSidebar from "../components/song/SongDetailSidebar"
import Navbar from "../components/layout/Navbar"
import CreateSongForm from "../components/form/CreateSongForm"

function CreateSong() {
    return (
        <div className="flex flex-col justify-center items-center bg-black w-screen h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-y-hidden bg-black">
                <div className="flex">
                    <SideBar />
                    <CreateSongForm />
                    <SongDetailSidebar titleSong="Survival" artist="Muse" titleAlbum="FFP Muse" src="https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9" />
                </div>
            </div>
            <Player />
        </div>
    )
};


export default CreateSong; 