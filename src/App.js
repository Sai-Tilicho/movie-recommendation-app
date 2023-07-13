import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieContextProvider from './MovieContext';
import SearchScreen from './SearchScreen';
import MovieListScreen from './MovieListScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import WatchlistScreen from './WatchlistScreen';

const App = () => {
    return (
        <Router>
            <MovieContextProvider>
                <Switch>
                    <Route exact path="/" component={SearchScreen} />
                    <Route path="/movies" component={MovieListScreen} />
                    <Route path="/details/:id" component={MovieDetailsScreen} />
                    <Route path="/watchlist" component={WatchlistScreen} />
                </Switch>
            </MovieContextProvider>
        </Router>
    );
};

export default App;
