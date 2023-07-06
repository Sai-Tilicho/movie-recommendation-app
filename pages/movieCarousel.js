/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from '../src/MovieContext';
import Link from 'next/link';

const Carousel = () => {
    const { movies } = useContext(MovieContext);
    const [currentSlide, setCurrentSlide] = useState(0);


    const filteredItems = movies.filter((item) => item.backdrop_path !== null);

    const showNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % filteredItems.length);
    };

    const showPreviousSlide = () => {
        setCurrentSlide((currentSlide - 1 + filteredItems.length) % filteredItems.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % filteredItems.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [filteredItems]);

    return (
        filteredItems.length > 0 &&
        <div className="carousel">
            <button class="carousel-button prev-button" onClick={showPreviousSlide}>&#9001;</button>
            <button class="carousel-button next-button" onClick={showNextSlide}>&#9002;</button>
            {<Link href={`/details/${filteredItems?.[currentSlide]?.id}`} >
                <div
                    className={`carousel-item`}
                >
                    <h1 className='movie_title'>{filteredItems[currentSlide].original_title}</h1>
                    <img
                        src={`https://image.tmdb.org/t/p/original${filteredItems?.[currentSlide]?.backdrop_path}`}
                        alt={filteredItems[currentSlide].original_title}
                        className="carousel-image"
                    />
                </div>
            </Link>}
        </div >
    );
};

export default Carousel;