import * as React from 'react';

class MovieDetail extends React.PureComponent<{
    imdbId: string;
    requestMovieById: (id: string) => RequestMovieById;
}, {}> {
    componentDidMount() {
        this.props.requestMovieById(this.props.imdbId);
    }
    render() {
        return(
            <div>
                Movie Detail
            </div>
        );
    }
}
export default MovieDetail;