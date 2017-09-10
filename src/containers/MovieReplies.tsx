import * as React from 'react';
import { RootState } from '../state/reducers/';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestMovieReply } from '../state/actions/apiActions';
import { Replies } from '../components/MovieReplies';
import { MovieRepliesContainer as Container } from '../components/MovieReplies/styled';
export type Props = {
    match: match<{id: string}>
    replies: {
        [key: string]: Reply[]
    }
    requestReplies: (movieId: string) => FetchMovieReplies;
};
const mapStateToProps = (state: RootState) => {
    return {
        replies: state.ReplyState.Replies
    };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        requestReplies: bindActionCreators(requestMovieReply, dispatch)
    };
};
class MovieReplies extends React.PureComponent<Props, {}> {
    componentDidMount() {
        this.props.requestReplies(this.props.match.params.id);
    }
    render() {
        const { id } = this.props.match.params;
        return (
            <Container>
                {this.props.replies[id]
                ? <Replies
                    replies={this.props.replies[id]}
                />
                : <div>Post the first review for this movie!</div>
                }
            </Container>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(MovieReplies);