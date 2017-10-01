import React from 'react';
import {Clock, Hello} from './Welcome.jsx';
import {TodoPrompt} from './Todo.jsx';

export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			name: '',
			showName: false
		};
		this.handleNameInputChange = this.handleNameInputChange.bind(this);
		this.handleNameSubmit = this.handleNameSubmit.bind(this);
	}

	componentDidMount(){
		setInterval(
			() => {this.clockTicker()},
			1000
		);
	}

	componentWillUnmount(){
		clearInterval();
	}

	clockTicker(){
		this.setState({
			date: new Date()
		});
	}

	handleNameInputChange(name) {
		this.setState({
			name: name
		});
	}

	handleNameSubmit(showName) {
		this.setState({
			showName: showName
		});
	}

	render() {
		return (
			<div>
				<Clock date={this.state.date} />
				<Hello
					name={this.state.name}
					showName={this.state.showName}
					onNameInputChange={this.handleNameInputChange}
					onNameSubmit={this.handleNameSubmit}
				/>
				<TodoPrompt />
			</div>
		);
	}

}
