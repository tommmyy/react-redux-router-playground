import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Event = ({ eventId }) => (
	<div className="Event">
		<h2>Event: {eventId}</h2>
	</div>
);

Event.propTypes = {
	eventId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
	return {
		eventId: ownProps.params.eventId,
	};
}

export default connect(mapStateToProps)(Event);
