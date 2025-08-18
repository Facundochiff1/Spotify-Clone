import { assets } from "../../assets/assets";
import PlayerSongCard from "../cards/PlayerSongCard";
import type { Song } from "../../types/songType";
import { useEffect, useRef, useState } from "react";

type PlayerProps = {
  currentSong?: Song | null;
  isPlaying?: boolean;
  togglePlay?: () => void;
}

function Player({ currentSong, isPlaying, togglePlay }: PlayerProps) {
  const [volume, setVolume] = useState(1);
  const duration = 0
  const currentTime = 0
  const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.play();
        else audioRef.current.pause();
    }, [isPlaying]);

    useEffect(() => {
        if (!audioRef.current || !currentSong) return;
        audioRef.current.src = currentSong.src;
        if (isPlaying) audioRef.current.play();
    }, [currentSong]);

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
            <audio src={assets.audio} ref={audioRef} />
          </div>
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt="Next song control" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop control" />
        </div>
        <div className='flex items-center gap-4 mt-1'>
          <p className="text-[14px]">{formatTime(currentTime)}</p>
          <input min={0} max={duration} value={currentTime} type="range" className="w-[500px] h-1 hover:bg-green-500 bg-white accent-white rounded-lg appearance-none" />
          <p className="text-[14px]">{formatTime(duration)}</p>
        </div>
      </div>
      <div className="flex gap-5 items-center cursor-pointer ml-auto mt-2">
        <img src={assets.plays_icon} alt="Play" className="w-[18px] h-[18px]" />
        <img src={assets.mic_icon} alt="Lyrics" className="w-[18px] h-[18px]" />
        <img src={assets.queue_icon} alt="Queue" className="w-[18px] h-[18px]" />
        <img src={assets.speaker_icon} alt="Connect" className="w-[18px] h-[18px]" />

        <div>
          <img src={assets.volume_icon} alt="Volume control" className="w-4 h-4" />
        </div>
        <div className='flex h-1 '>
          <input className="bg-white hover:bg-green-500  rounded cursor-pointer accent-white appearance-none"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => {
              const newVolume = parseFloat(e.target.value) 
              setVolume(newVolume)
              if(audioRef.current) {
                audioRef.current.volume = newVolume
              }
            }}
          />
        </div>
        <img src={assets.zoom_icon} alt="Zoom" className="w-4 h-4" />
      </div>
    </footer>
  )
}
function formatTime(time: number) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
export default Player;