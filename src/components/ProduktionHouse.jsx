import React from 'react';
import disney from '../assets/images/disney.png';
import marvel from '../assets/images/marvel.png';
import nationalG from '../assets/images/nationalG.png';
import pixar from '../assets/images/pixar.png';
import starwar from '../assets/images/starwar.png';

import starwarV from '../assets/videos/star-wars.mp4';
import disneyV from '../assets/videos/disney.mp4';
import marvelV from '../assets/videos/marvel.mp4';
import nationalGeographicV from '../assets/videos/national-geographic.mp4';
import pixarV from '../assets/videos/pixar.mp4';

function ProduktionHouse() {
  const productionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: pixar, video: pixarV },
    { id: 3, image: marvel, video: marvelV },
    { id: 4, image: starwar, video: starwarV },
    { id: 5, image: nationalG, video: nationalGeographicV }
  ];

  return (
    <div className="flex justify-around overflow-x-auto p-5 px-10 md:px-16 gap-2">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800 flex-shrink-0"
          style={{ width: '16rem', height: '9rem' }} // Set fixed width and height
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 left-0 rounded-md w-full h-full object-cover opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full h-full object-cover z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProduktionHouse;
