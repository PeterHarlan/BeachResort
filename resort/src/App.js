import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar"
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      {/* Add Route parameters with slug var */}
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      {/* Since its in switch, error will render if path does not exit */}
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
