import { Link, useLocation } from "react-router"

function ButtonsDisplay() {
    const location = useLocation()

    const getButtonStyle = (path: string) => {
        const isActive = location.pathname === path
        return(
            isActive ? "bg-white text-black hover:bg-[#fff]/95" : "bg-[#fff]/20 text-white hover:bg-[#fff]/25"
        )
        
    } 

    return(
        <div className="flex py-2 mb-4 px-3 gap-3">
            <Link to={"/"} className={`rounded-full px-4 py-[5px] cursor-pointer ${getButtonStyle("/")}}`}>All</Link>
            <Link to={"/category"} className={`rounded-full px-4 py-1 cursor-pointer ${getButtonStyle("/category")}`}>Music</Link>
            <button className="rounded-full px-4 py-1 bg-[#fff]/20 text-white cursor-pointer hover:bg-[#fff]/25">Podcasts</button>
        </div>
    )
}

export default ButtonsDisplay