type categoriesSongs = {
    id: number;
    titleCategory: string;
    src: string;
    color: string;
};

type Categories = {
  forYou: {
    categoriesSongs: categoriesSongs[];
  };
};

export const categories: Categories = {
    forYou: {
        categoriesSongs: [
            {
                id: 1,
                titleCategory: 'Music',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-purple-600',
            },
            {
                id: 2,
                titleCategory: 'Afro',
                src: 'https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf',
                color: 'bg-yellow-500',
            },
            {
                id: 3,
                titleCategory: 'Alternative',
                src: 'https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed',
                color: 'bg-pink-500',
            },
            {
                id: 4,
                titleCategory: 'Techno',
                src: 'https://i.scdn.co/image/ab67616d0000b273bb0ebefc4052bc1faab428b3',
                color: 'bg-blue-600',
            },
            {
                id: 5,
                titleCategory: 'Ambient',
                src: 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9',
                color: 'bg-green-500',
            },
            {
                id: 6,
                titleCategory: 'Blues',
                src: 'https://www.cmtv.com.ar/tapas-cd/0200191001609454008.webp',
                color: 'bg-red-500',
            },
            {
                id: 7,
                titleCategory: 'Jazz',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQloiMnyRVId1JSxJH1a301VCKdL0mt9lq7A&s',
                color: 'bg-orange-500',
            },
            {
                id: 8,
                titleCategory: 'Neo Soul',
                src: 'https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6',
                color: 'bg-teal-500',
            },
            {
                id: 9,
                titleCategory: 'Pop',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-pink-500',
            },
            {
                id: 10,
                titleCategory: 'Rock',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-red-700',
            },
            {
                id: 11,
                titleCategory: 'Hip Hop',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-yellow-600',
            },
            {
                id: 14,
                titleCategory: 'Reggaeton',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-orange-500',
            },
            {
                id: 15,
                titleCategory: 'Clásica',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-stone-500',
            },
            {
                id: 17,
                titleCategory: 'Country',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-amber-700',
            },
            {
                id: 18,
                titleCategory: 'Funk',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-purple-600',
            },
            {
                id: 19,
                titleCategory: 'Indie',
                src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
                color: 'bg-green-600',
            },
        ]
    }
};