import React, { Component } from 'react';
import './Movies.css';
import MovieListItem from './MovieListItem';

const movies = ["Breaking bad", "Narcos", "Game of Thrones"];

export default class Movies extends Component {
  render() {
    return (
      <section className="movies">
         <ul className="movies">
           {
            movies.map((movie,index)=>
            <MovieListItem key={index.toString()} title={movie}/>
            )}
         </ul>
      </section>
    )
  }
}
