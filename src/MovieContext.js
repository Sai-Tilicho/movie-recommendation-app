import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [watchlist, setWatchlist] = useState([]);

    const apiKey = '9dfe622f97c35a9030377f8ba2951453';

    useEffect(() => {
        fetchMovies('popular');

        const storedWatchlist = localStorage.getItem('watchlist');
        if (storedWatchlist) {
            setWatchlist(JSON.parse(storedWatchlist));
        }
    }, []);



    const fetchMovies = (query) => {
        // Fetch movies based on query from the movie database API
        fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.log(error));
    };

    const searchMovies = () => {
        // Fetch movies based on search query from the movie database API
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.log(error));
    };

    const addToWatchlist = (movie) => {
        const isMovieInWatchlist = watchlist.find((m) => m.id === movie.id);
        if (!isMovieInWatchlist) {
            const updatedWatchlist = [...watchlist, movie];
            setWatchlist(updatedWatchlist);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        } else {
            const updatedWatchlist = watchlist.filter((m) => m.id !== movie.id);
            setWatchlist(updatedWatchlist);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        }
    };

    const isMovieInWatchlist = (movieId) => {
        return watchlist.some((movie) => movie.id === movieId);
    };


    // const addToWatchlist = (movie) => {
    //     const isMovieInWatchlist = watchlist.find((m) => m.id === movie.id);
    //     if (!isMovieInWatchlist) {
    //         setWatchlist([...watchlist, movie]);
    //     }
    // };

    // const removeFromWatchlist = (movieId) => {
    //     setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
    // };

    return (
        <MovieContext.Provider
            value={{
                movies,
                searchQuery,
                selectedMovie,
                watchlist,
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
