import { assets } from "../assets/assets";

function Navbar() {
  return (
    <nav className="fixed top-0  left-0 w-full z-50 bg-[#000000] flex items-center justify-between px-4 h-[60px]">

      <div className="flex ml-2 mt-1 gap-5 items-center">
        <img className="mt-1 h-6 cursor-pointer" src={assets.elipsis_icon} alt="Menú" />
        <div className="flex gap-3">
          <img className="w-5 h-5 cursor-pointer" src={assets.arrow_left} alt="Advance"/>
          <img className="w-5 h-5 cursor-pointer" src={assets.arrow_right} alt="Back"/>
        </div>
      </div>
      
      <div className="flex mt-2  ml-42 justify-center items-center gap-2">
        <div className="px-3 py-3 hover:bg-[#313030] cursor-pointer bg-[#1f1f1f] rounded-full">
          <img className="h-7 w-8" src={assets.home_icon}/>
        </div>

        <div className="flex items-center gap-4 bg-[#1f1f1f] min-w-[510px] max-w-[700px] w-full px-3 py-3.5 rounded-full hover:bg-[#313030]">
          <img className="h-[25px] cursor-pointer" src={assets.search_icon} alt="navbar search icon" />
          <input className="w-full placeholder:font-semibold placeholder:text-[17px] placeholder:text-gray-400 focus:outline-none focus:ring-0" type="text" placeholder="¿What do you want to listen to?"/>
          
          <div className="flex items-center px-4">
            <img className="ml-3 h-5" src={assets.line_icon} alt="navbar line right"/>
            <img className="h-6 w-7 cursor-pointer" src={assets.folder_icon} alt="folder navbar"/>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[50px] px-3.5">
        <div className="flex items-center gap-[30px]">
          <img className="w-4 h-4" src={assets.bell_icon} alt="News"/>
          <img className="w-5 h-6 mt-2" src={assets.people_icon} alt="Friends activity"/>
          <span className="bg-[#b678b3] px-3 py-1 text-black font-bold rounded-full flex items-center justify-center h-8 w-8">F</span>
        </div>
        
        
        <div className="flex gap-[27px]">
          <img  className="w-3 h-3" src={assets.minus_icon} alt="Minimize" />
          <img className="w-3 h-3" src={assets.square_icon} alt="Maximize" />
          <img className="w-3 h-3" src={assets.quit_icon} alt="Quit" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
