import SideBar from "../components/layout/Sidebar"
import Player from "../components/layout/Player"
import SongDetailSidebar from "../components/song/SongDetailSidebar"
import Navbar from "../components/layout/Navbar"
import { useParams } from "react-router"
import CategorySongListContent from "../components/category/CategorySongListContent"

function CategoryDetail() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="flex flex-col justify-center items-center bg-black w-screen h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-y-hidden bg-black">
                <div className="flex">
                    <SideBar />
                    <CategorySongListContent songId={id!} />
                    <SongDetailSidebar titleSong="Survival" artist="Muse" titleAlbum="FFP Muse" src="https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9" />
                </div>
            </div>
            <Player />
        </div>
    )
};


export default CategoryDetail; 