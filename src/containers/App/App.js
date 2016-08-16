import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	_renderErrorMessage() {
		const errorMessage = this.props.errorMessage;

		return errorMessage == null ?
			errorMessage
			: <p className="App-errorMessage">{errorMessage}</p>;
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					{this._renderErrorMessage()}
					{this.props.children}
				</p>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	errorMessage: PropTypes.node,
};

function mapStateToProps(state, ownProps) {
	return {
		errorMessage: state.errorMessage,
	};
}

export default connect(mapStateToProps)(App);
