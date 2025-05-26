import { assets } from "../assets/assets";
import LibrarySuggestionCard from "./LibrarySuggestionCard";


type Suggestion = {
    id: number
    title: string;
    description: string;
    button: string;
}

type Response = {
    information: {
        suggestions: Suggestion[]
    }
}

const response: Response = {
    information: {
        suggestions: [
            {
                id: 1,
                title:"Create your first playlist",
                description: "It's very easy! We'll help you.",
                button: "Create playlist"
            },
            {
                id: 2,
                title:"Let’s find some podcasts to follow",
                description: "We’ll keep you updated on new episodes.",
                button: "Explore podcasts"
            }
        ]
    }
}

function SideBar() {
    const { information } = response
    const {home_icon, search_icon, stack_icon, arrow_icon, plus_icon} = assets

    return(
        <aside className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
            <nav className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6 cursor-pointer" src={home_icon}/>
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={search_icon}/>
                    <p className="font-bold">Search</p>
                </div>
            </nav>
            <section className="bg-[#121212] h-[85%] rounded">
                    <header className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="w-[32px] cursor-pointer" src={stack_icon}/>
                            <h2 className="md:font-bold">Your library</h2>
                        </div>
                        <div className="flex justify-between gap-4">
                            <img className="w-5 cursor-pointer" src={arrow_icon}/>
                            <img className="w-5 cursor-pointer" src={plus_icon}/>
                        </div>
                    </header>

                    {information.suggestions.map((suggestion) => {
                        return(
                            <LibrarySuggestionCard 
                                key={suggestion.id}
                                title={suggestion.title}
                                description={suggestion.description}
                                button={suggestion.button}
                            />
                        )
                    })}
            </section>
        </aside>
    )
}

export default SideBar