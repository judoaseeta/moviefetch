import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import apiActions from './state/actions/apiActions';
import changeStateActions from './state/actions/changeStateActions';
import changeSearchStateActions from './state/actions/changeSearchStateActions';
import { RootState } from './state/reducers';
import AppComponent from './components/AppComponent';
import { withRouter } from 'react-router-dom';
class App extends React.Component<RootState & ActionList, {}> {
  render() {
    console.log(this.props);
    return (
      <AppComponent {...this.props}/>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return state;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    apiActions: bindActionCreators(apiActions, dispatch),
    changeSearchStateActions: bindActionCreators(changeSearchStateActions, dispatch),
    changeStateActions: bindActionCreators(changeStateActions, dispatch)
  };
};
const apps = connect(mapStateToProps, mapDispatchToProps)(App) as React.ComponentType<any>;
export default withRouter(apps);