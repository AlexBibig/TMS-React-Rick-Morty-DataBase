import React from 'react';
import styles from './App.module.css';
import Header from '../Header';
import CharactersList from '../CharactersList';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import EpisodesList from '../EpisodesList';
import LocationsList from '../LocationsList';
import CharacterPage from '../CharacterPage';
import EpisodePage from '../EpisodePage';
import LocationPage from '../LocationPage';
import MainPage from '../MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className={`App ${styles.App}`}>
        <Header />
        <Switch>
          <Route path='/characters'>
            <CharactersList />
          </Route>
          <Route path={`/character/:id`}>
            <CharacterPage />
          </Route>
          <Route path='/episodes'>
            <EpisodesList />
          </Route>
          <Route path={`/episode/:id`}>
            <EpisodePage />
          </Route>
          <Route path='/locations'>
            <LocationsList />
          </Route>
          <Route path={`/location/:id`}>
            <LocationPage />
          </Route>
          <Route path={`/Main`}>
            <MainPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
