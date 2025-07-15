import DisplayHome from "./DisplayHome";
import SongCard from "./SongCard";
import SongCardContainer from "./SongCardContainer";
import ButtonsDisplay from "./ButtonsDisplay";
import AlbumCard from "./AlbumCard";
import ALbumCardContainer from "./AlbumCardContainer";
import type { Song } from "../types/songType";

type DisplayProps = {
  setCurrentSong?: (song: Song) => void;
  setIsPlaying?: (isPlaying: boolean) => void;
}

type sidebarSongs = {
  id: number;
  title: string;
  description: string;
  src: string;
  artist: string;
};

type heardAgainSection = {
  description: string;
  src: string;
  id: number;
};

type createdForSection = {
  description: string;
  src: string;
  id: number;
  title?: string
};

type favouriteArtistsSection = {
  description: string;
  src: string;
  id: number;
}

type Response = {
  forYou: {
    title: string;
    description: string;
    sidebarSongs: sidebarSongs[];
    createdForSection: createdForSection[];
    heardAgainSection: heardAgainSection[];
    favouriteArtistsSection: favouriteArtistsSection[];
  };
};

const response: Response = {
  forYou: {
    title: 'For you',
    description: 'Recomended for you',
    sidebarSongs: [
      {
        id: 1,
        title: 'Favoritos',
        description: 'Playlist',
        artist: 'Facu',
        src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
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
    createdForSection: [
      {
        id: 1,
        title: 'Soda Stereo',
        description: 'Soda Stereo',
        src: 'https://cdn-images.dzcdn.net/images/cover/cf1b043581e3712269787b0cbc833b00/1900x1900-000000-80-0-0.jpg',
      },
      {
        id: 2,
        title: 'Taki Taki',
        description: 'Reggaeton Hits',
        src: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84962ce48d76ca903bff40df00',
      },
      {
        id: 3,
        title: 'Crimen',
        description: 'Gustavo Cerati',
        src: 'https://yt3.googleusercontent.com/MrY2zTBlAeC-qrElJB8JY_a3QcSz7BJA_x3-00QyoSWSnejNsGgmmoexiWf1sQf5-NOSIURlYA=s900-c-k-c0x00ffffff-no-rj',
      },
      {
        id: 4,
        title: 'Airbag',
        description: 'Airbag',
        src: 'https://d22fxaf9t8d39k.cloudfront.net/2e78816a7bdc64af74ed56942ba0157dc94380413a79d8937c303eebe05d083420700.png',
      },
    ],
    heardAgainSection: [
      {
        id: 1,
        description: 'Artic Monkeys',
        src: 'https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163',
      },
      {
        id: 2,
        description: 'Coldplay',
        src: 'https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82',
      },
      {
        id: 3,
        description: 'By the Way',
        src: 'https://i.scdn.co/image/ab67616d0000b273fdbcee40748537ff80a7af70',
      },
      {
        id: 4,
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
      },
    ],
    favouriteArtistsSection: [
      {
        id: 1,
        description: 'Guns N Roses',
        src: 'https://umusicstore.com.ar/cdn/shop/files/51vA9Ga_RSL.jpg?v=1698775521',
      },
      {
        id: 2,
        description: 'Guns N Roses',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PjLHqfSE46Ae8Cwd4kk53Lduq4x0gKt7kA&s',
      },
      {
        id: 3,
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0',
      },
      {
        id: 4,
        description: 'Muse',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHQPpXTKfNeROXnH9j7tj4nn8Kd-grc9MXQ&s',
      },
    ]
  },
};

function Display({ setCurrentSong, setIsPlaying }: DisplayProps) {
  const { forYou } = response;
  return (
    <main className="bg-[#121212] w-[100%] m-2 mr-0 ml-0 px-8 rounded-[9px] text-white lg:w-[75%] overflow-y-auto">
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
                  artist={sidebarSong.artist}
                  setIsPlaying={setIsPlaying}
                />
              );
            })}
          </SongCardContainer>
        </div>
        <div>
          <ALbumCardContainer title="Created for Facu:)">
            {forYou.createdForSection.map((createdFor) => {
              return (
                <AlbumCard
                  key={createdFor.id}
                  title={createdFor.description}
                  artist={createdFor.description}
                  description={createdFor.description}
                  src={createdFor.src}
                  setCurrentSong={setCurrentSong}
                  setIsPlaying={setIsPlaying}
                />
              )
            })}
          </ALbumCardContainer>
          <ALbumCardContainer title="Recently heard">
            {forYou.heardAgainSection.map((heardAgain) => {
              return (
                <AlbumCard
                  key={heardAgain.id}
                  title={heardAgain.description}
                  artist={heardAgain.description}
                  description={heardAgain.description}
                  src={heardAgain.src}
                  setCurrentSong={setCurrentSong}
                  setIsPlaying={setIsPlaying}
                />
              )
            })}
          </ALbumCardContainer>
          <ALbumCardContainer title="Your favourite artists">
            {forYou.favouriteArtistsSection.map((favouriteArtists) => {
              return (
                <AlbumCard
                  key={favouriteArtists.id}
                  title={favouriteArtists.description}
                  artist={favouriteArtists.description}
                  description={favouriteArtists.description}
                  src={favouriteArtists.src}
                  setCurrentSong={setCurrentSong}
                  setIsPlaying={setIsPlaying}
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
