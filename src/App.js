import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import DeckPage from './pages/DeckPage';
import Decks from './pages/Decks';
import Training from './pages/Training';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/decks">
            <Decks />
          </Route>
        </Switch>
        <Switch>
          <Route path="/deck/:id">
            <DeckPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/training">
            <Training />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact>
            <Decks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
