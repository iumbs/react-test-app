import React from 'react';

export const Clock = (props) => {
  let fullDateToString = props.date.toLocaleTimeString();
  let dateToString = fullDateToString.substr(0,5);
  return <h1>{fullDateToString}</h1>
};

export class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  handleNameInputChange(e) {
		this.props.onNameInputChange(e.target.value)
	}

	handleNameSubmit(e) {
    this.props.onNameSubmit(true)
	}

  render() {
    if (!this.props.showName) {
      return (
        <h2>Hello,
          <form onSubmit={this.handleNameSubmit}>
            <input type="text" value={this.props.name} onChange={this.handleNameInputChange} />
            <input type="submit" value="⮐" />
          </form>
        </h2>
      );
    } else {
      return (
        <h2>Hello, {this.props.name}</h2>
      );
    }
  }

}
