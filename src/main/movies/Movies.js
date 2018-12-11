import React, { Component } from 'react'
import MovieList from './MovieList';
import './Movies.css';

export default class Movies extends Component {
  state = {
     movies: []
  } 
  componentDidMount(){
     const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

     fetch(apiUrl)
     .then(response =>  response.json())
     .then(data => this.displayMovies(data))
     .catch(error => console.log(error))
  }
  displayMovies = (data)=>{
   const movies = data.results.map((result)=>{
     return result;
   });
   this.setState({movies});
  }
  render() {
    return (
      <div className='movies'>
        <ul className='movies'>
           {this.state.movies.map( movie=>(
               <MovieList key = {movie.id} movie = {movie}/>
           ))}
        </ul>
      </div>
    )
  }
}
