import React from 'react';

class ClockLabel extends React.Component{
	componentWillMount(){

	}

	componentWillReceiveProps(nextProps){
		console.log('props changed', this.props.color, nextProps);
	}

	render(){
		return(
			<span style={{ color: this.props.color }}>Colour </span>
		);
	}
}

export default ClockLabel