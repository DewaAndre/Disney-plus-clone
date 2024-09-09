import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = "7c76582c6e57abe7ce73dfd604e5749e";

const DetailMovie = () => {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const [cast, setCast] = useState([]);
  const [backdropPath, setBackdropPath] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Panggil API untuk mendapatkan data pemeran, backdrop_path, title, overview, genres, dan videos
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setCast(data.cast.slice(0, 5)); // Ambil maksimal 5 pemeran
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
          .then((response) => response.json())
          .then((movieData) => {
            setBackdropPath(movieData.backdrop_path); // Ambil backdrop_path film
            setPosterPath(movieData.poster_path); // Ambil poster_path film
            setTitle(movieData.title); // Ambil title film
            setOverview(movieData.overview); // Ambil overview film
            setGenres(movieData.genres); // Ambil genres film
          });
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
          .then((response) => response.json())
          .then((videoData) => {
            setVideos(videoData.results.slice(0, 5)); // Ambil maksimal 5 video
          });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div>
      <div
        className="p-4 bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${IMAGE_BASE_URL}${backdropPath})`,
        }}
      >
        <div className="poster mb-4">
          <img
            src={IMAGE_BASE_URL + posterPath}
            alt="Movie Poster"
            className="w-48 h-auto object-cover rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
          <div className="mb-4">
            <div className="flex flex-wrap justify-center">
              {genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full m-1"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-lg mb-4 text-white text-center max-w-[60rem]">
            {overview}
          </h3>
          <div className="flex flex-wrap justify-center">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center m-2">
                <img
                  src={IMAGE_BASE_URL + actor.profile_path}
                  alt={actor.name}
                  className="w-auto h-[10rem] object-cover mx-auto rounded-full border border-gray-300"
                />
                <p className="mt-2 text-sm text-white">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="video p-4 bg-black">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Videos:</h2>
        <div className="flex flex-wrap justify-center">
          {videos.map((video) => (
            <div key={video.id} className="m-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-white mb-2">{video.name}</h2>
              <iframe
                className="w-[70rem] h-[40rem] max-w-full"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
