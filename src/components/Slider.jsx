import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovie();
    }, []);

    const getTrendingMovie = async () => {
        try {
            const resp = await GlobalApi.getTrendingVideos();
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        } 
        catch (error) {
            console.error('Error fetching trending movies:', error);
        }
    };

    const sliderRight = (element) => {  
        element.scrollLeft += screenWidth - 110;
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    };

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' 
            onClick={() => sliderLeft(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' 
            onClick={() => sliderRight(elementRef.current)}/>

            <div className='flex overflow-x-auto w-full px-4 sm:px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
                {movieList.map((item) => (
                    item.backdrop_path && (
                        <img 
                            key={item.id} // Use item.id for unique key
                            src={IMAGE_BASE_URL + item.backdrop_path} 
                            className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
                            alt={item.title || item.name}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

export default Slider;
