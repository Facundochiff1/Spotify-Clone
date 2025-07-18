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

type discoverNewMusic = {
  description: string;
  title: string;
  src: string;
  id: number;
}

export type Response = {
  forYou: {
    title: string;
    description: string;
    sidebarSongs: sidebarSongs[];
    createdForSection: createdForSection[];
    heardAgainSection: heardAgainSection[];
    favouriteArtistsSection: favouriteArtistsSection[];
    discoverNewMusic: discoverNewMusic[];
  };
};

export const response: Response = {
  forYou: {
    title: 'For you',
    description: 'Recomended for you',
    sidebarSongs: [
      {
        id: 1,
        title: 'Favorites',
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
        duration: '3:40',
        year: '1985',
        listeners: '22,876,234',
        artist: 'Fito Páez'
      },
      {
        id: 10,
        title: 'Taki Taki',
        description: 'Reggaeton Hits',
        src: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84962ce48d76ca903bff40df00',
        duration: '3:32',
        year: '2018',
        listeners: '32,875,224',
        artist: 'DJ Snake'
      },
      {
        id: 11,
        title: 'Crimen',
        description: 'Gustavo Cerati',
        src: 'https://yt3.googleusercontent.com/MrY2zTBlAeC-qrElJB8JY_a3QcSz7BJA_x3-00QyoSWSnejNsGgmmoexiWf1sQf5-NOSIURlYA=s900-c-k-c0x00ffffff-no-rj',
        duration: '4:10',
        year: '2006',
        listeners: '18,235,980',
        artist: 'Gustavo Cerati'
      },
      {
        id: 12,
        title: 'Airbag',
        description: 'Airbag',
        src: 'https://d22fxaf9t8d39k.cloudfront.net/2e78816a7bdc64af74ed56942ba0157dc94380413a79d8937c303eebe05d083420700.png',
        duration: '3:50',
        year: '2011',
        listeners: '15,321,411',
        artist: 'Airbag'
      },
    ],
    heardAgainSection: [
      {
        id: 13,
        title: 'Artic Monkeys',
        description: 'Artic Monkeys',
        src: 'https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163',
        duration: '3:18',
        year: '2013',
        listeners: '20,456,234',
        artist: 'Arctic Monkeys'
      },
      {
        id: 14,
        title: 'Coldplay',
        description: 'Coldplay',
        src: 'https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82',
        duration: '4:02',
        year: '2015',
        listeners: '45,876,212',
        artist: 'Coldplay'
      },
      {
        id: 15,
        title: 'By the Way',
        description: 'Red Hot Chili Peppers',
        src: 'https://i.scdn.co/image/ab67616d0000b273fdbcee40748537ff80a7af70',
        duration: '3:36',
        year: '2002',
        listeners: '28,123,567',
        artist: 'Red Hot Chili Peppers'
      },
      {
        id: 16,
        title: 'Pink Floyd',
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
        duration: '5:04',
        year: '1979',
        listeners: '35,432,908',
        artist: 'Pink Floyd'
      },
    ],
    favouriteArtistsSection: [
      {
        id: 17,
        title: 'Guns N Roses',
        description: 'Guns N Roses',
        src: 'https://umusicstore.com.ar/cdn/shop/files/51vA9Ga_RSL.jpg?v=1698775521',
        duration: '5:33',
        year: '1987',
        listeners: '39,876,543',
        artist: 'Guns N\' Roses'
      },
      {
        id: 18,
        title: 'Guns N Roses',
        description: 'Guns N Roses',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PjLHqfSE46Ae8Cwd4kk53Lduq4x0gKt7kA&s',
        duration: '4:20',
        year: '1991',
        listeners: '39,876,543',
        artist: 'Guns N\' Roses'
      },
      {
        id: 19,
        title: 'Pink Floyd',
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0',
        duration: '6:23',
        year: '1973',
        listeners: '35,432,908',
        artist: 'Pink Floyd'
      },
      {
        id: 20,
        title: 'Muse',
        description: 'Muse',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHQPpXTKfNeROXnH9j7tj4nn8Kd-grc9MXQ&s',
        duration: '4:01',
        year: '2015',
        listeners: '25,654,321',
        artist: 'Muse'
      },
    ],
    discoverNewMusic: [
      {
        id: 21,
        title: 'News every friday',
        description: 'Guns N Roses',
        src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vZGM3ZjgwMWY1NzEyZjQzZTMzYmFhYTMzZDI2NDkwYjIzMzA0Mjc2ZC5qcGc=',
      },
      {
        id: 22,
        title: 'Weekly Discovery',
        description: 'Guns N Roses',
        src: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/39MO4rpxkctRc574LExDwQ==/ZGlkaWRpZGlkaWRpZGlkaQ==',
      },
      {
        id: 23,
        title: 'Top 2025',
        description: 'Pink Floyd',
        src: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848bc863a162e124e43902d5e2',
      },
    ],
  },
};

function Display({ setCurrentSong, setIsPlaying }: DisplayProps) {
  const { forYou } = response;
  return (
    <main className="bg-[#121212] max-w-[1200px] w-[100%] m-2 mr-0 ml-0 px-8 rounded-[9px] text-white lg:w-[75%] overflow-y-auto">
      <DisplayHome />
      <ButtonsDisplay />
      <div className="flex flex-col ">
        <div>
          <SongCardContainer>
            {forYou.sidebarSongs.map((sidebarSong) => {
              const card = (
                <SongCard
                  id={sidebarSong.id}
                  key={sidebarSong.id}
                  title={sidebarSong.title}
                  src={sidebarSong.src}
                  artist={sidebarSong.artist}
                  setIsPlaying={setIsPlaying}
                  setCurrentSong={setCurrentSong}
                />
              )              
              if (sidebarSong.id === 1) {
                return (
                  <Link to={'/favorites'}>
                    {card}
                  </Link>
                )
              }
              return card
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