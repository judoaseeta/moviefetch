import * as React from 'react';
import { MovieSummaryContainer } from './styled';
export type MovieSummaryProps = {
    Movie: MovieBySearch;
    requestMovieById: (id: string) => RequestMovieById;
};
const MovieSummary: React.SFC<MovieSummaryProps> = 
({ Movie, requestMovieById }) => (
    <MovieSummaryContainer
        onClick={() => requestMovieById(Movie.imdbID)}
    >
        {Movie.Poster ? <img src={Movie.Poster} alt="Movie Poster" /> 
                            : null}
        <h4>{Movie.Title}</h4>
        <p>{Movie.Type}</p>
        <p>{Movie.Year}</p>
    </MovieSummaryContainer>
);
export default MovieSummary;