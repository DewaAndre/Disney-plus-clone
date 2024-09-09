import React from 'react'
import { useNavigate } from 'react-router-dom'; // Menggunakan useNavigate dari react-router-dom


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
function MovieCard({movie}) {
  const navigate = useNavigate(); // Gantikan useRouter dengan useNavigate

  const handleClick = () => {
    navigate(`/detail/${movie.id}`); // Mengarahkan ke halaman detail dengan react-router-dom
  };

  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} 
      onClick={handleClick}
      className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400 hover:scale-110 transition-all duration-150 ease-in'/>
    </>
  )}

export default MovieCard
