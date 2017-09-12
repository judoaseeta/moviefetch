import * as React from 'react';
import { RootState } from '../state/reducers/';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestMovieReply } from '../state/actions/apiActions';
import { Replies } from '../components/MovieReplies';
import { MovieRepliesContainer as Container } from '../components/MovieReplies/styled';
import { getMovieReplies } from '../state/selectors/movieReplies';
type mappedProps = {
    replies: Reply[] | null
};
type dispatchedProps = {
    requestReplies: (movieId: string) => FetchMovieReplies;
};
export type MergedProps = {
    match: match<{id: string}>
    replies: Reply[] | null
    requestReplies: (movieId: string) => FetchMovieReplies;
};
const makeMapStateToProps = () => {
    const GetReplies = getMovieReplies();
    const mapStateToProps = (state: RootState, props: MergedProps) => {
        return {
            replies: GetReplies(state, props)
        };
    };
    return mapStateToProps;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        requestReplies: bindActionCreators(requestMovieReply, dispatch)
    };
};
class MovieReplies extends React.PureComponent<MergedProps, {}> {
    componentDidMount() {
        this.props.requestReplies(this.props.match.params.id);
    }
    render() {
        return (
            <Container>
                {this.props.replies
                ? <Replies
                    replies={this.props.replies}
                />
                : <div>Post the first review for this movie!</div>
                }
            </Container>
        );
    }
}
export default 
connect<mappedProps, dispatchedProps, MergedProps >(makeMapStateToProps, mapDispatchToProps )(MovieReplies);