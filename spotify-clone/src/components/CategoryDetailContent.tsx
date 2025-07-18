import { Link } from "react-router";
import { categories } from "../types/categoriesType";
import { type Song } from "../types/songType";
import ButtonsDisplay from "./ButtonsDisplay";
import DisplayHome from "./DisplayHome";

type CategoryDetailContentProps = {
    songId: string;
    src?: string;
    title?: string;
    color?: string;
    currentSong?: Song | null;
    isPlayingDetail?: boolean;
    togglePlayDetail?: () => void;
}


function CategoryDetailContent ({}: CategoryDetailContentProps ) {
    return (
        <div className="max-w-[1200px] px-8 bg-gradient-to-b from-[#202020d2] via-[#161616c9] to-transparent w-[100%] m-2 mr-0 ml-0 rounded-[9px] text-white lg:w-[75%] overflow-y-auto">
            <DisplayHome />
            <ButtonsDisplay />
            <section className="flex mt-12 flex-col justify-center w-full gap- ">
                <div className="h-[100px] w-full">
                    <h1 className="text-5xl px-2 py-4 mt-2 font-black flex">Explore all categories</h1>
                </div>
                <section className="h-screen w-full px-2 py-10 bg-[#0e0e0e31]">
                    <div className="flex flex-col justify-center items-start">   
                        <h2 className="font-black mb-4 text-2xl">Music</h2>
                    </div>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {
                            categories.forYou.categoriesSongs.map((category) => {
                                return (
                                    <Link to={`/category/${category.id}`} className={`flex rounded-lg ${category.color} items-start justify-start relative p-5 aspect-video overflow-hidden cursor-pointer`}>
                                        <h2 className="font-bold text-[18px]">{category.titleCategory}</h2>
                                        <img className="w-26 h-26 absolute -bottom-5 -right-5 rotate-25 shadow-lg rounded" src={category.src}/>
                                    </Link>   
                                )
                            })
                        }
                    </div>
                </section>
            </section>
        </div>
    )
};

export default CategoryDetailContent;