import { assets } from "../assets/assets";
import PlayerSongCard from "./PlayerSongCard";

type PlayerProps = {
    time: string;
    timeLeft: string;
};

function Player(props: PlayerProps) {
    const { time, timeLeft } = props;
    const { shuffle_icon, prev_icon, next_icon, loop_icon, play_icon } = assets;

    return (
        <footer className="h-[10%] bg-black flex items-center justify-between text-white">
            <div className="w-1/3 hidden lg:flex items-center">
                <PlayerSongCard title="Musica para volar" artist="Soda Stereo" src="https://i.scdn.co/image/ab67616d0000b2733875f29a2a8234ac7ef2706a"/>
            </div>

            <div className="w-1/3 flex flex-col items-center mt-2">
                <div className="flex items-center justify-center gap-6">
                    <img className="w-4 cursor-pointer" src={shuffle_icon} />
                    <img className="w-4 cursor-pointer" src={prev_icon} />
                    <div className="bg-white rounded-full p-2">
                        <img className="w-4 cursor-pointer" src={play_icon} />
                    </div>
                    <img className="w-4 cursor-pointer" src={next_icon} />
                    <img className="w-4 cursor-pointer" src={loop_icon} />
                </div>

                <div className="flex items-center mt-2 gap-4 w-full max-w-[600px]">
                    <span className="text-xs">{time}</span>
                    <div className="relative w-full h-1 bg-neutral-700 rounded">
                        <div className="absolute h-1 bg-white rounded w-[60%]"></div>
                    </div>
                    <span className="text-xs">{timeLeft}</span>
                </div>
            </div>
            <div className="w-1/3 hidden lg:flex justify-end pr-4">
            
            </div>
        </footer>
    );
}

export default Player;