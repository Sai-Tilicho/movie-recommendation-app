/* eslint-disable react-hooks/exhaustive-deps */
// MovieDetailsScreen component

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MovieContext } from '../src/MovieContext';

const MovieDetailsScreen = () => {
    const router = useRouter();
    const { id } = router.query;
    const { setSelectedMovie, fetchMovies, selectedMovie } = useContext(MovieContext);

    useEffect(() => {
        // Fetch additional details for the selected movie
        setSelectedMovie(null);
        fetchMovieDetails();
    }, [id]);

    const fetchMovieDetails = () => {
        const apiKey = '9dfe622f97c35a9030377f8ba2951453';
        const movieId = id || '';
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedMovie(data);
            })
            .catch((error) => console.log(error));
    };

    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Movie Details</h1>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.release_date}</p>
            <p>{selectedMovie.overview}</p>
            <p>Hero: {selectedMovie.hero}</p>
            <p>Heroine: {selectedMovie.heroine}</p>
            <p>Director: {selectedMovie.director}</p>
            {/* Display additional details like ratings, genres, etc. */}
        </div>
    );
};

export default MovieDetailsScreen;
