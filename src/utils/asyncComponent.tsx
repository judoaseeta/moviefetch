import * as React from 'react';
type AsyncLoader = () => Promise<any>;
type Component<P> = React.ComponentClass<P> | React.SFC<P> | null;
interface State<P> {
    MainComponent: Component<P>;
    ErrorComponent: Component<any>;
    LoadingComponent: Component<any>;
    failed: boolean;
}
function AsyncComponent<P>(
    asyncLoader: AsyncLoader,
    errorComponent?: Component<any>,
    loadingComponent?: Component<any>
) {
    return class extends React.Component<P, State<P>> {
        public static displayName = 'AsyncComponent';
        state: State<P> = {
            MainComponent: null,
            ErrorComponent: errorComponent || null,
            LoadingComponent: loadingComponent || null,
            failed: false
        };
        componentWillMount() {
            if (!this.state.MainComponent) {
                asyncLoader()
                    .then(module => module.default || module)
                    .then((component: Component<P>) => {
                        this.setState({
                            MainComponent: component
                        });
                    }).catch(err => {
                        this.setState({ failed: true });
                      });
            }       
        }
        render () {
            const { MainComponent, ErrorComponent, LoadingComponent, failed } = this.state;
            if (MainComponent) {
              return (
                <MainComponent {...this.props} />
              );
            }
            if (failed && ErrorComponent) {
              return <ErrorComponent />;
            }
            if (LoadingComponent) {
              return <LoadingComponent />;
            }
      
            return null;
        }
    };
}
export default AsyncComponent;