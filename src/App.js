import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css"

import search from './search.png'
import MovieCard from './MovieCard'
const api_key = '598932cc'
const API_URL = `https://www.omdbapi.com?apikey=${api_key}`


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const searchMovies = async(title) =>{
            try{
                setLoading(true);
                const response = await fetch(`${API_URL}&s=${title}`);
                const data = await response.json()
                
                setMovies(data.Search);
            }
            catch (error){
            console.error('Error When Fething Data' + error);
            }
            finally{
                setLoading(false)
            }
    }

    useEffect(
        () =>{
                searchMovies('')
        }, []
    );

    return(
        <div className="container">
            <div className="header">
                <h1>Movie Library</h1>  
                <div className="search-bar">
                    <input 
                    type="text"
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                    />
                    <img
                        src={search}
                        alt="search icon"
                        onClick={() => { searchMovies(searchTerm) }}                    
                    />
                </div>

            </div>
            <div className="main">

                {
                    loading ?
                    (
                        <div className="loader-container">
                            <span className="loader"></span>
                        </div>
                    ):
                    ( 
                        movies?.length > 0 ?
                        (
                            <div className="card-container">
                                {movies.map( (movie) => (
                                    <MovieCard key={movie.imdbID} Movie={movie}/>
                                    ))}
                        </div>
                                
                        ) : (
                            <div className="empty"> 
                                <h2>No Movies Found</h2>
                            </div>
                        )
                    )
                }
            </div>
        </div> 
    );
}

export default App; 