// /* eslint-disable @next/next/no-img-element */
// import React, { useContext } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { MovieContext } from '../src/MovieContext';
// import { AiFillLike } from 'react-icons/ai';

// const SearchScreen = () => {
//     const { movies, addToWatchlist } = useContext(MovieContext);
//     const router = useRouter();
//     const { setSearchQuery, searchMovies, searchQuery } = useContext(MovieContext);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (!searchQuery.trim()) {
//             alert('Please enter a movie title or keyword');
//             return;
//         }
//         searchMovies();
//         router.push('/movies');
//     };

//     return (
//         <div className='movie-list'>
//             <h1 className='title'>Movie Search</h1>
//             <form style={{ margin: '50px' }} onSubmit={handleSearch}>
//                 <input
//                     style={{
//                         border: 'none',
//                         outline: 'none',
//                         padding: '10px 50px',
//                         borderTopLeftRadius: '6px',
//                         borderBottomLeftRadius: '6px',
//                         width: '280px',
//                         borderTopLeftRadius: '6px',
//                         borderBottomLeftRadius: '6px',
//                     }}
//                     type="text"
//                     placeholder="Enter a movie title or keyword"
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button style={{ padding: '10px 10px', border: 'none', borderTopRightRadius: '6px', borderBottomRightRadius: '6px', backgroundColor: 'blueviolet' }} type="submit">Search</button>
//             </form>
//             <div className='movie-list-card'>
//                 {movies.map((movie) => (
//                     <div className='card' key={movie.id}>
//                         <div>
//                             <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width={150} height={240} />
//                         </div>
//                         <h2>{movie.title}</h2>
//                         <p>{movie.release_date}</p>
//                         <p style={{ display: 'flex' }}><AiFillLike color='green' size={20} />{movie.vote_count}</p>
//                         <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
//                         <Link className='Link' href={`/details/${movie.id}`}>View Details</Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SearchScreen;
