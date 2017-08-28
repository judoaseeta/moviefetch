import * as React from 'react';
import { withRouter, match } from 'react-router-dom';
import { State as MovieDetailState } from '../state/reducers/movieReducer';
import { MovieDetailContainer as Container } from '../components/styled';
import * as H from 'history';
type MovieDetailProps = {
    history: H.History;
    match: match<{id: string}>;
    MovieDetail: MovieDetailState
    requestMovieById: (id: string) => RequestMovieById;
};
class MovieDetail extends React.PureComponent<MovieDetailProps, {}> {
    componentDidMount() {
        if (!this.props.MovieDetail.movieDetails[this.props.match.params.id]) {
            this.props.requestMovieById(this.props.match.params.id);
        }
    }
    componentWillUnMount() {
        console.log('detail will be unmounted');
    }
    render() {
        if (this.props.MovieDetail.movieDetails[this.props.match.params.id]) {
            const details = this.props.MovieDetail.movieDetails[this.props.match.params.id];
            return(
                <Container>
                    <div className="Panel">
                        <button onClick={() => this.props.history.goBack()}>Back</button>
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
                </Container>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}
export default withRouter(MovieDetail as React.ComponentType<any> );