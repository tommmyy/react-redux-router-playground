import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import DevTools from '../DevTools';
import App from '../App';
import Event from '../Event';

class Root extends Component {
	render() {
		const { store } = this.props;
		const history = syncHistoryWithStore(browserHistory, store)

		return (
			<Provider store={store}>
				<div>
					<Router history={history}>
						<Route path="/" component={App}>
							<Route path="/event/:eventId" component={Event} />
						</Route>
					</Router>
					<DevTools />
				</div>
			</Provider>
		);
	}
}

Root.propTypes = {
	store: PropTypes.object,
};


export default Root;
