import React from 'react';

const divStyle = {
	maxWidth: '700px',
	margin: 'auto',
	position: 'relative',
	overflow: 'auto'
};

const h2Style = {
	fontSize: '55px',
	fontWeight: '400',
	margin: 'auto',
	textAlign: 'center',
};

const formStyle = {
	margin: 'auto',
	width: '80%',
	borderBottom: '2px solid rgba(255,255,255,0.9)',
};

const inputTextStyle = {
	width: '100%',
	border: 'none',
	fontSize: '55px',
	fontWeight: 'bold',
	color: 'rgba(255,255,255,0.9)',
	padding: '0',
	textAlign: 'center',
};

const submitStyle = {
	fontSize: '14px',
	border: '2px solid',
	borderRadius: '100px',
	padding: '5px 20px',
	margin: '-10px 0',
};


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
				<div style={divStyle}>
					<h2 style={h2Style}>What's your name?
						<form onSubmit={this.toggleNameSubmit} style={formStyle}>
							<input
								type="text"
								// placeholder="Your name..."
								value={this.props.name.value}
								onChange={this.handleNameInputChange}
								style={inputTextStyle}
								autoFocus
							/>
						</form>
					</h2>
				</div>
			);
		} else if (!this.props.name.show && this.props.name.value) {
			return (
				<div style={divStyle}>
					<h2 style={h2Style}>
						What's your name?
						<form
							onSubmit={this.toggleNameSubmit}
							style={formStyle}>
							<input
								type="text"
								placeholder="Your name..."
								value={this.props.name.value}
								onChange={this.handleNameInputChange}
								style={inputTextStyle}
							/>
							<input
								type="submit"
								value="⮐ to Submit"
								style={{
									display: 'inline',
									float: 'right',
									margin: 'auto',
									fontSize: '14px'
								}}
							/>
						</form>
					</h2>
				</div>
			);
		} else {
			return (
				<div style={divStyle}>
					<h2 style={h2Style}>
						{this.props.welcomeMessage}, {this.props.name.value}.
						<form onSubmit={this.toggleNameSubmit}>
							<input
								type="submit"
								value="Reset name"
								style={submitStyle}
							/>
						</form>
					</h2>
				</div>
			);
		}
	}
}
