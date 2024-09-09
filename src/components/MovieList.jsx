import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const screenWidth = window.innerWidth;

function MovieList({ genreId, index_ }) {
    const [movieList, setMoviesList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, [genreId]);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMoviesList(resp.data.results);
        }).catch(error => {
            console.error('Error fetching movies by genre:', error);
        });
    };

    const sliderRight = (element) => {  
        if (element) {
            element.scrollLeft += screenWidth - 110;
        }
    };

    const sliderLeft = (element) => {
        if (element) {
            element.scrollLeft -= screenWidth - 110;
        }
    };

    return (
        <div className='relative'>
            <HiChevronLeft 
                onClick={() => sliderLeft(elementRef.current)} 
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute
                 ${index_ % 4 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} 
            /> 

            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>
                {movieList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </div>

            <HiChevronRight 
                onClick={() => sliderRight(elementRef.current)} 
                className={`text-[50px] text-white p-2 z-10 top-0 cursor-pointer hidden md:block right-0 absolute
                ${index_ % 4 === 0 ? 'mt-[80px]' : 'mt-[150px]'} `}
            /> 
        </div>
    );
}

export default MovieList;
