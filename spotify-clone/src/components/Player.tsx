import { assets } from "../assets/assets";
import PlayerSongCard from "./PlayerSongCard";

function Player() {

    return (
        <footer className='h-[70px] w-screen bg-black flex items-center text-white px-4 relative'>
            <div className='flex'>
                <div className="">
                    <PlayerSongCard src="https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9" title="Survival" artist="Muse"/>
                </div>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1'>
                <div className='flex gap-6 items-center'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Suffle control" />
                    <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="Prev song control" />
                    <img className='w-4 cursor-pointer' src={assets.play_icon} alt="Play control" />
                    <img className='w-4 cursor-pointer' src={assets.next_icon} alt="Next song control" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop control" />
                </div>
                <div className='flex items-center gap-4 mt-1'>
                    <p className="text-[14px]">0:15</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p className="text-[14px]">4:20</p>
                </div>
            </div>
            <div className="flex gap-5 items-center cursor-pointer ml-auto">
                <img src={assets.plays_icon} alt="Play" className="w-4 h-4" />
                <img src={assets.mic_icon} alt="Lyrics" className="w-4 h-4" />
                <img src={assets.queue_icon} alt="Queue" className="w-4 h-4" />
                <img src={assets.speaker_icon} alt="Connect" className="w-4 h-4" />
                
                <div className="">
                    <img src={assets.volume_icon} alt="Volume control" className="w-4 h-4" />
                </div>
                <div className='w-[100px] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
                </div>
                <img src={assets.zoom_icon} alt="Zoom" className="w-4 h-4"/>
            </div>
        </footer>
    )
}

export default Player