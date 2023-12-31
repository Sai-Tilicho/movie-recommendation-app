import React from 'react';
import Navigation from '@/src/Navigation';
import WatchlistScreen from './watchlist';
import Header from './header';
import MovieCarousel from './movieCarousel';

const SearchScreen = () => {

  return (
    <div className='header'>
      <div className='nav_bar_main'>
        <Header />
        <Navigation />
      </div>
      <div className="carousel-container">
        <MovieCarousel />
      </div>
      <div className='content_area'>
        <WatchlistScreen />
      </div>
    </div>
  );
};

export default SearchScreen;
