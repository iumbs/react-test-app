import React from 'react';

export class Welcome extends React.Component {

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
