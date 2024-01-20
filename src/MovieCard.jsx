import React from "react";


const MovieCard = ({Movie}) =>{
    
    return (
        <div className="moviecard">
            <img src={Movie.Poster !== 'N/A' ? Movie.Poster : 'https://via.placeholder.com/400'} alt={Movie.Title} />
            <div className="moviedetail">
                <p>{Movie.Type}</p>
                <p>{Movie.Title}</p>
                <p>{Movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;