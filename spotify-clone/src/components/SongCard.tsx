 import type { Song } from "../types/songType";

type SongCardProps = {
  id: number;
  src: string;
  title: string;
  artist: string;
  album?: string; 
  setCurrentSong?: (song: Song) => void;
  setIsPlaying?: (isPlaying: boolean) => void;
}

function SongCard({ src, title, artist, album, setCurrentSong, setIsPlaying }: SongCardProps) {

  const handleClick = () => {
    setCurrentSong?.({ title, src, artist, album: album ?? "" });
    setIsPlaying?.(true);
  }

  return (
    <div className="p-2">
      <div onClick={handleClick} className="group relative flex items-center w-[235px] h-[54px] bg-[#fff]/10 text-white rounded-[5px] hover:bg-gray-800 transition cursor-pointer gap-1">
        <div>
          <img className="w-14 h-13.5 rounded-l object-cover" src={src} />
        </div>
        <div className="flex flex-col justify-center gap-2 ">
          <h2 className="font-semibold p-1">{title}</h2>
          <button className="absolute right-2 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-green-400 cursor-pointer transition-opacity duration-100 text-black ">▶</button>
        </div>
      </div>
    </div>
  )
};

export default SongCard;