import React from 'react';

export class Todo extends React.Component {

	constructor(props) {
		super(props);
		this.handleMainFocusInputChange = this.handleMainFocusInputChange.bind(this);
		this.toggleMainFocusSubmit = this.toggleMainFocusSubmit.bind(this);
		this.toggleMainFocusCheck = this.toggleMainFocusCheck.bind(this);
	}

	handleMainFocusInputChange(e) {
		const mainFocus = e.target.value;
		this.props.onMainFocusInputChange(mainFocus);
	}

	toggleMainFocusSubmit(e) {
		if (this.props.mainFocus.value) {
			const bool = this.props.mainFocus.show ? false : true;
			this.props.onMainFocusSubmit(bool);
			e.preventDefault();
		} else {
			e.preventDefault();
		}
	}

	toggleMainFocusCheck() {
		const bool = this.props.mainFocus.checked ? false : true;
		this.props.onMainFocusCheck(bool);
	}

	render() {
		if (this.props.name.show && !this.props.mainFocus.value && !this.props.mainFocus.show && !this.props.mainFocus.checked) {
			return (
				<div>
					<h3>What's your main focus today?</h3>
					<form onSubmit={this.toggleMainFocusSubmit}>
						<input
							type="text"
							value={this.props.mainFocus.value}
							onChange={this.handleMainFocusInputChange}
							autoFocus
						/>
					</form>
				</div>
			);
		} else if (this.props.name.show && this.props.mainFocus.value && !this.props.mainFocus.show && !this.props.mainFocus.checked) {
			return (
				<div>
					<h3>What's your main focus today?</h3>
					<form onSubmit={this.toggleMainFocusSubmit}>
						<input
							type="text"
							value={this.props.mainFocus.value}
							onChange={this.handleMainFocusInputChange}
						/>
						<input
							type="submit"
							value="⮐ to Submit"
						/>
					</form>
				</div>
			);
		} else if (this.props.name.show && this.props.mainFocus.value && this.props.mainFocus.show && !this.props.mainFocus.checked) {
			return (
				<div>
					<h4>TODAY</h4>
					<input
						type="checkbox"
						onClick={this.toggleMainFocusCheck}
					/>
					<h5>{this.props.mainFocus.value}</h5>
				</div>
			);
		} else if (this.props.name.show && this.props.mainFocus.value && this.props.mainFocus.show && this.props.mainFocus.checked) {
			return (
				<div>
					<h4>TODAY</h4>
					<input
						type="checkbox"
						onClick={this.toggleMainFocusCheck}
					/>
					<h5 style={{textDecoration: 'line-through'}}>{this.props.mainFocus.value}</h5>
				</div>
			);
		}	else {
			return null;
		}
	}

}
