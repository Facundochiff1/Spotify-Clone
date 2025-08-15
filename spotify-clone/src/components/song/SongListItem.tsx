import { musicDB } from "../../data/music";
import type { Song } from "../../types/songType";

type SongListItemProps = {
  setCurrentSong: (song: Song) => void;
};

function SongListItem({ setCurrentSong }: SongListItemProps) {
    return (
        musicDB.forYou.songListItem.map((song) => {
            return (
                <div onClick={() => setCurrentSong(song)} key={song.id} className="flex items-center text-[15px] mb-2 hover:bg-[#5c5c5c63] rounded p-2 cursor-pointer">
                    <h1 className="w-8 flex-shrink-0 text-right pr-3">{song.id}</h1>
                    <img className="w-12 h-12 rounded-[5px] mr-3 flex-shrink-0" src={song.src} alt={song.title || 'Canción'} />
                    <div className="flex flex-col flex-grow min-w-0 max-w-[calc(35%_-_70px)] mr-10 text-left">
                        <h1 className="truncate text-white">{song.title}</h1>
                        <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                    </div>
                    <div className="w-[26%] text-gray-400 truncate ml-4 text-left">
                        <p>{song.album}</p>
                    </div>
                    <div className="w-[17%] text-gray-400 text-right truncate mr-4">
                        <p className="mr-3.5">{song.date}</p>
                    </div>
                    <div className="w-[10%] text-gray-400 text-right ml-3.5">
                        <p>{song.duration}</p>
                    </div>
                </div>
            )
        })
    )
}

export default SongListItem;