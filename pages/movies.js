/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Link from 'next/link';
import { MovieContext } from '../src/MovieContext';
import { AiFillLike } from "react-icons/ai";
import Header from './header';
import Navigation from '@/src/Navigation';

const MovieListScreen = () => {
    const { movies, addToWatchlist, isMovieInWatchlist, searchQuery } = useContext(MovieContext);

    return (
        <div className='movie-list'>
            <div className='nav_bar_main'>
                <Header />
                <Navigation />
            </div>
            <h1
                className='recommended'
            >
                Recommended movies
            </h1>
            <div className='movie-list-card'>
                {searchQuery && movies.length === 0 ? (
                    <p className='no_found'>No movies found with the `{searchQuery}`.</p>
                ) : (
                    movies.map((movie) => (
                        <div className='card' key={movie.id}>
                            <Link href={`/details/${movie?.id}`}>
                                <div>
                                    <img
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "/found.png"}
                                        alt={movie.title}
                                        width={250}
                                        height={350}
                                    />
                                </div>
                            </Link>

                            <h5>{movie.title}</h5>
                            <p><span className='release_date'>Release Date :</span> {movie.release_date}</p>
                            <p className='icon'><AiFillLike color='rgb(64, 252, 64)' size={20} />{movie.vote_count}</p>
                            <button
                                className='add_to_watchlist_btn'
                                onClick={() => addToWatchlist(movie)}
                            >
                                {isMovieInWatchlist(movie.id) ? 'Added' : 'Add to Watchlist'}
                            </button>
                        </div>
                    )))}
            </div>
        </div>
    );
};

export default MovieListScreen;
