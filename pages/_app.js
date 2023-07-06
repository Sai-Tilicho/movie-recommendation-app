import React from 'react';
import MovieContextProvider from '../src/MovieContext';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <MovieContextProvider>
      <Component {...pageProps} />
    </MovieContextProvider>
  );
};

export default MyApp;
