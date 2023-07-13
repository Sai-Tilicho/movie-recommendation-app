/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import { MovieContext } from '../src/MovieContext';
import Link from 'next/link';
import { AiFillLike, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Empty, Tooltip } from 'antd';

const WatchlistScreen = () => {
    const { watchlist, addToWatchlist, isMovieInWatchlist } = useContext(MovieContext);

    if (watchlist.length === 0) {
        return (
            <div>
                <h1 className='title'>Watchlist</h1>
                {/* <div className='watchlist_error'>No favorite added here ...</div> */}
                <Empty className='watchlist_error' />
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
                        <p className='icon'><AiFillLike color='rgb(64, 252, 64)' size={25} />
                            {movie.vote_count}
                            <div
                                className='add_to_watchlist_btn'
                                onClick={() => addToWatchlist(movie)}
                            >
                                {isMovieInWatchlist(movie.id) ?
                                    <Tooltip title='RemoveFromWatchlist' placement='topLeft'>
                                        <AiFillHeart color='red' size={35} />
                                    </Tooltip> :
                                    <Tooltip title='AddToWatchlist' placement='topLeft'>
                                        <AiOutlineHeart size={35} color='black' />
                                    </Tooltip>
                                }
                            </div>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchlistScreen;