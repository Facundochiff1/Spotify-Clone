import { assets } from "../../assets/assets";
import PlayerSongCard from "../cards/PlayerSongCard";
import type { Song } from "../../types/songType";

type PlayerProps = {
  currentSong?: Song | null;
  isPlaying?: boolean;
  togglePlay?: () => void;
}

function Player({ currentSong, isPlaying, togglePlay }: PlayerProps) {
  return (
    <footer className='h-[80px] w-screen bg-black flex items-center text-white px-4 relative'>
      <div className='flex'>
        {currentSong && (
          <div className="mt-2 mb-2">
            <PlayerSongCard src={currentSong.src} title={currentSong.title} artist={currentSong.artist} />
          </div>
        )}
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1'>
        <div className='flex gap-6 items-center'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle control" />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="Prev song control" />
          <div className="flex items-center bg-white w-8 h-8 rounded-full justify-center">
            <button className="cursor-pointer ml-0.5" onClick={togglePlay}>
              <img src={isPlaying ? assets.pause_icon : assets.play_icon} className="w-4 h-4" alt="Play/Pause control" />
            </button>
          </div>
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt="Next song control" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop control" />
        </div>
        <div className='flex items-center gap-4 mt-1'>
          <p className="text-[14px]">0:15</p>
          <input min={0} max={100} value={0} type="range" className="w-[500px] h-1 bg-gray-400 rounded-lg appearance-none" />
          <p className="text-[14px]">4:20</p>
        </div>
      </div>
      <div className="flex gap-6 items-center cursor-pointer ml-auto mt-2">
        <img src={assets.plays_icon} alt="Play" className="w-[18px] h-[18px]" />
        <img src={assets.mic_icon} alt="Lyrics" className="w-[18px] h-[18px]" />
        <img src={assets.queue_icon} alt="Queue" className="w-[18px] h-[18px]" />
        <img src={assets.speaker_icon} alt="Connect" className="w-[18px] h-[18px]" />

        <div>
          <img src={assets.volume_icon} alt="Volume control" className="w-4 h-4" />
        </div>
        <div className='w-[100px] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
          <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
        </div>
        <img src={assets.zoom_icon} alt="Zoom" className="w-4 h-4" />
      </div>
    </footer>
  )
}
export default Player;