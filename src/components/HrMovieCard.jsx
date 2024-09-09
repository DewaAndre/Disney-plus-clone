import React from 'react';
import { useNavigate } from 'react-router-dom'; // Menggunakan useNavigate dari react-router-dom

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const navigate = useNavigate(); // Gantikan useRouter dengan useNavigate

  const handleClick = () => {
    navigate(`/detail/${movie.id}`); // Mengarahkan ke halaman detail dengan react-router-dom
  };

  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
      <img 
        src={IMAGE_BASE_URL + movie.backdrop_path} 
        alt={movie.title} 
        className='w-[110px] md:w-[260px] cursor-pointer hover:border-[3px] border-gray-400 rounded-lg'
        onClick={handleClick}
      />
      <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
