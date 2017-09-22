import * as React from 'react';
import { RootState } from '../state/reducers/';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestMovieReply, requestPostReply } from '../state/actions/apiActions';
import { Replies, ReplyForm } from '../components/MovieReplies';
import { Container, MovieRepliesContainer } from '../components/MovieReplies/styled';
import { getMovieReplies,  getAuthState } from '../state/selectors/movieReplies';
import { Enum } from '../state/reducers/replyReducer';
import sortReplies from '../state/actions/replyStateActions';
type ReplyStateAction = {
    type: string;
    sort: Enum;
    movieId: string;
};
type MappedProps = {
    AuthState: {
        isLoggedIn: boolean;
        identityToken: string;
        userName: string;
    };
    replies: Reply[] | null;
};
type dispatchedProps = {
    sortReplies: (movieId: string, sort: Enum) => ReplyStateAction;
    requestReplies: (movieId: string) => FetchMovieReplies;
    requestPostReply: (id: string, content: string, rating: number, token: string) => RequestPostReply;
};
export type MergedProps = {
    AuthState: {
        isLoggedIn: boolean;
        identityToken: string;
        userName: string;
    };
    match: match<{id: string}>
    replies: Reply[] | null;
    sortReplies: (movieId: string, sort: Enum) => ReplyStateAction;
    requestReplies: (movieId: string) => FetchMovieReplies;
    requestPostReply: (id: string, content: string, rating: number, token: string) => RequestPostReply;
};
const makeMapStateToProps = () => {
    const authstate = getAuthState();
    const GetReplies = getMovieReplies();
    const mapStateToProps = (state: RootState, props: MergedProps) => {
        return {
            AuthState: authstate(state),
            replies: GetReplies(state, props)
        };
    };
    return mapStateToProps;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        sortReplies: bindActionCreators(sortReplies, dispatch),
        requestReplies: bindActionCreators(requestMovieReply, dispatch),
        requestPostReply: bindActionCreators(requestPostReply, dispatch)
    };
};
class MovieReplies extends React.PureComponent<MergedProps, {
    isUserWantToDelete: boolean;
}> {
    state = {
        isUserWantToDelete: false
    };
    componentDidMount() {
        this.props.requestReplies(this.props.match.params.id);
    }
    render() {
        return (
            <Container>
                <MovieRepliesContainer>
                    {this.props.replies
                    ? this.props.replies.length > 0
                        ? <Replies
                            deleteSwitcher={this.deleteSwitcher}
                            replies={this.props.replies}
                            isUserWantToDelete={this.state.isUserWantToDelete}
                            userName={this.props.AuthState.userName ? this.props.AuthState.userName : null}
                        />
                        : <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
                    : <div>Post the first review for this movie!</div>
                    }
                </MovieRepliesContainer>
                <ReplyForm 
                    AuthState={this.props.AuthState}
                    movieId={this.props.match.params.id}
                    requestPostReply={this.props.requestPostReply}
                />
            </Container>
        );
    }
    private deleteSwitcher: React.MouseEventHandler<HTMLSpanElement> = (e) => {
        this.setState({
            isUserWantToDelete: !this.state.isUserWantToDelete
        });
    }
}
export default 
connect<MappedProps, dispatchedProps, MergedProps >(makeMapStateToProps, mapDispatchToProps )(MovieReplies);