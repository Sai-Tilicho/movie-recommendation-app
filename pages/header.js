import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { MovieContext } from '../src/MovieContext';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    const { setSearchQuery, searchMovies, searchQuery } = useContext(MovieContext);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            alert('Please enter a movie title or keyword');
            return;
        }
        searchMovies();
        router.push('/movies');
    };

    return (
        <div>
            <div className='header_comp'>
                <Link className='app_name' href='/'>
                    <h1>My Movie Recommendation</h1>
                </Link>

                <form onSubmit={handleSearch}>
                    <input
                        className='input'
                        type="text"
                        placeholder="Enter a movie title or keyword"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className='search_btn' type="submit">Search</button>
                </form>
            </div>
        </div>)
};
export default Header;