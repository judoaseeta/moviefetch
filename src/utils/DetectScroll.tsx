import * as React from 'react';
import detectScroll from './detectScroll';
type ScrollDetectorProps = {
    isDown: boolean;
    isUp: boolean;
};
function ScrollDetector <P>(Component: new () => React.Component<ScrollDetectorProps & P, any>) {
    return class DetectScroll extends React.Component<ScrollDetectorProps & P, {
        isUp: boolean,
        isDown: boolean
    }> {
        componentDidMount() {
            detectScroll({
                startValue: 100,
                sensibility: 200,
                isUpSetter: this.isUpSetter,
                isDownSetter: this.isDownSetter
            });
        }
        render() {
            return (
                <Component 
                    {...this.props}
                    isDown={this.state.isDown}
                    isUp={this.state.isUp}
                />
            );
        }
        isUpSetter = (value: boolean) => {
            this.setState({
                isUp: value
            });
        }
        isDownSetter = (value: boolean) => {
            this.setState({
                isDown: value
            });
        }
    };
};
export default ScrollDetector;
