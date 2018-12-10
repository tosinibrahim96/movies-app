import React, { Component } from 'react'
import Navigation from './navigation/Navigation';
import Movies from './movies/Movies';
import './Main.css';


export default class Main extends Component {
  render() {
    return (
      <section className='main'>
         <Navigation />
         <Movies />
      </section>
    )
  }
}
