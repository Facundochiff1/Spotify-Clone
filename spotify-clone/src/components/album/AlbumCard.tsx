import type { Song } from "../../types/songType";

type AlbumCardProps = {
  description?: string;
  src: string;
  title?: string;
  artist?: string;
  setCurrentSong?: (song: Song) => void;
  setIsPlaying?: (isPlaying: boolean) => void;
}

function AlbumCard({ src, title }: AlbumCardProps) {

  return (
    <div className="group relative p-4 flex flex-col rounded-md hover:bg-white/10 transition duration-100">
      <div>
        <img className="w-[180px] h-[170px] object-cover rounded-[4px]" src={src} alt="Album image" />
        <button className="absolute right-[30px] top-7/11 -translate-y-2/3 bg-green-500 rounded-full w-[45px] h-[45px] flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-green-400 cursor-pointer transition-opacity duration-100 text-black ">▶</button>
      </div>
      <h1 className="text-gray-400 mt-2 line-clamp-2 text-left">{title}</h1>
    </div>
  )
}

export default AlbumCard