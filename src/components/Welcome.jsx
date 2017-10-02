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

export class Hello extends React.Component {

	constructor(props) {
		super(props);
		this.handleNameInputChange = this.handleNameInputChange.bind(this);
		this.toggleNameSubmit = this.toggleNameSubmit.bind(this);
	}

	handleNameInputChange(e) {
		const name = e.target.value;
		const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
		this.props.onNameInputChange(capitalizedName);
	}

	toggleNameSubmit(e) {
		if (this.props.name.value) {
			const bool = this.props.name.show ? false : true;
			this.props.onNameSubmit(bool);
			e.preventDefault();
		} else {
			e.preventDefault();
		}
	}

	render() {
		if (!this.props.name.show && !this.props.name.value) {
			return (
				<h2>{this.props.welcomeMessage},
					<form onSubmit={this.toggleNameSubmit}>
						<input
							type="text"
							placeholder="Your name..."
							value={this.props.name.value}
							onChange={this.handleNameInputChange}
						/>
					</form>
				</h2>
			);
		} else if (!this.props.name.show && this.props.name.value) {
			return (
				<h2>{this.props.welcomeMessage},
					<form onSubmit={this.toggleNameSubmit}>
						<input
							type="text"
							placeholder="Your name..."
							value={this.props.name.value}
							onChange={this.handleNameInputChange}
						/>
						<input
							type="submit"
							value="⮐"
						/>
					</form>
				</h2>
			);
		} else {
			return (
				<div>
					<h2>
						{this.props.welcomeMessage}, {this.props.name.value}.
						<form onSubmit={this.toggleNameSubmit}>
							<input
								type="submit"
								value="Reset name"
							/>
						</form>
					</h2>
				</div>
			);
		}
	}
}
