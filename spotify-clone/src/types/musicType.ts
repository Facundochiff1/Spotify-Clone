export type MusicFormData = {
    title: string;
    artist: string;
    year: string;
    duration: string;
    listeners: string;
    lyrics: string;
    src: string
}

type sidebarSongs = {
  id: number;
  title: string;
  description: string;
  src: string;
  artist: string;
};

type heardAgainSection = {
  description: string;
  src: string;
  id: number;
  listeners: string;
  year: string;
  duration: string
  artist: string
  title?: string
};

type createdForSection = {
  description: string;
  src: string;
  id: number;
  listeners: string;
  year: string;
  duration: string
  artist: string
  title?: string
};

type favouriteArtistsSection = {
  description: string;
  src: string;
  id: number;
  listeners: string;
  year: string;
  duration: string
  artist: string
  title?: string
}

type discoverNewMusic = {
  description: string;
  title: string;
  src: string;
  id: number;
}

export type Response = {
  forYou: {
    title?: string;
    description?: string;
    sidebarSongs: sidebarSongs[];
    createdForSection: createdForSection[];
    heardAgainSection: heardAgainSection[];
    favouriteArtistsSection: favouriteArtistsSection[];
    discoverNewMusic: discoverNewMusic[];
  };
};