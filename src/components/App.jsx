import React from 'react';
import {Title} from './Title.jsx'

export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			date: '09:00',
			name: 'Umberto'
		};
	}

	render() {
		return (
			<div>
				<Title date={this.state.date} name={this.state.name} />
			</div>
		);
	}

}
