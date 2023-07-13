// MovieListScreen component

import React, { useContext } from 'react';
import Link from 'next/link';
import { MovieContext } from '../src/MovieContext';

const MovieListScreen = () => {
    const { movies, addToWatchlist } = useContext(MovieContext);

    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Movie List</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                    <p>{movie.overview}</p>
                    <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
                    <Link href={`/details/${movie.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default MovieListScreen;
