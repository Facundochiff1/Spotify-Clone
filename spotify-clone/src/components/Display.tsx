import DisplayHome from "./DisplayHome";
import SongCard from "./SongCard";
import SongCardContainer from "./SongCardContainer";
import ButtonsDisplay from "./ButtonsDisaplay";
import AlbumCard from "./AlbumCard";
import ALbumCardContainer from "./AlbumCardContainer";

type mainAlbumsSongs = {
  description: string;
  src: string;
  id: number;
};

type sidebarSongs = {
  id: number;
  title: string;
  description: string;
  src: string;
  artist: string;
};

type Response = {
  forYou: {
    title: string;
    description: string;
    sidebarSongs: sidebarSongs[];
    mainAlbumsSongs: mainAlbumsSongs[];
  };
};

const response: Response = {
  forYou: {
    title: 'For you',
    description: 'Recomended for you',
    sidebarSongs: [
      {
        id: 1,
        title: 'Paseando por Roma',
        description: 'Song',
        artist: 'Soda Stereo',
        src: 'https://cdn-images.dzcdn.net/images/cover/cf1b043581e3712269787b0cbc833b00/1900x1900-000000-80-0-0.jpg',
      },
      {
        id: 2,
        title: 'Comfortably Numb',
        description: 'Song',
        artist: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf',
      },
      {
        id: 3,
        title: 'Jump',
        description: 'Song',
        artist: 'Van Halen',
        src: 'https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed',
      },
      {
        id: 4,
        title: 'Será',
        description: 'Song',
        artist: 'Las Pelotas',
        src: 'https://i.scdn.co/image/ab67616d0000b273bb0ebefc4052bc1faab428b3',
      },
      {
        id: 5,
        title: 'Madness',
        description: 'Song',
        artist: 'Muse',
        src: 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9',
      },
      {
        id: 6,
        title: 'Parque Acuático',
        description: 'Song',
        artist: 'El Kuelgue',
        src: 'https://www.cmtv.com.ar/tapas-cd/0200191001609454008.webp',
      },
      {
        id: 7,
        title: 'En el séptimo día',
        description: 'Song',
        artist: 'Soda Stereo',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQloiMnyRVId1JSxJH1a301VCKdL0mt9lq7A&s',
      },
      {
        id: 8,
        title: 'Simulation Theory',
        description: 'Album',
        artist: 'Muse',
        src: 'https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6',
      },
    ],
    mainAlbumsSongs: [
      {
        id: 1,
        description: 'Soda Stereo, Gustavo Cerati, Las Pelota sdasdasdasdsadasdas',
        src: 'https://cdn-images.dzcdn.net/images/cover/cf1b043581e3712269787b0cbc833b00/1900x1900-000000-80-0-0.jpg',
      },
    ]
  },
};

function Display() {
  const { forYou } = response;
  return (
    <main className="bg-[#121212] w-[100%] m-2 mr-0 ml-0 px-9 rounded-[9px] text-white lg:w-[75%]">
      <DisplayHome />
      <ButtonsDisplay />
      <div className="flex flex-col">
        <div>
          <SongCardContainer>
            {forYou.sidebarSongs.map((sidebarSong) => {
              return (
                <SongCard
                  key={sidebarSong.id}
                  title={sidebarSong.title}
                  src={sidebarSong.src}
                />
              );
            })}
          </SongCardContainer>
        </div>
        <div className="mt-14">
          <ALbumCardContainer title="Creado Para Facu">
             {forYou.mainAlbumsSongs.map((mainAlbumSong) => {
              return(
                <AlbumCard 
                  key={mainAlbumSong.id}
                  description={mainAlbumSong.description}
                  src={mainAlbumSong.src}
                />
              )
             })}
          </ALbumCardContainer>
        </div>
      </div>
    </main>
  );
}

export default Display;
