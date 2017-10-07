import React from 'react';

const clockStyle = {
	maxWidth: '700px',
	margin: '0 auto 100px auto',
	position: 'relative'
};

const h1Style = {
	textAlign: 'center',
	fontSize: '150px',
	position: 'relative',
	margin: '0',
	padding: '35% 0 0 0'
};

const buttonStyle = {
	fontSize: '38px',
	position: 'absolute',
	margin: '-3% 46%',
	padding: '0'
};

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
				<div className='content' id='clock' style={clockStyle}>
					<h1 style={h1Style}>{fullDate}</h1>
					<button onClick={this.toggleSeconds} style={buttonStyle}>
						<i class="fa fa-toggle-on" aria-hidden="true"></i>
					</button>
				</div>
			);
		} else {
			return (
				<div className='content' id='clock' style={clockStyle}>
					<h1 style={h1Style}>{date}</h1>
					<button onClick={this.toggleSeconds} style={buttonStyle}>
						<i class="fa fa-toggle-off" aria-hidden="true"></i>
					</button>
				</div>
			);
		}
	}

}
