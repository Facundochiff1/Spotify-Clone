import { assets } from "../assets/assets";

type NavbarProps = {
    user: string;
};


function Navbar(props: NavbarProps) {
    const {user} = props
    return(
        <nav className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left}/>
                <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right}/>
            </div>
            <div className="flex items-center gap-4">
                <button className="bg-white text-black text-[15px] px-4 py-1.5 rounded-2xl hidden md:block cursor-pointer hover:bg-[#e6e6e6]">Explore premium</button>
                <button className="bg-black px-3 py-1 rounded-2xl text-[15px] cursor-pointer hover:bg-[#0c0c0c]">Install App</button>
                <p className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold cursor-pointer">{user}</p>               
            </div>
        </nav>
        
    )
}

export default Navbar;