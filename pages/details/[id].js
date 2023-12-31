/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MovieContext } from '../../src/MovieContext';
import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Header from '../header';
import Navigation from '@/src/Navigation';
import { AiFillLike } from "react-icons/ai";
import { Empty, Tooltip } from 'antd';

const MovieDetailsScreen = () => {
    const router = useRouter();
    const { id } = router.query;
    const { setSelectedMovie, movies, selectedMovie, addToWatchlist, isMovieInWatchlist, watchlist } = useContext(MovieContext);

    useEffect(() => {
        const selectedMovie = movies.find((movie) => movie.id.toString() === id) || watchlist.find((movie) => movie.id.toString() === id);
        setSelectedMovie(selectedMovie);
    }, [id, movies]);

    if (!selectedMovie) {
        return <Empty className='watchlist_error' />
    }

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient( to right bottom,  rgba(13, 3, 3, 0.436), rgba(21, 2, 2, 0.429) ), url(https://image.tmdb.org/t/p/w300${selectedMovie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '50px',
        padding: '60px',
        color: 'White',
        fontSize: '25px',
    };

    let Image = `https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`

    if (selectedMovie.backdrop_path == null) {
        backgroundImageStyle.backgroundImage = `url(/error-404-12.png)`;
    }

    if (selectedMovie.poster_path == null) {
        Image = '/found.png'
    }

    return (
        <div
            className='id_page'
        >
            <div className='nav_bar_main'>
                <Header />
                <Navigation />
            </div>
            <div className='gradient' style={backgroundImageStyle}>
                <div>
                    <img
                        className='poster'
                        src={Image}
                        alt={selectedMovie?.title}
                        width={250}
                        height={400} />
                </div>
                <div className='movie_details'>
                    <h2>{selectedMovie?.original_title}</h2>
                    <p>Relase Date : {selectedMovie?.release_date}</p>
                    <p className='rating'><AiFillStar className='icon_Star' /> {selectedMovie?.vote_average}</p>
                    <p>Genres : {selectedMovie?.genre_ids.map(genre => (
                        <span key={genre}>{genre} </span>
                    ))}</p>
                    <p className='icon'><AiFillLike color='rgb(64, 252, 64)' size={25} />
                        {selectedMovie.vote_count}
                    </p>
                    <div
                        className='add_to_watchlist_btn_id'
                        onClick={() => addToWatchlist(selectedMovie)}
                    >
                        {isMovieInWatchlist(selectedMovie.id) ?

                            <Tooltip title='RemoveFromWatchlist' placement='bottom'>
                                <AiFillHeart color='red' size={35} />
                            </Tooltip>
                            :
                            <Tooltip title='AddToWatchlist' placement='bottom'>
                                <AiOutlineHeart size={35} color='white' />
                            </Tooltip>
                        }
                    </div>
                </div>
            </div>
            {selectedMovie.overview && <div className='about_movie'>
                <h1>About the movie :</h1>
                <p>{selectedMovie?.overview}</p>
            </div>}
        </div>
    );
};

export default MovieDetailsScreen;