type LibrarySuggestionCardProps = {
    title: string;
    description: string;
    button: string;
}


function LibrarySuggestionCard(props: LibrarySuggestionCardProps) {
    const { title, description, button } = props;
    return(
        <div>
            <section className="p-4 mt-5 bg-[#242424] m-2 rounded-[8px] font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                <h2 className="font-bold text-[16px]">{title}</h2>
                <p className="text-[13px]">{description}</p>
                <button className="px-4 py-1.5 bg-white text-[15px] text-black font-bold rounded-full mt-4 cursor-pointer hover:bg-[#e7e7e7]">{button}</button>
            </section>
        </div>
    )
}

export default LibrarySuggestionCard