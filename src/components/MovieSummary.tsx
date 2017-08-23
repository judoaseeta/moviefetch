import * as React from 'react';
import { MovieSummaryContainer } from './styled';
export type MovieSummaryProps = {
    Movie: MovieBySearch
};
const MovieSummary: React.SFC<MovieSummaryProps> = ({ Movie }) => (
    <MovieSummaryContainer>
        {Movie.Poster ? <img src={Movie.Poster} alt="Movie Poster" /> 
                            : null}
        <h4>{Movie.Title}</h4>
        <p>{Movie.Type}</p>
        <p>{Movie.Year}</p>
    </MovieSummaryContainer>
);
export default MovieSummary;
/*
{Movie.Title.length <= 36 
            ? <h4>{Movie.Title}</h4> 
            : <div>
                <h4>{Movie.Title.slice(0, 36)}<br/>{Movie.Title.slice(36, Movie.Title.length)}</h4>
              </div> }
*/