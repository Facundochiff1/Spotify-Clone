import DisplayHome from "./DisplayHome";
import SongCard from "./SongCard";
import SongCardContainer from "./SongCardContainer";
import ButtonsDisplay from "./ButtonsDisplay";
import AlbumCard from "./AlbumCard";
import ALbumCardContainer from "./AlbumCardContainer";
import type { Song } from "../types/songType";
import { Link } from "react-router";

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
  listeners: string;
  year: string;
  duration: string
  artist: string
  title?: string
};

type createdForSection = {
  description: string;
  src: string;
  id: number;
  listeners: string;
  year: string;
  duration: string
  artist: string
  title?: string
};

type favouriteArtistsSection = {
  description: string;
  src: string;
  id: number;
  listeners: string;
  year: string;
  duration: string
  artist: string
  title?: string
}

export type Response = {
  forYou: {
    title: string;
    description: string;
    sidebarSongs: sidebarSongs[];
    createdForSection: createdForSection[];
    heardAgainSection: heardAgainSection[];
    favouriteArtistsSection: favouriteArtistsSection[];
  };
};

export const response: Response = {
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
        id: 9,
        title: 'Giros',
        description: 'Fito Páez',
        src: 'https://i.scdn.co/image/ab67616d00001e02921417baf700cc9da1d43b80',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Fito Páez'
      },
      {
        id: 10,
        title: 'Taki Taki',
        description: 'Reggaeton Hits',
        src: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84962ce48d76ca903bff40df00',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 11,
        title: 'Crimen',
        description: 'Gustavo Cerati',
        src: 'https://yt3.googleusercontent.com/MrY2zTBlAeC-qrElJB8JY_a3QcSz7BJA_x3-00QyoSWSnejNsGgmmoexiWf1sQf5-NOSIURlYA=s900-c-k-c0x00ffffff-no-rj',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 12,
        title: 'Airbag',
        description: 'Airbag',
        src: 'https://d22fxaf9t8d39k.cloudfront.net/2e78816a7bdc64af74ed56942ba0157dc94380413a79d8937c303eebe05d083420700.png',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
    ],
    heardAgainSection: [
      {
        id: 13,
        description: 'Artic Monkeys',
        src: 'https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 14,
        description: 'Coldplay',
        src: 'https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 15,
        description: 'By the Way',
        src: 'https://i.scdn.co/image/ab67616d0000b273fdbcee40748537ff80a7af70',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 16,
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
    ],
    favouriteArtistsSection: [
      {
        id: 17,
        description: 'Guns N Roses',
        src: 'https://umusicstore.com.ar/cdn/shop/files/51vA9Ga_RSL.jpg?v=1698775521',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 18,
        description: 'Guns N Roses',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PjLHqfSE46Ae8Cwd4kk53Lduq4x0gKt7kA&s',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 19,
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
      },
      {
        id: 20,
        description: 'Muse',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHQPpXTKfNeROXnH9j7tj4nn8Kd-grc9MXQ&s',
        duration: '2:24',
        year: '1998',
        listeners: '22,876,234',
        artist: 'Soda Stereo'
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
      <div className="flex flex-col ">
        <div>
          <SongCardContainer>
            {forYou.sidebarSongs.map((sidebarSong) => {
              return (
                <SongCard
                id={sidebarSong.id}
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
                <Link key={createdFor.id} to={`/song/${createdFor.id}`}>
                  <AlbumCard
                  key={createdFor.id}
                  title={createdFor.description}
                  artist={createdFor.description}
                  description={createdFor.description}
                  src={createdFor.src}
                  setCurrentSong={setCurrentSong}
                  setIsPlaying={setIsPlaying}
                  />
                </Link>

              )
            })}
          </ALbumCardContainer>
          <ALbumCardContainer title="Recently heard">
            {forYou.heardAgainSection.map((heardAgain) => {
              return (
                <Link key={heardAgain.id} to={`/song/${heardAgain.id}`}>
                  <AlbumCard
                  key={heardAgain.id}
                  title={heardAgain.description}
                  artist={heardAgain.description}
                  description={heardAgain.description}
                  src={heardAgain.src}
                  setCurrentSong={setCurrentSong}
                  setIsPlaying={setIsPlaying}
                  />
                </Link>
              )
            })}
          </ALbumCardContainer>
          <ALbumCardContainer title="Your favourite artists">
            {forYou.favouriteArtistsSection.map((favouriteArtists) => {
              return (
                <Link key={favouriteArtists.id} to={`/song/${favouriteArtists.id}`} >
                  <AlbumCard
                    key={favouriteArtists.id}
                    title={favouriteArtists.description}
                    artist={favouriteArtists.description}
                    description={favouriteArtists.description}
                    src={favouriteArtists.src}
                    setCurrentSong={setCurrentSong}
                    setIsPlaying={setIsPlaying}
                  />
                </Link>
              )
            })}
          </ALbumCardContainer>
        </div>
      </div>
    </main>
  );
}

export default Display;
