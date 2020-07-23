import React from 'react';
import './App.css';
import Header from '../Header';
import CharactersList from '../CharactersList';

const App = () => {
    return (
        <div className="App">
            <Header />
            <CharactersList />
        </div>
    );
}

export default App;