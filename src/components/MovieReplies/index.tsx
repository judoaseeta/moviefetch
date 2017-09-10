import * as React from 'react';
import Rater from 'react-rater';
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
    movieName: string;
}, {
    stars: number;
}>  {
    state = {
        stars: 0
    };
    render() {
        console.log(this.state);
        return (
            <Form>
            <label htmlFor="rating">Rating for <span>{this.props.movieName}</span></label>
            <Rater
                onRate={this.onRate}
            />
            <label htmlFor="opinion">Opinion for <span>{this.props.movieName}</span></label>
            <textarea 
                name="opinion"
                rows={8}
                cols={50}
            />
            <button>Sumbit</button>
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