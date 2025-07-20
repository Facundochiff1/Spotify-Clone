import { assets } from "../assets/assets";
import type { Song } from "../types/songType";
import SongListItem from "./SongListItem";

export type FavoriteSongCard = {
  user?: string;
  numberSongs?: number;
  setCurrentSong: (song: Song) => void
}

function FavoritesSongs({ user, numberSongs, setCurrentSong }: FavoriteSongCard) {

  return (
    <div className="bg-[#121212c5] w-[100%] m-2 mr-0 ml-0 rounded-[9px] text-white lg:w-[75%] overflow-y-auto">
      <div className="flex flex-col">
        <div>
          <header className="flex items-center h-[450px] bg-gradient-to-b from-[#7757b8d2] via-[#5c33a4c9] to-transparent w-full">
            <div className="flex mb-32">
              <img
                className="h-[224px] w-[226px] ml-6 rounded"
                src="https://misc.scdn.co/liked-songs/liked-songs-640.jpg"
                alt="Favorites songs"
              />
              <div className="flex flex-col items-start px-6 gap-6 mt-14">
                <span className="font-light">Playlist</span>
                <h1 className="font-black text-7xl">Your Favorites</h1>
                <div>
                  <strong>{user}</strong> • {numberSongs}
                </div>
              </div>
            </div>
          </header>
          <main className="relative bg-[#0000001c] backdrop-blur-md p-4 w-full h-screen -mt-34 z-10 overflow-y-auto">
              <section className="flex justify-between">
                <div className="flex items-center p-2 gap-8 px-4">
                  <button
                  className="bg-green-500 rounded-full w-12 h-12 text-2xl flex items-center justify-center hover:bg-green-400 cursor-pointer transition-opacity duration-100 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6">
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"/>
                  </svg>
                  </button>
                  <img className="h-6 w-6 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle mode" />
                  <img className="h-6 w-6 cursor-pointer" src={assets.download_icon} alt="Download song" />
                </div>
                <div className="flex items-center gap-4 px-5">
                  <img className="h-4 w-4 cursor-pointer" src={assets.search_icon} alt="Search song list" />
                  <p className="text-gray-400 cursor-pointer">Date added</p>
                  <img className="h-5 w-5 cursor-pointer" src={assets.list_icon} alt="Song list" />
                </div>
              </section>
              <section className="ml-4 mr-4">
                <div className="flex text-left text-[14px] mt-5 text-gray-400 border-b border-gray-700 pb-2">
                  <p className="w-1/2 ml-5"># Title</p>
                  <p className="w-1/2 ml-[100px]">Album</p>
                  <p className="w-3/9 ">Date added</p>
                  <div className=" flex justify-end">
                    <img className="w-4 h-4 mr-5" src={assets.clock_icon} alt="Duration" />
                  </div>
                </div>
                <div className="mt-6">
                  <SongListItem setCurrentSong={setCurrentSong}/>
                </div>
              </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default FavoritesSongs;
