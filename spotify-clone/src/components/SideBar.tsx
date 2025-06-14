import { assets } from "../assets/assets";
import ButtonsSidebar from "./ButtonsSidebar";
import SidebarSongCard from "./SidebarSongCard";


type Playlist = {
  id: number;
  title: string;
  description: string;
  src: string;
  creator: string;
};

type Response = {
  recents: {
    playlists: Playlist[];
  };
};

const response: Response = {
  recents: {
    playlists: [
    {
    id: 1,
    title: 'Comfort y música para volar',
    description: 'Album',
    creator: 'Facu:)',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_WWMpCJqDow8S_m61oYCtF7mtFdrbAKpZQ&s',
    },
    {
    id: 2,
    title: 'Bocanada',
    description: 'Album',
    creator: 'Gustavo Cerati',
    src: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/06/25093705/Gustavo-Cerati-Bocanada.jpg',
    },
    {
    id: 3,
    title: 'The 2nd Law',
    description: 'Album',
    creator: 'Muse',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztAIl-I7f7ajV2E8GflLK9qbBaonkAr4t4g&s',
    },
    {
    id: 4,
    title: 'Progressive Techno Mix',
    description: 'Playlist',
    creator: 'Spotify',
    src: 'https://i1.sndcdn.com/artworks-DOjE5pBIbL55JFqB-FzqU9g-t1080x1080.jpg',
    },
    {
    id: 5,
    title: 'FFP Muse',
    description: 'Playlist',
    creator: 'Pablin',
    src: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/12Chz98pHFMPJEknJQMWvI/en',
    },
    {
    id: 6,
    title: 'Rock Nacional',
    description: 'Playlist',
    creator: 'Spotify',
    src: 'https://i0.wp.com/delacalle.org/wp-content/uploads/2016/09/14203027_1670848669899820_655105843_o.jpg?fit=1600%2C1000&ssl=1',
    },
    {
    id: 7,
    title: 'Canción Animal',
    description: 'Album',
    creator: 'Soda Stereo',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQloiMnyRVId1JSxJH1a301VCKdL0mt9lq7A&s',
    },
    {
    id: 8,
    title: 'Californication',
    description: 'Album',
    creator: 'Red Hot Chilli Peppers',
    src: 'https://http2.mlstatic.com/D_Q_NP_968611-MLA82474746189_022025-O.webp',
    },
    {
    id: 9,
    title: 'The Getaway',
    description: 'Album',
    creator: 'Red Hot Chilli Peppers',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7OJRXCj8PjjCBAIgdMVYRuf3h39bv5MQEw&s',
    },
    {
    id: 10,
    title: 'In Utero',
    description: 'Album',
    creator: 'Nirvana',
    src: 'data:image/jpeg;base64,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',
    },
    {
    id: 11,
    title: 'Hump de Bump',
    description: 'Album',
    creator: 'Red Hot Chili Peppers',
    src: 'https://http2.mlstatic.com/D_NQ_NP_722456-MLM26487675893_122017-O.webp',
    },
    ],
  },
};


function SideBar() {
  const { recents } = response;

  return (
    <aside className="w-[32%] p-1 m-2 flex-col text-white flex lg:flex bg-[#121212] rounded-[9px]">
      <nav className="flex items-center justify-between rounded-t-[9px] p-4 px-5 py-3">
        <h1 className="text-[18px] font-bold">Your library</h1>
        <div className="flex items-center mt-0.5 gap-4">
          <button className="flex items-center justify-center border bg-[#2e2d2d86] border-[#2e2d2d86] cursor-pointer rounded-full h-[38px] px-4.5 gap-2">
            <img className="flex h-4" src={assets.plus_icon} />
            <span className="font-bold">Create</span>
          </button>
          <img className="w-4.5 mr-2 cursor-pointer" src={assets.zoom_icon} />
        </div>
      </nav>

      <section className="flex flex-col flex-1 rounded-b-[8px] overflow-hidden">
        <header className="p-2 px-4 flex items-center">
          <ButtonsSidebar />
        </header>
        <div className="flex items-center justify-between px-4 py-1">
          <div className="flex items-center cursor-pointer hover:bg-[#5e5e5e8f] rounded-full p-2">
            <img
              className="w-[20px] h-[20px]"
              src={assets.search_icon}
              alt="Search"
            />
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span className="text-gray-300 hover:text-white">Recent</span>
            <img className="w-5 h-6 mt-0.5" src={assets.list_icon} alt="Recent list" />
          </div>
        </div>
        <div className="px-2 overflow-y-auto flex-1 mt-2">
          {recents.playlists.map((playlist) => {
            return (
              <SidebarSongCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                creator={playlist.creator}
                src={playlist.src}
              />
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export default SideBar;

