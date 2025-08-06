import { musicDB, getNextId } from '../data/music.js';

// Simulate API delay
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const flattenMusicDB = (musicDB: { forYou: any; }) => {
  return [
    ...musicDB.forYou.sidebarSongs,
    ...musicDB.forYou.createdForSection,
    ...musicDB.forYou.heardAgainSection,
    ...musicDB.forYou.favouriteArtistsSection,
    ...musicDB.forYou.discoverNewMusic,
  ]
}

// Mock API service with CRUD operations
export const musicService = {
  // GET all songs
  async getAllSongs() {
    await delay(300);
    // Load from localStorage if available, fallback to initial data
    const stored = localStorage.getItem('musicDB');
    if (stored) {
      return JSON.parse(stored);
    }
    return flattenMusicDB(musicDB);
  },

  // GET song by ID
  async getSongById(id: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;
    const song = songs.find((s: { id: number; }) => s.id === parseInt(id));
    if (!song) {
      throw new Error('Song not found');
    }
    return song;
  },

  // GET songs by genre
  async getSongsByGenre(genre: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    if (!genre) {
      throw new Error('Genre parameter is required');
    }

    return songs.filter((song: { genre: any[]; }) =>
      song.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
  },

  // GET songs by artist
  async getSongsByArtist(artist: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    if (!artist) {
      throw new Error('Artist parameter is required');
    }

    return songs.filter((song: { artist: string; }) =>
      song.artist.toLowerCase().includes(artist.toLowerCase())
    );
  },

  // GET all genres with songs grouped by genre
  async getGenres() {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    const genreMap: { [key: string]: any[] } = {};

    songs.forEach((song: { genre: any[]; }) => {
      song.genre.forEach((genre: string) => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }
        genreMap[genre].push(song);
      });
    });

    // Convert to array format with genre name and songs
    return Object.keys(genreMap)
      .map((genre: string) => ({
        genre,
        songs: genreMap[genre],
      }))
      .sort((a, b) => a.genre.localeCompare(b.genre));
  },

  // POST - Create new song
  async createSong(songData: { 
    title: string;
    cover?: string;
    artist?: string;
    album?: string;
    year?: number;
    genre?: string[];
    duration?: number;
    rating?: number;
    description?: string; }) {
    await delay(400);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : flattenMusicDB(musicDB);

    const newSong = {
      ...songData,
      id: getNextId(),
      cover:
        songData.cover ||
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    };

    songs.push(newSong);
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return newSong;
  },

  // PUT - Update existing song
  async updateSong(id: string, songData: any) {
    await delay(400);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : flattenMusicDB(musicDB);

    const index = songs.findIndex((s: { id: number; }) => s.id === parseInt(id));
    if (index === -1) {
      throw new Error('Song not found');
    }

    songs[index] = { ...songs[index], ...songData };
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return songs[index];
  },

  // DELETE song
  async deleteSong(id: string) {
    await delay(300);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : flattenMusicDB(musicDB);

    const index = songs.findIndex((s: { id: number; }) => s.id === parseInt(id));
    if (index === -1) {
      throw new Error('Song not found');
    }

    songs.splice(index, 1);
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return { success: true };
  },

  // Search songs
  async searchSongs(query: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    if (!query) return songs;

    return songs.filter(
      (song: { title: string; artist: string; album: string; genre: string[]; }) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.album.toLowerCase().includes(query.toLowerCase()) ||
        song.genre.some((g: string) => g.toLowerCase().includes(query.toLowerCase()))
    );
  },
};
