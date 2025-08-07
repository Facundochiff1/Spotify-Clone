import { Link } from "react-router";
import { assets } from "../../assets/assets";
import ButtonsSidebar from "../buttons/ButtonsSidebar";
import SidebarSongCard from "../cards/SidebarSongCard";
import { musicDB } from "../../data/music";

function SideBar() {
  return (
    <aside className="w-[32%] p-1 m-2 flex-col text-white flex lg:flex bg-[#121212] rounded-[9px]">
      <nav className="flex items-center justify-between rounded-t-[9px] p-4 px-5 py-3">
        <h1 className="text-[18px] font-bold">Your library</h1>
        <div className="flex items-center mt-0.5 gap-4">
          <Link  to={'/create'} className="flex items-center justify-center border bg-[#2e2d2d86] border-[#2e2d2d86] cursor-pointer rounded-full h-[38px] px-4.5 gap-2">
            <img className="flex h-4" src={assets.plus_icon} />
            <span className="font-bold">Create</span>
          </Link>
          <img className="w-4.5 mr-2 cursor-pointer" src={assets.zoom_icon} />
        </div>
      </nav>

      <section className="flex flex-col flex-1 rounded-b-[8px] overflow-hidden">
        <header className="p-2 px-4 flex items-center">
          <ButtonsSidebar />
        </header>
        <div className="flex items-center justify-between px-4 py-1">
          <div className="flex items-center cursor-pointer hover:bg-[#5e5e5e8f] rounded-full p-2">
            <img
              className="w-[20px] h-[20px]"
              src={assets.search_icon}
              alt="Search"
            />
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span className="text-gray-300 hover:text-white">Recent</span>
            <img className="w-5 h-6 mt-0.5" src={assets.list_icon} alt="Recent list" />
          </div>
        </div>
        <div className="px-2 overflow-y-auto flex-1 mt-2">
          {musicDB.forYou.playlists.map((playlist) => {
            return (
              <SidebarSongCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                creator={playlist.creator}
                src={playlist.src}
              />
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export default SideBar;

