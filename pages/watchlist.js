/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import { MovieContext } from '../src/MovieContext';
import Link from 'next/link';
import { AiFillLike } from 'react-icons/ai';

const WatchlistScreen = () => {
    const { watchlist, addToWatchlist, isMovieInWatchlist } = useContext(MovieContext);

    if (watchlist.length === 0) {
        return (
            <div>
                <h1 className='title'>Watchlist</h1>
                <div className='watchlist_error'>No favorite added here ...</div>
            </div>
        )
    }
    return (
        <div className='movie-list'>
            <h1 className='title'>Watch List</h1>
            <div className='movie-list-card'>
                {watchlist.map((movie) => (
                    <div className='card' key={movie.id}>
                        <Link href={`/details/${movie.id}`} key={movie.id}>
                            <div>
                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "/found.png"} alt={movie.title} width={250} height={350} />
                            </div>
                        </Link>
                        <h5>{movie.title}</h5>
                        <p><span className='release_date'>Release Date :</span> {movie.release_date}</p>
                        <p className='icon'><AiFillLike color='rgb(64, 252, 64)' size={20} />{movie.vote_count}</p>
                        <button
                            className='add_to_watchlist_btn'
                            onClick={() => addToWatchlist(movie)}
                        >
                            {isMovieInWatchlist(movie.id) ? 'Remove from watchlist' : 'Add to Watchlist'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    // return (
    //     <div className='movie-list'>
    //         <h1 className='title'>Watchlist</h1>
    //         <div className='movie-list-card'>
    //             {watchlist.map((movie) => (
    //                 <div className='card' key={movie.id}>
    //                     <Link href={`/details/${movie.id}`} key={movie.id}>
    //                         <div>
    //                             <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "/found.png"} alt={movie.title} width={250} height={350} />
    //                         </div>
    //                     </Link>
    //                     <h5>{movie.title}</h5>
    //                     <p><span style={{ fontWeight: '900', color: 'white' }}>Release Date :</span> {movie.release_date}</p>
    //                     <p style={{ display: 'flex', gap: '5px' }}><AiFillLike color='rgb(64, 252, 64)' size={20} />{movie.vote_count}</p>
    //                     <button className='add_to_watchlist_btn' onClick={() => removeFromWatchlist(movie.id)}>Remove from Watchlist</button>
    //                     <br />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
};

export default WatchlistScreen;
