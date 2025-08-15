// Mock music database
import type { Response } from "../types/musicType";

let musicDB: Response = {
  forYou: {
    title: 'For you',
    description: 'recomended for you',
    sidebarSongs: [
      {
        id: 1,
        title: 'Favorites',
        description: 'Playlist',
        artist: 'Facu',
        src: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
      },
      {
        id: 2,
        title: 'Comfortably Numb',
        description: 'Song',
        artist: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf',
      },
      {
        id: 3,
        title: 'Jump',
        description: 'Song',
        artist: 'Van Halen',
        src: 'https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed',
      },
      {
        id: 4,
        title: 'Será',
        description: 'Song',
        artist: 'Las Pelotas',
        src: 'https://i.scdn.co/image/ab67616d0000b273bb0ebefc4052bc1faab428b3',
      },
      {
        id: 5,
        title: 'Madness',
        description: 'Song',
        artist: 'Muse',
        src: 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9',
      },
      {
        id: 6,
        title: 'Parque Acuático',
        description: 'Song',
        artist: 'El Kuelgue',
        src: 'https://www.cmtv.com.ar/tapas-cd/0200191001609454008.webp',
      },
      {
        id: 7,
        title: 'En el séptimo día',
        description: 'Song',
        artist: 'Soda Stereo',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQloiMnyRVId1JSxJH1a301VCKdL0mt9lq7A&s',
      },
      {
        id: 8,
        title: 'Simulation Theory',
        description: 'Album',
        artist: 'Muse',
        src: 'https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6',
      },
    ],
    createdForSection: [
      {
        id: 9,
        title: 'Giros',
        description: 'Fito Páez',
        src: 'https://i.scdn.co/image/ab67616d00001e02921417baf700cc9da1d43b80',
        duration: '3:40',
        year: '1985',
        listeners: '22,876,234',
        artist: 'Fito Páez',
      },
      {
        id: 10,
        title: 'Taki Taki',
        description: 'Reggaeton Hits',
        src: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84962ce48d76ca903bff40df00',
        duration: '3:32',
        year: '2018',
        listeners: '32,875,224',
        artist: 'DJ Snake',
      },
      {
        id: 11,
        title: 'Crimen',
        description: 'Gustavo Cerati',
        src: 'https://yt3.googleusercontent.com/MrY2zTBlAeC-qrElJB8JY_a3QcSz7BJA_x3-00QyoSWSnejNsGgmmoexiWf1sQf5-NOSIURlYA=s900-c-k-c0x00ffffff-no-rj',
        duration: '4:10',
        year: '2006',
        listeners: '18,235,980',
        artist: 'Gustavo Cerati',
      },
      {
        id: 12,
        title: 'Airbag',
        description: 'Airbag',
        src: 'https://d22fxaf9t8d39k.cloudfront.net/2e78816a7bdc64af74ed56942ba0157dc94380413a79d8937c303eebe05d083420700.png',
        duration: '3:50',
        year: '2011',
        listeners: '15,321,411',
        artist: 'Airbag',
      },
    ],
    heardAgainSection: [
      {
        id: 13,
        title: 'Artic Monkeys',
        description: 'Artic Monkeys',
        src: 'https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163',
        duration: '3:18',
        year: '2013',
        listeners: '20,456,234',
        artist: 'Arctic Monkeys',
      },
      {
        id: 14,
        title: 'Coldplay',
        description: 'Coldplay',
        src: 'https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82',
        duration: '4:02',
        year: '2015',
        listeners: '45,876,212',
        artist: 'Coldplay',
      },
      {
        id: 15,
        title: 'By the Way',
        description: 'Red Hot Chili Peppers',
        src: 'https://i.scdn.co/image/ab67616d0000b273fdbcee40748537ff80a7af70',
        duration: '3:36',
        year: '2002',
        listeners: '28,123,567',
        artist: 'Red Hot Chili Peppers',
      },
      {
        id: 16,
        title: 'Pink Floyd',
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
        duration: '5:04',
        year: '1979',
        listeners: '35,432,908',
        artist: 'Pink Floyd',
      },
    ],
    favouriteArtistsSection: [
      {
        id: 17,
        title: 'Guns N Roses',
        description: 'Guns N Roses',
        src: 'https://umusicstore.com.ar/cdn/shop/files/51vA9Ga_RSL.jpg?v=1698775521',
        duration: '5:33',
        year: '1987',
        listeners: '39,876,543',
        artist: "Guns N' Roses",
      },
      {
        id: 18,
        title: 'Guns N Roses',
        description: 'Guns N Roses',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PjLHqfSE46Ae8Cwd4kk53Lduq4x0gKt7kA&s',
        duration: '4:20',
        year: '1991',
        listeners: '39,876,543',
        artist: "Guns N' Roses",
      },
      {
        id: 19,
        title: 'Pink Floyd',
        description: 'Pink Floyd',
        src: 'https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0',
        duration: '6:23',
        year: '1973',
        listeners: '35,432,908',
        artist: 'Pink Floyd',
      },
      {
        id: 20,
        title: 'Muse',
        description: 'Muse',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHQPpXTKfNeROXnH9j7tj4nn8Kd-grc9MXQ&s',
        duration: '4:01',
        year: '2015',
        listeners: '25,654,321',
        artist: 'Muse',
      },
    ],
    discoverNewMusic: [
      {
        id: 17,
        title: 'Guns N Roses',
        description: 'Guns N Roses',
        src: 'https://umusicstore.com.ar/cdn/shop/files/51vA9Ga_RSL.jpg?v=1698775521',
      },
      {
        id: 18,
        title: 'Guns N Roses',
        description: 'Guns N Roses',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PjLHqfSE46Ae8Cwd4kk53Lduq4x0gKt7kA&s',
      },
    ],
    videoCardSection: [
      {
        id: 19,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR370egQTPaG85BNfUXSz6OZfKBCHK0AHTvAg&s',
        title: 'The void',
        description: 'Muse'
      },
    ],
    navbarSongs: [
      {
        id: 1, 
        title: "I Wanna Be Yours", 
        artist: "Arctic Monkeys" 
      },
      { 
        id: 2, 
        title: "En el séptimo día ", 
        artist: "Soda Stereo" 
      },
      { 
        id: 3, 
        title: "Young Lust ", 
        artist: "Pink Floyd"
       },
      { 
        id: 4,
        title: "Another Brick in the Wall ", 
        artist: "Pink Floyd" 
      },
      { 
        id: 5,
        title: "Bohemian Rhapsody ", 
        artist: "Queen" },
      { 
        id: 6,
        title: "Smells Like Teen Spirit ", 
        artist: "Nirvana" },
      { 
        id: 7,
        title: "Sweet Child O' Mine ", 
        artist: "Guns N' Roses" },
      { 
        id: 8,
        title: "Back in Black ", 
        artist: "AC/DC" },
      { 
        id: 9,
        title: "Paint It Black ", 
        artist: "The Rolling Stones" },
      { 
        id: 10,
        title: "Come Together ", 
        artist: "The Beatles" },
      { 
        id: 11,
        title: "Highway to Hell ", 
        artist: "AC/DC" },
      { 
        id: 12,
        title: "Creep ", 
        artist: "Radiohead" },
      { 
        id: 13,
        title: "In The End ", 
        artist: "Linkin Park" },
      { 
        id: 14,
        title: "Californication ", 
        artist: "Red Hot Chili Peppers" },
      { 
        id: 15,
        title: "Killing in the Name ", 
        artist: "Rage Against the Machine" },
      { 
        id: 16,
        title: "Wish You Were Here ", 
        artist: "Pink Floyd" },
      { 
        id: 17,
        title: "Hotel California ", 
        artist: "Eagles" },
      { 
        id: 18,
        title: "The Pretender ", 
        artist: "Foo Fighters" },
      { 
        id: 19,
        title: "Under the Bridge", 
        artist: "Red Hot Chili Peppers" },
      { 
        id: 20,
        title: "La ciudad de la furia", 
        artist: "Soda Stereo" }
    ],
    playlists: [
      {
        id: 1,
        title: 'Comfort y música para volar',
        description: 'Album',
        creator: 'Facu:)',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_WWMpCJqDow8S_m61oYCtF7mtFdrbAKpZQ&s',
      },
      {
        id: 2,
        title: 'Bocanada',
        description: 'Album',
        creator: 'Gustavo Cerati',
        src: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/06/25093705/Gustavo-Cerati-Bocanada.jpg',
      },
      {
        id: 3,
        title: 'The 2nd Law',
        description: 'Album',
        creator: 'Muse',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztAIl-I7f7ajV2E8GflLK9qbBaonkAr4t4g&s',
      },
      {
        id: 4,
        title: 'Progressive Techno Mix',
        description: 'Playlist',
        creator: 'Spotify',
        src: 'https://i1.sndcdn.com/artworks-DOjE5pBIbL55JFqB-FzqU9g-t1080x1080.jpg',
      },
      {
        id: 5,
        title: 'FFP Muse',
        description: 'Playlist',
        creator: 'Pablin',
        src: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/12Chz98pHFMPJEknJQMWvI/en',
      },
      {
        id: 6,
        title: 'Rock Nacional',
        description: 'Playlist',
        creator: 'Spotify',
        src: 'https://i0.wp.com/delacalle.org/wp-content/uploads/2016/09/14203027_1670848669899820_655105843_o.jpg?fit=1600%2C1000&ssl=1',
      },
      {
        id: 7,
        title: 'Canción Animal',
        description: 'Album',
        creator: 'Soda Stereo',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQloiMnyRVId1JSxJH1a301VCKdL0mt9lq7A&s',
      },
      {
        id: 8,
        title: 'Californication',
        description: 'Album',
        creator: 'Red Hot Chilli Peppers',
        src: 'https://http2.mlstatic.com/D_Q_NP_968611-MLA82474746189_022025-O.webp',
      },
      {
        id: 9,
        title: 'The Getaway',
        description: 'Album',
        creator: 'Red Hot Chilli Peppers',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7OJRXCj8PjjCBAIgdMVYRuf3h39bv5MQEw&s',
      },
      {
        id: 10,
        title: 'In Utero',
        description: 'Album',
        creator: 'Nirvana',
        src: 'data:image/jpeg;base64,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',
      },
      {
        id: 11,
        title: 'Hump de Bump',
        description: 'Album',
        creator: 'Red Hot Chili Peppers',
        src: 'https://http2.mlstatic.com/D_NQ_NP_722456-MLM26487675893_122017-O.webp',
      },
    ],
    songListItem: [
        {
            id: 1,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_wZXuldJULVgofSODYHmqT_zr1EGSFw0qQ&s',
            title: 'Dos Cero Uno',
            artist: 'Charly García',
            album: 'Clics Modernos',
            date: '2025-07-11',
            duration: 128,
            description: 'A short description'
        },
        {
            id: 2,
            src: 'https://i.ytimg.com/vi/cns50Eh_-_Q/maxresdefault.jpg',
            title: 'The Righteous Wrath Of An Honorable Man',
            artist: 'Charly García',
            album: 'New History Warfare Vol. 2: Judges',
            date: '2025-06-30',
            duration: 148,
            description: 'A short description'
        },
        {
            id: 3,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZCaw2F8Bbli0WVvxACJZwoVYS4RW2gJ2Og&s',
            title: 'Higher Ground - Remastered 2003',
            artist: 'Red Hot Chili Peppers',
            album: 'Mother\'s Milk',
            date: '2025-06-23',
            duration: 202,
            description: 'A short description'
        },
        {
            id: 4,
            src: 'https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed',
            title: 'Panama - 2015 Remaster',
            artist: 'Van Halen',
            album: '1984 (Remastered)',
            date: '2025-06-02',
            duration: 210,
            description: 'A short description'
        },
        {
            id: 5,
            src: 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9',
            title: 'The 2nd Law: Unsustainable',
            artist: 'Muse',
            album: 'The 2nd Law',
            date: '2025-05-30',
            duration: 228,
            description: 'A short description'
        },
        {
            id: 6,
            src: 'https://i1.sndcdn.com/artworks-g4e2qimjkm5q-0-t500x500.jpg',
            title: 'Dig Down (Acoustic Gospel Version)',
            artist: 'Muse',
            album: 'Simulation Theory (Super Deluxe)',
            date: '2025-05-30',
            duration: 237,
            description: 'A short description'
        },
        {
            id: 7,
            src: 'https://i1.sndcdn.com/artworks-g4e2qimjkm5q-0-t500x500.jpg',
            title: 'Thought Contagion',
            artist: 'Muse',
            album: 'Simulation Theory (Super Deluxe)',
            date: '2025-05-30',
            duration: 206,
            description: 'A short description'
        },
        {
            id: 8,
            src: 'https://i.scdn.co/image/ab67616d0000b273c451ed28353639e79b4d97d9',
            title: 'Canción Animal',
            artist: 'Soda Stereo',
            album: 'Canción Animal',
            date: '2025-05-15',
            duration: 246,
            description: 'A short description'
        },
        {
            id: 9,
            src: 'https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595',
            title: 'Otherside',
            artist: 'Red Hot Chili Peppers',
            album: 'Californication',
            date: '2025-05-10',
            duration: 255,
            description: 'A short description'
        },
        {
            id: 10,
            src: 'https://i1.sndcdn.com/artworks-uMq1m6Irif1O-0-t500x500.jpg',
            title: 'The Zephyr Song',
            artist: 'Red Hot Chili Peppers',
            album: 'By The Way',
            date: '2025-05-05',
            duration: 232,
            description: 'A short description'
        },
    ]
  }
};

// Get next available ID
export const getNextId = () => {
  const allSections = [
    ...(musicDB.forYou.sidebarSongs || []),
    ...(musicDB.forYou.createdForSection || []),
    ...(musicDB.forYou.heardAgainSection || []),
    ...(musicDB.forYou.favouriteArtistsSection || []),
    ...(musicDB.forYou.discoverNewMusic || []),
    ...(musicDB.forYou.navbarSongs || []),
    ...(musicDB.forYou.playlists || []),
    ...(musicDB.forYou.sidebarSongs || []),
    ...(musicDB.forYou.songListItem || []), 
    ...(musicDB.forYou.videoCardSection || []),
  ];
  return allSections.length > 0 ? Math.max(...allSections.map((song) => song.id)) + 1 : 1;
};

export { musicDB };
