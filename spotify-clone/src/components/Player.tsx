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
        <footer className="fixed  bottom-0 left-0 w-full z-50 bg-black flex items-center justify-between text-white h-[90px] ">
            <div className="w-1/3 hidden lg:flex items-center">
                <PlayerSongCard title="The Void" artist="Muse" src="https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6"/>
            </div>

            <div className="w-1/3 flex flex-col items-center mt-2">
                <div className="flex items-center justify-center gap-6">
                    <img className="w-4 cursor-pointer" src={shuffle_icon} />
                    <img className="w-4 cursor-pointer" src={prev_icon} />
                    <div className=" rounded-full p-2">
                        <img className="w-5 cursor-pointer" src={play_icon} />
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