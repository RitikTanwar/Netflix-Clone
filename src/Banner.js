import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            let idx = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(request.data.results[idx]);
            return request;
        }
        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n) + '...' : str;
    }

    // console.log(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`);
    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}
        >
            <div className="bannerContent">
                <h2 className="bannerTitle">
                    {movie?.name || movie?.title || movie?.original_name}
                </h2>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <p className="bannerDescription">
                    {truncate(movie?.overview, 150)}
                </p>

                {/* div 2 btns */}
                {/* Description */}
            </div>
            <div className="banner-fadeBottom">

            </div>
        </header>
    )
}

export default Banner
