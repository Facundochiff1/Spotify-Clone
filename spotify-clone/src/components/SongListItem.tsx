type SongListItem = {
    id?: number;
    src?: string;
    title?: string;
    artist?: string;
    album?: string;
    date?: string;
    duration?: number;
}

const mockSongsAdapted: SongListItem[] = [
    {
        id: 1,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_wZXuldJULVgofSODYHmqT_zr1EGSFw0qQ&s',
        title: 'Dos Cero Uno',
        artist: 'Charly García',
        album: 'Clics Modernos',
        date: '2025-07-11',
        duration: 128,
    },
    {
        id: 2,
        src: 'https://i.ytimg.com/vi/cns50Eh_-_Q/maxresdefault.jpg',
        title: 'The Righteous Wrath Of An Honorable Man Que Es Muy Largo Y Se Truncará', // Test de truncado
        artist: 'Charly García',
        album: 'New History Warfare Vol. 2: Judges',
        date: '2025-06-30',
        duration: 148,
    },
    {
        id: 3,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZCaw2F8Bbli0WVvxACJZwoVYS4RW2gJ2Og&s',
        title: 'Higher Ground - Remastered 2003',
        artist: 'Red Hot Chili Peppers',
        album: 'Mother\'s Milk',
        date: '2025-06-23',
        duration: 202,
    },
    {
        id: 4,
        src: 'https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed',
        title: 'Panama - 2015 Remaster',
        artist: 'Van Halen',
        album: '1984 (Remastered)',
        date: '2025-06-02',
        duration: 210,
    },
    {
        id: 5,
        src: 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9',
        title: 'The 2nd Law: Unsustainable',
        artist: 'Muse',
        album: 'The 2nd Law',
        date: '2025-05-30',
        duration: 228,
    },
    {
        id: 6,
        src: 'https://i1.sndcdn.com/artworks-g4e2qimjkm5q-0-t500x500.jpg',
        title: 'Dig Down (Acoustic Gospel Version)',
        artist: 'Muse',
        album: 'Simulation Theory (Super Deluxe)',
        date: '2025-05-30',
        duration: 237,
    },
    {
        id: 7,
        src: 'https://i1.sndcdn.com/artworks-g4e2qimjkm5q-0-t500x500.jpg',
        title: 'Thought Contagion',
        artist: 'Muse',
        album: 'Simulation Theory (Super Deluxe)',
        date: '2025-05-30',
        duration: 206,
    },
    {
        id: 8,
        src: 'https://i.scdn.co/image/ab67616d0000b273c451ed28353639e79b4d97d9',
        title: 'Canción Animal',
        artist: 'Soda Stereo',
        album: 'Canción Animal',
        date: '2025-05-15',
        duration: 246,
    },
    {
        id: 9,
        src: 'https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595',
        title: 'Otherside',
        artist: 'Red Hot Chili Peppers',
        album: 'Californication',
        date: '2025-05-10',
        duration: 255,
    },
    {
        id: 10,
        src: 'https://i1.sndcdn.com/artworks-uMq1m6Irif1O-0-t500x500.jpg',
        title: 'The Zephyr Song',
        artist: 'Red Hot Chili Peppers',
        album: 'By The Way',
        date: '2025-05-05',
        duration: 232,
    },
];

function SongListItem() {
    return (
        mockSongsAdapted.map((song) => {
            return (
                <div key={song.id} className="flex items-center text-[15px] mb-2 hover:bg-[#5c5c5c63] rounded p-2 cursor-pointer">
                    <h1 className="w-8 flex-shrink-0 text-right pr-3">{song.id}</h1>
                    <img className="w-12 h-12 rounded-[5px] mr-3 flex-shrink-0" src={song.src} alt={song.title || 'Canción'} />
                    <div className="flex flex-col flex-grow min-w-0 max-w-[calc(35%_-_70px)] mr-10 text-left">
                        <h1 className="truncate text-white">{song.title}</h1>
                        <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                    </div>
                    <div className="w-[26%] text-gray-400 truncate ml-4 text-left">
                        <p>{song.album}</p>
                    </div>
                    <div className="w-[17%] text-gray-400 text-right truncate mr-4">
                        <p className="mr-3.5">{song.date}</p>
                    </div>
                    <div className="w-[10%] text-gray-400 text-right ml-3.5">
                        <p>{song.duration}</p>
                    </div>
                </div>
            )
        })
    )
}

export default SongListItem;