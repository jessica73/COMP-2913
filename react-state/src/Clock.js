import React from 'react';
import ClockLabel from './ClockLabel';

class Clock extends React.Component {
	//if no state (i.e., just super(props)), then no need for constructor - implicit
	constructor(props){
		super(props); //delegates constructor logic to parent constructor (i.e., Component) otherwise would override

		this.state = {
			currentDate: new Date(),
			color: 'red',
			backgroundColor: 'transparent'
		};

		//for any methods not part of lifecycle methods,
		//add here to bind to this (or else this undefined)
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	//pre-render - don't have access to any of the elements
	componentWillMount(){
		console.log('componentWillMount');

		//this would result in undefined because setState waits until free (so log then set)
		//even tho async Javascript is single threaded
		//this.setState({ test: true });
		//console.log('test state', this.state.test);
	}

	//have access to the elements in render
	componentDidMount(){
		console.log('componentDidMount');

		setInterval(() => {
			//always use setState instead of directly setting state
			//this.state.color = 'blue'; <- this does change the state but React doesn't know to refresh
			this.setState({ 
				currentDate: new Date(),
				color: this.state.color === 'red' ? 'blue' : 'red'
			});
		}, 5000);
	}

	handleClick(){
		this.setState({ backgroundColor: 'yellow' });
	}

	handleMouseLeave(){
		this.setState({ backgroundColor: 'transparent' });
	}
		
	render(){
		//don't setState inside render - loops because setState triggers render which includes setState...
		//this.setState({ color: 'yellow' }) <- BAD!
		return(
			<div style={{ color: this.state.color, backgroundColor: this.state.backgroundColor }} onMouseEnter={this.handleClick} onMouseLeave={this.handleMouseLeave}>
				<ClockLabel color={this.state.color} />
				{this.state.currentDate.toString()}				
			</div>
		);
	}
}

export default Clock