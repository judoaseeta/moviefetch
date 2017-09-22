import * as React from 'react';
import Rater from 'react-rater';
import { Link } from 'react-router-dom';
import 'react-rater/lib/react-rater.css';
import {
    MovieReplyForm as Form,
    MovieReply as ReplyWrapper,
    Content,
    DeletePanelContainer,
    DeletePanelButtons,
    ReplyDate,
    ReplyTopRight
} from './styled';
export type RepliesProps = {
    isUserWantToDelete: boolean;
    replies: Reply[];
    userName: string | null;
    deleteSwitcher: (e: React.MouseEvent<HTMLSpanElement>) => void;
};
export const Replies: React.SFC<RepliesProps> = (props) => (
    <div>
        {props.replies.map((reply) => {
            return <MovieReply
                        key={`${reply.userName}/${reply.createdAt}`} 
                        authUserName={props.userName}
                        rating={reply.rating}
                        content={reply.content}
                        userName={reply.userName}
                        createdAt={reply.createdAt}
                        deleteSwitcher={props.deleteSwitcher}
                        isUserWantToDelete={props.isUserWantToDelete}
            />;
        })}
    </div>
);
export type DeletePanelProps = {
    // requestDelete: () => void;
    deleteSwitcher: (e: React.MouseEvent<HTMLSpanElement>) => void;
};
export const DeletePanel: React.SFC<DeletePanelProps> = (props) => (
    <DeletePanelContainer>
        <p>Are you sure want to delete it?</p>
        <DeletePanelButtons>
            <span 
                className="yes"
            >YES
            </span>
            <span 
                className="no"
                onClick={props.deleteSwitcher}
            >NO
            </span>
        </DeletePanelButtons>
    </DeletePanelContainer>
);
export const MovieReply: React.SFC<{
    rating: number;
    createdAt: number;
    content: string;
    userName: string;
    authUserName: string | null;
    isUserWantToDelete: boolean;
    deleteSwitcher: (e: React.MouseEvent<HTMLSpanElement>) => void;
}> = (props) => (
    <ReplyWrapper
        className={props.authUserName && props.userName === props.authUserName ? 'userReview' : ''}
    >
            <div>
                <Rater 
                    rating={props.rating}
                    interactive={false}
                />
                <ReplyTopRight>
                    Written By:{props.userName}
                    {props.authUserName && props.userName === props.authUserName 
                    ? <span 
                        id="delete"
                        onClick={props.deleteSwitcher}
                    >X
                    </span>
                    : null}
                    {props.authUserName && (props.userName === props.authUserName) && props.isUserWantToDelete
                    ? <div className="deletePanel">
                        <DeletePanel 
                            deleteSwitcher={props.deleteSwitcher}
                        />
                    </div>
                    : null}
                </ReplyTopRight>
            </div>
            <Content>
                {props.content}
            </Content>
            <ReplyDate>
                {new Date(props.createdAt).toDateString()}
            </ReplyDate>
    </ReplyWrapper>
);
export class ReplyForm extends React.PureComponent<{
    AuthState: {
        isLoggedIn: boolean;
        identityToken: string;
    };
    movieId: string;
    requestPostReply: (id: string, content: string, rating: number, token: string) => RequestPostReply;
}, {
    review: string;
    stars: number;
}>  {
    state = {
        review: '',
        stars: 0
    };
    render() {
        const { isLoggedIn } =  this.props.AuthState;
        return (
            <Form>
            <div
                className={`nonAuthBlocker ${isLoggedIn ? '' : 'active'}`}
            >
                <h4>You must sign-in to write review!</h4>
                <p>Going to <Link to="/authentication">Authentication</Link> page.</p>
            </div>
            <label htmlFor="rating">Rating for this movie.</label>
            <Rater
                onRate={this.onRate}
                rating={this.state.stars}
            />
            <label htmlFor="opinion">Review for this movie.</label>
            <textarea 
                name="review"
                rows={8}
                cols={50}
                onChange={this.onChangeHandler}
            />
            <button
                onClick={this.onSubmitHandler}
            >Submit
            </button>
        </Form>
        );
    }
    private onChangeHandler: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
        this.setState({
            review: e.currentTarget.value
        });
    }
    private onSubmitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        let { review , stars } = this.state;
        this.props.requestPostReply(
            this.props.movieId, review, stars, this.props.AuthState.identityToken);
        this.setState({
            review: '', 
            stars: 0
        });
    }
    private onRate = (args: OnRateArgs) => {
        if (args.type === 'click') {
            this.setState({
                stars: args.rating
            });
        }
    }
}