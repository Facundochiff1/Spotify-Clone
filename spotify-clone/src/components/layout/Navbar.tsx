import { Link } from "react-router";
import { assets } from "../../assets/assets";
import { useState, useRef } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const songs = [
    { id: 1, title: "I Wanna Be Yours ", artist: "Arctic Monkeys", src: "https://i.scdn.co/image/ab67616d0000b2730b4f0565f8a790f5105aeb1c" },
    { id: 2, title: "En el séptimo día ", artist: "Soda Stereo" },
    { id: 3, title: "Young Lust ", artist: "Pink Floyd" },
    { id: 4, title: "Another Brick in the Wall ", artist: "Pink Floyd" },
    { id: 5, title: "Bohemian Rhapsody ", artist: "Queen" },
    { id: 6, title: "Smells Like Teen Spirit ", artist: "Nirvana" },
    { id: 7, title: "Sweet Child O' Mine ", artist: "Guns N' Roses" },
    { id: 8, title: "Back in Black ", artist: "AC/DC" },
    { id: 9, title: "Paint It Black ", artist: "The Rolling Stones" },
    { id: 10, title: "Come Together ", artist: "The Beatles" },
    { id: 11, title: "Highway to Hell ", artist: "AC/DC" },
    { id: 12, title: "Creep ", artist: "Radiohead" },
    { id: 13, title: "In The End ", artist: "Linkin Park" },
    { id: 14, title: "Californication ", artist: "Red Hot Chili Peppers" },
    { id: 15, title: "Killing in the Name ", artist: "Rage Against the Machine" },
    { id: 16, title: "Wish You Were Here ", artist: "Pink Floyd" },
    { id: 17, title: "Hotel California ", artist: "Eagles" },
    { id: 18, title: "The Pretender ", artist: "Foo Fighters" },
    { id: 19, title: "Under the Bridge", artist: "Red Hot Chili Peppers" },
    { id: 20, title: "La ciudad de la furia", artist: "Soda Stereo" }
  ];

  const filterSong = (value: string) => {
    setSearch(value);
  }

  const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <nav className="relative mt-1.5 top-0 left-0 w-full bg-[#000000] h-[60px] flex items-center px-4">
      <div className="flex items-center gap-4 ml-1 z-10">
        <img className="h-6 cursor-pointer" src={assets.elipsis_icon} alt="Menú" />
        <img className="w-5 h-5 cursor-pointer" src={assets.arrow_left} alt="Back" />
        <img className="w-5 h-5 cursor-pointer" src={assets.arrow_right} alt="Forward" />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3 w-[650px] max-w-[90%] z-50">
        <Link to="/" className="h-14 w-16 bg-[#1f1f1f] hover:bg-[#313030] rounded-full flex items-center justify-center cursor-pointer">
          <img className="h-8 w-8" src={assets.home_icon} alt="Home" />
        </Link>

        <div className="flex items-center bg-[#1f1f1f] hover:bg-[#313030] rounded-full w-full h-14 px-4">
          <img className="h-6 mr-2" src={assets.search_icon} alt="Search" />
          <input
            ref={input}
            className="w-full bg-transparent text-white placeholder:font-semibold placeholder:text-[17px] placeholder:text-gray-400 focus:outline-none"
            type="text"
            onChange={(e) => filterSong(e.target.value)}
            placeholder="What do you want to listen to?" />

          <div className="flex items-center gap-2 pl-4">
            <img className="h-4" src={assets.line_icon} alt="Line" />
            <img className="h-5 w-5 cursor-pointer" src={assets.folder_icon} alt="Folder" />
          </div>
        </div>
        {search && (
          <ul className="absolute top-16 left-[55%] items-center transform -translate-x-1/2 bg-[#252525] w-[580px] max-w-[100%] rounded-lg shadow-lg p-4 max-h-[500px] overflow-x-auto">
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song) => (
                <li
                  key={song.id}
                  className="mt-3 p-3 py-3.5 flex flex-col items-start bg-[#121212] w-[400px] h-[75px] hover:bg-[#313030] rounded cursor-pointer">
                  <strong>{song.title}</strong> {song.artist}
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic flex items-center justify-center">No hay resultados</li>
            )}
          </ul>
        )}
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