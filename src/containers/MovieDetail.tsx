import * as React from 'react';
import { match } from 'react-router-dom';
import { RootState } from '../state/reducers/';
import { 
    MovieDetailOuterContainer as Outer,
    MovieDetailPanel as Panel,
    MovieRepliesWrapper as Wrapper
} from '../components/styled';
import MovieDetail from '../components/MovieDetail';
import Button from '../components/Button';
import { bindActionCreators, Dispatch } from 'redux';
import * as H from 'history';
import { connect } from 'react-redux';
import apiActions from '../state/actions/apiActions';
import getMovieDetail from '../state/selectors/movieDetails';
interface MovieDetailProp {
    MovieDetail: MovieById;
}
interface DispatchedProps {requestMovieById: (id: string) => RequestMovieById; } 
export interface MergedProps extends MovieDetailProp {
    history: H.History;
    match: match<{id: string}>;
    requestMovieById: (id: string) => RequestMovieById;
}
const makeMapStateToProps = () => {
    const getDetails = getMovieDetail();
    const mapStateToProps = (state: RootState, props: MergedProps) => {
        return {
            MovieDetail: getDetails(state, props),
        };
    };
    return mapStateToProps;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        requestMovieById: bindActionCreators(apiActions.requestMovieById, dispatch)
    };
};

class MovieDetailContainer extends React.PureComponent<MergedProps, {
    isRepliesOn: boolean;
}> {
    state = {
        isRepliesOn: false
    };
    componentDidMount() {
        if (!this.props.MovieDetail) {
            this.props.requestMovieById(this.props.match.params.id);
        }
        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        const { isRepliesOn } = this.state;
        if (this.props.MovieDetail) {
            const details = this.props.MovieDetail;
            return(
                <Outer>
                    <Wrapper 
                        className={isRepliesOn ? 'active' : ''}
                        onClick={this.onReplies}
                    />
                    <Panel>
                        <Button
                            onClickHandler={this.props.history.goBack}
                        >
                            <i className="fa fa-angle-left fa-2x" aria-hidden="true" />
                        </Button>
                        <Button
                            onClickHandler={this.onReplies}
                        >
                            <i className="fa fa-comments fa-2x" aria-hidden="true" />
                        </Button>
                    </Panel>
                    <MovieDetail
                        details={details}
                        isRepliesOn={this.state.isRepliesOn}
                    />
                </Outer>
            );
        } else {
            return null;
        }
    }
    private onReplies = () => {
        this.setState({
            isRepliesOn: !this.state.isRepliesOn
        });
    }
}
const component = 
connect<MovieDetailProp, DispatchedProps, MergedProps >(makeMapStateToProps, mapDispatchToProps)(MovieDetailContainer);
export default component;