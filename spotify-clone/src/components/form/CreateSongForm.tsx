import React, { useState } from 'react';
import { musicService } from '../../data/service';
import { queryClient } from '../../main';
import { useMutation } from '@tanstack/react-query';

function CreateSongForm() {

  const [title, setTitle] = useState('');
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');
  const [listeners, setListeners] = useState('');

  const createSongMutation = useMutation({
    mutationFn: musicService.createSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] });
      setTitle('');
      setAlbum('');
      setArtist('');
      setYear('');
      setDuration('');
      setListeners('');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createSongMutation.mutate({
      title,
      album,
      artist,
      year,
      duration,
      listeners,
    });
  };

  return (
    <div className='bg-[#121212] flex flex-col justify-center items-center max-w-[1200px] w-[100%] m-2 mr-0 ml-0 px-8 rounded-[9px] text-white lg:w-[75%] overflow-y-auto'>
      <div className="relative w-[520px]">
        <div className="absolute top-4 left-4 w-full h-full bg-[#1db954] rounded-2xl rotate-2 shadow-xl z-0" />
        <form onSubmit={handleSubmit} className='h-[550px] relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full text-black'>
          
          <h1 className='text-3xl font-bold text-center mb-6'>Create a Song</h1>
          
          <section className='mt-8 flex flex-col gap-8 text-white'>
            <div className='relative'>
              <input placeholder='Title...' value={title} onChange={(e) => setTitle(e.target.value)} className='peer placeholder-transparent border-b-2 border-gray-300 w-full focus:outline-none focus:border-[#1db954] mt-4 bg-transparent text-black'/>
              <label
                className="absolute left-0 top-0 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1db954]"
              >Title</label>
            </div>

            <div className='relative'>
              <input placeholder='Album...' value={album} onChange={(e) => setAlbum(e.target.value)} className='peer placeholder-transparent border-b-2 border-gray-300 w-full focus:outline-none focus:border-[#1db954] mt-4 bg-transparent text-black' />
              <label
                className="absolute left-0 top-0 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1db954]"
              >Album</label>
            </div>

            <div className='relative'>
              <input placeholder='Artist...' value={artist} onChange={(e) => setArtist(e.target.value)} className='peer placeholder-transparent border-b-2 border-gray-300 w-full focus:outline-none focus:border-[#1db954] mt-4 bg-transparent text-black' />
              <label
                className="absolute left-0 top-0 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1db954]"
              >Artist</label>
            </div>

            <div className='relative'>
              <input placeholder='Year...' value={year} onChange={(e) => setYear(e.target.value)} className='peer placeholder-transparent border-b-2 border-gray-300 w-full focus:outline-none focus:border-[#1db954] mt-4 bg-transparent text-black' />
              <label
                className="absolute left-0 top-0 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1db954]"
              >Year</label>
            </div>
          </section>
          <button type="submit" className="w-full cursor-pointer bg-[#1db954] hover:bg-[#1ed760] transition mt-8 text-white py-2 rounded-xl font-semibold">Add Song</button>
        </form>
      </div>
    </div>
  );
}

export default CreateSongForm