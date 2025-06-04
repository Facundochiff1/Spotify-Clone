import { assets } from "../assets/assets";

function Navbar() {
  return (
    <nav className="relative mt-1.5 top-0 left-0 w-full bg-[#000000] h-[60px] flex items-center px-4">
      <div className="flex items-center gap-4 ml-1 z-10">
        <img className="h-6 cursor-pointer" src={assets.elipsis_icon} alt="Menú" />
        <img className="w-5 h-5 cursor-pointer" src={assets.arrow_left} alt="Back" />
        <img className="w-5 h-5 cursor-pointer" src={assets.arrow_right} alt="Forward" />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3 w-[650px] max-w-[90%]">
        <div className="h-14 w-16 bg-[#1f1f1f] hover:bg-[#313030] rounded-full flex items-center justify-center cursor-pointer">
          <img className="h-8 w-8" src={assets.home_icon} alt="Home" />
        </div>

        <div className="flex items-center bg-[#1f1f1f] hover:bg-[#313030] rounded-full w-full h-14 px-4">
          <img className="h-6 mr-2" src={assets.search_icon} alt="Search" />
          <input
            className="w-full bg-transparent text-white placeholder:font-semibold placeholder:text-[17px] placeholder:text-gray-400 focus:outline-none"
            type="text"
            placeholder="¿Qué quieres reproducir?"/>
          <div className="flex items-center gap-2 pl-4">
            <img className="h-4" src={assets.line_icon} alt="line" />
            <img className="h-5 w-5 cursor-pointer" src={assets.folder_icon} alt="folder" />
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-8">
        <div className="flex items-center gap-8 mr-2">
          <img className="w-4 h-4 cursor-pointer" src={assets.bell_icon} alt="News" />
          <img className="w-5 mt-1.5 h-6 cursor-pointer" src={assets.people_icon} alt="Friends activity" />
          <span className="bg-[#b678b3] px-3 py-1 text-black font-bold rounded-full flex items-center justify-center h-8 w-8 cursor-pointer">F</span>
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <img className="w-3 h-3" src={assets.minus_icon} alt="Minimize" />
          <img className="w-3 h-3" src={assets.square_icon} alt="Maximize" />
          <img className="w-3 h-3" src={assets.quit_icon} alt="Quit" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
