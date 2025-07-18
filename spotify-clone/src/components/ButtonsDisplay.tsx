import { Link } from "react-router"

function ButtonsDisplay() {
    return(
        <div className="flex py-2 px-3 gap-3">
            <Link to={"/"} className="rounded-full px-4 py-[5px] bg-[#fff] text-black cursor-pointer hover:bg-[#fff]/95">All</Link>
            <Link to={"/category/:id"} className="rounded-full px-4 py-1 bg-[#fff]/20 text-white cursor-pointer hover:bg-[#fff]/25">Music</Link>
            <button className="rounded-full px-4 py-1 bg-[#fff]/20 text-white cursor-pointer hover:bg-[#fff]/25">Podcasts</button>
        </div>
    )
}

export default ButtonsDisplay