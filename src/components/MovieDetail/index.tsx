import * as React from 'react';
import { MovieDetailContainer } from './styled';
const MovieDetail: React.SFC<{
    details: MovieById
}> = ({details}) => (
    <MovieDetailContainer>
        <img
            className="tello"
            src={details.Poster} 
        />
        <div>
            <span>Title:<p>{details.Title}</p></span>
            <span>Type:<p>{details.Type}</p></span>
            <span>Runtime:<p>{details.Runtime}</p></span>
        </div>
        <div>
            <span>Plot:<p>{details.Plot}</p></span>
        </div>
        <div>
            Actors: 
            <ul>{details.Actors.map((actor) => <li key={actor}>{actor}</li>)}</ul>
            Writers:
            <ul> {details.Writer.map((writer) => <li key={writer}>{writer}</li>)}</ul>
        </div>
        <div>
            <span>Release: <p>{details.Released}</p></span>
            <span>Year: <p>{details.Year}</p></span>
        </div>
        <div>
            Ratings: 
            <ul>
            {details.Ratings.map((rate) => <li key={rate.Source}>{rate.Source} : {rate.Value}</li>)}
            </ul>
            <span>
            BoxOffice:
            <p>{details.BoxOffice}</p>
            </span>
        </div>
        <div>
            <p>Production: {details.Production}</p>
        </div>
        <div>
            Countries:
            <ul> {details.Country.map((coun) => <li key={coun}>{coun}</li>)}</ul>
            Languages:
            <ul> {details.Language.map((lang) => <li key={lang}>{lang}</li>)}</ul>
        </div>
    </MovieDetailContainer>
);
export default MovieDetail;