import React, { Component } from 'react';
import './main.css';
import Movies from './movies/Movies';
import Navigation from './navigation/Navigation';

class Main extends Component {
   render() {
      return (
         <section className="main">
            <Navigation />
            <Movies />
         </section>
      )
   }
}

export default Main;