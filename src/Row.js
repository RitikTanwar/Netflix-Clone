import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    // console.log(baseURL+props.fetchUrl);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    // console.log(fetchUrl);
    // console.log(movies);

    const opts = {
        height: "600",
        width: "100%",
        playerVars: {

            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) setTrailerUrl('');
        else {
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(err => console.log(err));
        }
    }

    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img key={movie.id} onClick={() => { handleClick(movie) }} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)} alt={movie.title || movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;