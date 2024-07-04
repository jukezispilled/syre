import React, { useRef, useEffect, useState } from 'react';
import backgroundImage from './bg.png'; // Ensure the correct path to your bg.png';
import { FaPlay, FaPause } from 'react-icons/fa'; // Assuming you have react-icons installed
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef(null);

  const songs = [
    {
      title: 'Stayin\' Alive',
      src: 'song1.mp3',
    },
    // Add more songs as needed
  ];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('coming soon...');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  const nextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true); // Auto play next song
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className='hidden md:block absolute bottom-5 text-slate-400 z-10'>
        $fairy is your girlfriend's favorite meme
      </div>
          {/* Small screen social media links */}
          <div className="absolute z-10 bottom-5 left-5 flex flex-col items-center">
            <div className="flex flex-row">
              <a
                href="https://x.com/"
                className="p-2 hover:scale-110 transition ease-in-out duration-200"
              >
                <img src={Xlogo} alt="Xlogo" className="w-10 h-10 rounded-md" />
              </a>
              <a
                href="https://t.me/"
                className="p-2 hover:scale-110 transition ease-in-out duration-200"
              >
                <img src={TG} alt="Tg logo" className="w-10 h-10" />
              </a>
            </div>
          </div>
      <button
        className="absolute top-7 left-7 text-slate-200 text-4xl bg-white p-3 rounded-full z-10"
        onClick={togglePlay}
      >
        {isPlaying ? <FaPause /> : <div className='translate-x-1'><FaPlay /></div>}
      </button>
      <audio ref={audioRef} src={songs[currentSongIndex].src} />

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src="/fairy2.png"
            alt="Tunes"
            className="-mt-[7.5%] w-[50%] md:w-[30%] h-auto border rounded-md"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>
        <div className='flex flex-col sm:flex-row justify-center mt-5 bg-slate-100 rounded-xl md:rounded-full z-10 items-center gap-1 md:gap-4 px-5 py-3 max-w-full overflow-hidden border-2 border-slate-400'>
          <button
            onClick={handleCopy}
            className="text-sm bg-purple-400 text-white py-2 px-4 rounded-full md:hover:bg-purple-500 border-2 border-white transition-colors duration-300 z-10 whitespace-nowrap"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <div className='text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap'>
            coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;