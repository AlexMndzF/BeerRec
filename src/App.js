import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import AllBeers from "./components/AllBeers"
import NewBeer from "./components/NewBeer"
import RandomBeer from "./components/RandomBeer"
import getBeerId from "./components/id"
import NavBar from "./components/navBar"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/all-beers" exact component={AllBeers}/>
        <Route path="/new-beer" exact component={NewBeer}/>
        <Route path="/random-beer" exact component={RandomBeer}/>
        <Route path="/:id" exact component={getBeerId}/>
      </Switch>
    </main>
  );
}

export default App;
