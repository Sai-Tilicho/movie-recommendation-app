/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import { MovieContext } from '../src/MovieContext';
import Link from 'next/link';
import { Carousel } from 'antd';

const MovieCarousel = () => {
    const { movies } = useContext(MovieContext);

    const filteredItems = movies.filter((item) => item.backdrop_path !== null);

    return (
        filteredItems.length > 0 &&
        <Carousel autoplay>
            {filteredItems.map((movie) => (
                <Link key={movie.id} href={`/details/${movie?.id}`}>
                    <h1 className='carouselo_movie_title'>{movie?.title}</h1>
                    <img style={
                        {
                            marginTop: '10px',
                            height: '300px',
                            color: '#fff',
                            lineHeight: '160px',
                            textAlign: 'center',
                            background: '#364d79',
                        }
                    }
                        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                        alt={movie?.original_title}
                        className="carousel-image"
                    />
                </Link>
            ))}
        </Carousel>
    );
};

export default MovieCarousel;