import * as React from 'react';
import Rater from 'react-rater';
import { Link } from 'react-router-dom';
import 'react-rater/lib/react-rater.css';
import {
    MovieReplyForm as Form,
    MovieReply
} from './styled';
export const Replies: React.SFC<{
    replies: Reply[]; 
}> = (props) => (
    <div>
        {props.replies.map((reply, i) => (
            <MovieReply
                key={i}
            >
                <Rater 
                    rating={reply.rating}
                    interactive={false}
                />
                <p>{reply.content}</p>
            </MovieReply>
        ))}
    </div>
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
        this.props.requestPostReply(
            this.props.movieId, this.state.review, this.state.stars, this.props.AuthState.identityToken);
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