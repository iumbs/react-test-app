import React from 'react';
import {Clock} from './Clock.jsx';
import {Welcome} from './Welcome.jsx';
import {Todo} from './Todo.jsx';

const bgNum = 9;
const bgPath = '../../assets/bg_' + Math.floor(Math.random() * bgNum + 1) + '.jpg';
const bgStyle = {
	backgroundImage: 'url(' + bgPath + ')',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '0% 50%'
};

export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			seconds: false,
			welcomeMessage: '',
			name: {
				value: '',
				show: false
			},
			mainFocus: {
				value: '',
				show: false,
				checked: false
			}
		};
		this.handleSecondsToggler = this.handleSecondsToggler.bind(this);
		this.handleNameInputChange = this.handleNameInputChange.bind(this);
		this.handleNameSubmit = this.handleNameSubmit.bind(this);
		this.handleMainFocusInputChange = this.handleMainFocusInputChange.bind(this);
		this.handleMainFocusSubmit = this.handleMainFocusSubmit.bind(this);
		this.handleMainFocusCheck = this.handleMainFocusCheck.bind(this);
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
		this.setState({date: new Date()});
	}

	handleSecondsToggler(newSeconds) {
		this.setState({seconds: newSeconds});
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
		this.setState({welcomeMessage: `Good ${dayTime}`});
	}

	handleNameInputChange(newValue) {
		const nameObj = this.state.name;
		nameObj.value = newValue;
		this.setState({name: nameObj});
	}

	handleNameSubmit(newShow) {
		const nameObj = this.state.name;
		nameObj.show = newShow;
		nameObj.value = newShow ? nameObj.value : '';
		this.setState({name: nameObj});
	}

	handleMainFocusInputChange(newValue) {
		const mainFocusObj = this.state.mainFocus;
		mainFocusObj.value = newValue;
		this.setState({mainFocus: mainFocusObj});
	}

	handleMainFocusSubmit(newShow) {
		const mainFocusObj = this.state.mainFocus;
		mainFocusObj.show = newShow;
		mainFocusObj.value = newShow ? mainFocusObj.value : '';
		this.setState({mainFocus: mainFocusObj});
	}

	handleMainFocusCheck(newChecked) {
		const mainFocusObj = this.state.mainFocus;
		mainFocusObj.checked = newChecked;
		this.setState({mainFocus: mainFocusObj});
	}

	render() {
		return (
			<div className="container" id="bg" style={bgStyle}>
				<div className="container" id="overlay" style={{backgroundColor: 'rgba(0,0,0,0.25)'}}>
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
					<Todo
						name={this.state.name}
						mainFocus={this.state.mainFocus}
						onMainFocusInputChange={this.handleMainFocusInputChange}
						onMainFocusSubmit={this.handleMainFocusSubmit}
						onMainFocusCheck={this.handleMainFocusCheck}
					/>
				</div>
			</div>
		);
	}

}
