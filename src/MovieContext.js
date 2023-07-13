/* eslint-disable react/display-name */
import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [watchlist, setWatchlist] = useState([]);
    const [watchlistCount, setWatchlistCount] = useState(0);

    const apiKey = '9dfe622f97c35a9030377f8ba2951453';

    useEffect(() => {
        fetchMovies('popular');

        const storedWatchlist = localStorage.getItem('watchlist');
        if (storedWatchlist) {
            const parsedWatchlist = JSON.parse(storedWatchlist);
            setWatchlist(parsedWatchlist);
            setWatchlistCount(parsedWatchlist.length);
        }
    }, []);

    const fetchMovies = (query) => {
        fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error fetching movies.');
            })
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => {
                console.log(error);
                setMovies([]);
            });
    };

    const searchMovies = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error searching movies.');
            })
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => {
                console.log(error);
                setMovies([]);
            });
    };

    const addToWatchlist = (movie) => {
        const isMovieInWatchlist = watchlist.find((m) => m.id === movie.id);
        if (!isMovieInWatchlist) {
            const updatedWatchlist = [...watchlist, movie];
            setWatchlist(updatedWatchlist);
            setWatchlistCount(watchlistCount + 1);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        } else {
            const updatedWatchlist = watchlist.filter((m) => m.id !== movie.id);
            setWatchlist(updatedWatchlist);
            setWatchlistCount(watchlistCount - 1);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        }
    };

    const isMovieInWatchlist = (movieId) => {
        return watchlist.some((movie) => movie.id === movieId);
    };

    return (
        <MovieContext.Provider
            value={{
                movies,
                searchQuery,
                selectedMovie,
                watchlist,
                watchlistCount,
                setSearchQuery,
                setSelectedMovie,
                fetchMovies,
                searchMovies,
                addToWatchlist,
                isMovieInWatchlist,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;