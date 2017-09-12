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
                <input 
                    value={reply.content}
                    readOnly={true}
                />
            </MovieReply>
        ))}
    </div>
);
export class ReplyForm extends React.PureComponent<{
    AuthState: {
        isLoggedIn: boolean;
        identityToken: string;
    };
    movieName: string;
    movieId: string;
}, {
    stars: number;
}>  {
    state = {
        stars: 0
    };
    render() {
        const { isLoggedIn } =  this.props.AuthState;
        console.log(this.state);
        return (
            <Form>
            <div
                className={`nonAuthBlocker ${isLoggedIn ? '' : 'active'}`}
            >
                <h4>You must sign-in to write review!</h4>
                <p>Going to <Link to="/authentication">Authentication</Link> page.</p>
            </div>
            <label htmlFor="rating">Rating for <span>{this.props.movieName}</span></label>
            <Rater
                onRate={this.onRate}
            />
            <label htmlFor="opinion">Review for <span>{this.props.movieName}</span></label>
            <textarea 
                name="review"
                rows={8}
                cols={50}
            />
            <button
            >Sumbit</button>
        </Form>
        );
    }
    private onRate = (args: OnRateArgs) => {
        if (args.type === 'click') {
            this.setState({
                stars: args.rating
            });
        }
    }
}