import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

ReactDOM.render(
	<Root store={configureStore()} />,
	document.getElementById('root')
);
