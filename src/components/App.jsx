import React from 'react';
import {Clock} from './Clock.jsx';
import {Welcome} from './Welcome.jsx';
import {TodoPrompt} from './Todo.jsx';

const bgNum = 9;
const bgPath = '../../assets/bg_' + Math.floor(Math.random() * bgNum + 1) + '.jpg';
const bgImage = {	backgroundImage: 'url(' + bgPath + ')' };

export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			seconds: true,
			welcomeMessage: '',
			name: {
				value: '',
				show: false
			}
		};
		this.handleNameInputChange = this.handleNameInputChange.bind(this);
		this.handleNameSubmit = this.handleNameSubmit.bind(this);
		this.handleSecondsToggler = this.handleSecondsToggler.bind(this);
	}

	componentWillMount(){
		this.handleWelcomeMessage();
	}

	componentDidMount(){
		setInterval(
			() => {
				this.clockTicker();
				this.handleWelcomeMessage();
			},
			1000
		);
	}

	componentWillUnmount() {
		clearInterval();
	}

	clockTicker() {
		this.setState({
			date: new Date()
		});
	}

	handleSecondsToggler(newSeconds) {
		this.setState({
			seconds: newSeconds
		});
	}

	handleWelcomeMessage(){
		const hour = this.state.date.getHours();
		let dayTime;
		switch (true) {
		case (hour >= 6 && hour < 12):
			dayTime = 'morning';
			break;
		case (hour >= 12 && hour < 18):
			dayTime = 'afternoon';
			break;
		case (hour >= 18 && hour < 23):
			dayTime = 'evening';
			break;
		default: dayTime = 'night';
		}
		this.setState({
			welcomeMessage: `Good ${dayTime}`
		});
	}

	handleNameInputChange(newValue) {
		const nameObj = this.state.name;
		nameObj.value = newValue;
		this.setState({
			name: nameObj
		});
	}

	handleNameSubmit(newShow) {
		const nameObj = this.state.name;
		nameObj.show = newShow;
		nameObj.value = newShow ? nameObj.value : '';
		this.setState({
			name: nameObj
		});
	}

	render() {
		return (
			<div className="container" id="bg" style={bgImage}>
				<div className="container" id="overlay">
					<Clock
						date={this.state.date}
						seconds={this.state.seconds}
						onSecondsToggler={this.handleSecondsToggler}
					/>
					<Welcome
						welcomeMessage={this.state.welcomeMessage}
						name={this.state.name}
						onNameInputChange={this.handleNameInputChange}
						onNameSubmit={this.handleNameSubmit}
					/>
					<TodoPrompt />
				</div>
			</div>
		);
	}

}
