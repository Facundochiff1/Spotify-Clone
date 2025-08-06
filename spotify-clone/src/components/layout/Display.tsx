import DisplayHome from "./DisplayHome";
import SongCard from "../cards/SongCard";
import SongCardContainer from "../cards/SongCardContainer";
import ButtonsDisplay from "../buttons/ButtonsDisplay";
import AlbumCard from "../cards/AlbumCard";
import ALbumCardContainer from "../album/AlbumCardContainer";
import type { Song } from "../../types/songType";
import { Link } from "react-router";
import { musicService } from "../../data/service";
import { useQuery } from "@tanstack/react-query";
import { musicDB } from "../../data/music";

type DisplayProps = {
  setCurrentSong?: (song: Song) => void;
  setIsPlaying?: (isPlaying: boolean) => void;
}
function Display({ setCurrentSong, setIsPlaying }: DisplayProps) {

  const { isLoading, isError, error } = useQuery({
    queryKey: ['songs'],
    queryFn: musicService.getAllSongs
  })

  if (isLoading) {
    return(
      <main className="flex w-full justify-center items-center h-full text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-l-2 border-white"></div>
      </main>
    )
  }
  if (isError) {
    return(
      <main className="flex w-full justify-center items-center h-full text-white">
        <div className="">Something went wrong... {error?.message}</div>
      </main>
    )
  }

  return (
    <main className="bg-[#121212] max-w-[1200px] w-[100%] m-2 mr-0 ml-0 px-8 rounded-[9px] text-white lg:w-[75%] overflow-y-auto">
      <DisplayHome />
      <ButtonsDisplay />
      <div className="flex flex-col ">
        <div>
          <SongCardContainer>
            {musicDB.forYou.sidebarSongs.map((sidebarSong) => {
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
            {musicDB.forYou.createdForSection.map((createdFor) => {
              return (
                <Link key={createdFor.id} to={`/song/${createdFor.id}`}>
                  <AlbumCard
                    key={createdFor.id}
                    title={createdFor.title}
                    src={createdFor.src}
                    setCurrentSong={setCurrentSong}
                    setIsPlaying={setIsPlaying}
                  />
                </Link>
              )
            })}
          </ALbumCardContainer>
          <ALbumCardContainer title="Recently heard">
            {musicDB.forYou.heardAgainSection.map((heardAgain) => {
              return (
                <Link key={heardAgain.id} to={`/song/${heardAgain.id}`}>
                  <AlbumCard
                    key={heardAgain.id}
                    title={heardAgain.title}
                    src={heardAgain.src}
                    setCurrentSong={setCurrentSong}
                    setIsPlaying={setIsPlaying}
                  />
                </Link>
              )
            })}
          </ALbumCardContainer>
          <ALbumCardContainer title="Your favourite artists">
            {musicDB.forYou.favouriteArtistsSection.map((favouriteArtists) => {
              return (
                <Link key={favouriteArtists.id} to={`/song/${favouriteArtists.id}`} >
                  <AlbumCard
                    key={favouriteArtists.id}
                    title={favouriteArtists.title}
                    src={favouriteArtists.src}
                    setCurrentSong={setCurrentSong}
                    setIsPlaying={setIsPlaying}
                  />
                </Link>
              )
            })}
          </ALbumCardContainer>
          <ALbumCardContainer title="New releasses">
            {musicDB.forYou.discoverNewMusic.map((discoverNewMusic) => {
              return (
                <Link key={discoverNewMusic.id} to={`/song/${discoverNewMusic.id}`} >
                  <AlbumCard
                    key={discoverNewMusic.id}
                    title={discoverNewMusic.title}
                    src={discoverNewMusic.src}
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