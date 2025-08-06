import AlbumCard from "../cards/AlbumCard";
import ALbumCardContainer from "../album/AlbumCardContainer";
import { musicDB } from "../../data/music";

function CategoryDetailContentCard() {
  return (
    <div className="max-w-[1200px] bg-gradient-to-b from-[#202020d2] via-[#161616c9] to-transparent w-[100%] m-2 mr-0 ml-0 rounded-[9px] text-white lg:w-[75%] overflow-y-auto">
      <section>
        <div>
          <header className="flex items-center h-[450px] bg-gradient-to-b from-[#912fe0d2] via-[#7946f0c9] to-transparent w-full">
            <div className="flex mb-32">
              <h1 className="text-6xl mt-16 font-black px-8">Music</h1>
            </div>
          </header>
          <main className="bg-[#0000001c] backdrop-blur-md p-2 w-full h-screen -mt-34 z-10 overflow-y-auto">
            <div className="flex flex-col items-start justify-center px-2 mt-12">
              <section className="flex flex-col">
                <h2 className="font-bold text-2xl cursor-pointer hover:underline flex px-4">
                  Explore new music
                </h2>
              </section>
              <section className="flex flex-col justify-center items-start">
                <div className="-mt-10">
                  <ALbumCardContainer>
                    {musicDB.forYou.createdForSection.map((createdFor) => {
                      return (
                        <AlbumCard
                          key={createdFor.id}
                          artist={createdFor.description}
                          title={createdFor.title}
                          src={createdFor.src}
                        />
                      );
                    })}
                  </ALbumCardContainer>
                </div>
                <div className="mt-10">
                  <ALbumCardContainer title="Editors Picks">
                    {musicDB.forYou.discoverNewMusic.map((newMusic) => {
                      return (
                        <AlbumCard
                          key={newMusic.id}
                          artist={newMusic.description}
                          title={newMusic.title}
                          src={newMusic.src}
                        />
                      );
                    })}
                  </ALbumCardContainer>
                </div>
              </section>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default CategoryDetailContentCard;
