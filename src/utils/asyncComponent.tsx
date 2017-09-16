import * as React from 'react';
// import * as Perf from 'react-addons-perf';
type AsyncLoader = () => Promise<any>;
type Component<P> = React.ComponentClass<P> | React.SFC<P> | null;
interface State<P> {
    MainComponent: Component<P>;
}
function asyncComponent<P>(
    asyncLoader: AsyncLoader,
) {
    return class AsyncComponent extends React.Component<P, State<P>> {
        static Component = null; 
        state: State<P> = {
            MainComponent: AsyncComponent.Component
        };
        componentDidUpdate() {
            // Perf.stop();
            // Perf.printInclusive();
            // Perf.printWasted();
        }
        componentWillMount() {
            if (!this.state.MainComponent) {
                asyncLoader()
                    .then(module => module.default || module)
                    .then((component: Component<P>) => {
                        // Perf.start();
                        this.setState({
                            MainComponent: component
                        });
                    });
            }
        }
        render () {       
            const { MainComponent } = this.state;
            if (MainComponent) {
              return (
                <MainComponent {...this.props} />
              );
            }
            return null;
        }
    };
}
export default asyncComponent;