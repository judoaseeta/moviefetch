import * as React from 'react';
import { MovieDetailContainer } from './styled';
import AsyncComponent from '../../utils/asyncComponent';
import { MergedProps as MovieRepliesProps } from '../../containers/MovieReplies';
import { withRouter } from 'react-router-dom';
const MovieReplies = 
withRouter(
AsyncComponent<MovieRepliesProps>(
    () => import('../../containers/MovieReplies')) as React.ComponentType<any>);
export type MovieDetailProps = {
    details: MovieById,
    isRepliesOn: boolean;
};
const MovieDetail: React.SFC<MovieDetailProps> = ({ details, isRepliesOn }) => (
    <MovieDetailContainer>
        {isRepliesOn 
        ? <div
            className="movieRepliesWrapper"
        ><MovieReplies />
        </div>
        : null
        }
        <img
            className="tello"
            src={details.Poster} 
        />
        <div
            className="movieDetailDiv"
        >
            <span>Title:<p>{details.Title}</p></span>
            <span>Type:<p>{details.Type}</p></span>
            <span>Runtime:<p>{details.Runtime}</p></span>
        </div>
        <div
            className="movieDetailDiv"
        >
            <span>Plot:<p>{details.Plot}</p></span>
        </div>
        <div
            className="movieDetailDiv"
        >
            Actors: 
            <p>{details.Actors}</p>
            Writers:
            <p> {details.Writer}</p>
        </div>
        <div
            className="movieDetailDiv"
        >
            <span>Release: <p>{details.Released}</p></span>
            <span>Year: <p>{details.Year}</p></span>
        </div>
        <div
            className="movieDetailDiv"
        >
            Ratings: 
            <ul>
            {details.Ratings.map((rate) => <li key={rate.Source}>{rate.Source} : {rate.Value}</li>)}
            </ul>
            <span>
            BoxOffice:
            <p>{details.BoxOffice}</p>
            </span>
        </div>
        <div
            className="movieDetailDiv"
        >
            <p>Production: {details.Production}</p>
        </div>
        <div
            className="movieDetailDiv"
        >
            Countries:
            <ul> {details.Country}</ul>
            Languages:
            <ul> {details.Language}</ul>
        </div>
    </MovieDetailContainer>
);
export default MovieDetail;