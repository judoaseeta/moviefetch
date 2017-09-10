import * as React from 'react';
import { MovieDetailContainer } from './styled';
import { ReplyForm } from '../MovieReplies';
import AsyncComponent from '../../utils/asyncComponent';
import {Props as MovieRepliesProps } from '../../containers/MovieReplies';
import { withRouter } from 'react-router-dom';
const MovieReplies = 
withRouter(
AsyncComponent<MovieRepliesProps>(
    () => import('../../containers/MovieReplies')) as React.ComponentType<any>);
const MovieDetail: React.SFC<{
    details: MovieById,
    isRepliesOn: boolean;
}> = ({details, isRepliesOn}) => (
    <MovieDetailContainer>
        <div 
            className={isRepliesOn ? 'repliesListContainerOn' : 'repliesListContainerOff'}
        >
            <MovieReplies />
            <ReplyForm 
                movieName={details.Title}
            />
        </div>
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
            <p>{details.Actors}</p>
            Writers:
            <p> {details.Writer}</p>
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
            <ul> {details.Country}</ul>
            Languages:
            <ul> {details.Language}</ul>
        </div>
    </MovieDetailContainer>
);
export default MovieDetail;