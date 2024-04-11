import React, {Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){ // props is the child element within this container
		super(props);
		// this is a container so it will have smart component such as state
		this.state ={ 
			hasError: false, // default value is false - no error
		}
	}

	componentDidCatch(error, info){ //React will call it when some child component (including distant children) throws an error during rendering.
		this.setState({hasError: true}); // if error happen set hasError to true
	}

	render(){
		// If error happen we have to handdle it
		if (this.state.hasError){ // if hasError == true
			return <h1 style={{color: 'white'}}> Oooops... Sorry! Something went wrong.</h1> 
		}
		return this.props.children; // if no error => render the child element
	}
}

export default ErrorBoundary;

