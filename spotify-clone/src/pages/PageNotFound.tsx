import { Link } from 'react-router'

function PageNotFound () {
    return (
        <div className="h-screen w-screen flex flex-row items-center justify-center bg-gradient-to-br from-[#5b1dd6] via-[#632ecc] to-[#b11271]">
            <div className="text-left mr-10">
                <h1 className="text-6xl font-bold">404 and heartbreaks</h1>
                <p className="text-2xl max-w-md leading-relaxed mt-10 mb-10">We couldn't find the page you were looking for. Chek out our homepage to see what's new from Spotify.</p>
                <Link to='/' className="bg-green-500 px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all">GO HOME</Link>
            </div>
            <img src="https://www-fallback.spotifycdn.com/static/404.png" alt="404s error" />
        </div>
    )
}

export default PageNotFound