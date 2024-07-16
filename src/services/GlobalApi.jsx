import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_MOVIE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${apiKey}`;

const getTrendingVideos = () => axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`);

const getMovieByGenreId = (id) => axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {
    getTrendingVideos,
    getMovieByGenreId
}
