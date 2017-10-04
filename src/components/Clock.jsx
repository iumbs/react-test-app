import React from 'react';

export class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.toggleSeconds = this.toggleSeconds.bind(this);
	}

	toggleSeconds(e) {
		const bool = this.props.seconds ? false : true;
		this.props.onSecondsToggler(bool);
	}

	render() {
		const fullDate = this.props.date.toLocaleTimeString();
		const date = fullDate.substr(0, 5);
		if (this.props.seconds) {
			return (
				<div>
					<h1>{fullDate}</h1>
					<button onClick={this.toggleSeconds}>Hide seconds</button>
				</div>
			);
		} else {
			return (
				<div>
					<h1>{date}</h1>
					<button onClick={this.toggleSeconds}>Show seconds</button>
				</div>
			);
		}
	}

}
