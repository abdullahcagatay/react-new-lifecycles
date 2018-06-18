import React, { Component } from "react";
import { Label, Input } from 'reactstrap';

class SimpleFormComponent extends Component {
	/*REACT LIFECYCLE FUNCTIONS*/
	constructor(props) {
		super(props);
		console.log("[constructor] called");
		this.state = {			
		};
	}

	
	componentDidMount() {
		console.log("[componentDidMount] called");
	}

	componentDidUpdate(prevProps) {
		console.log("[componentDidUpdate] called");
		// Typical usage (don't forget to compare props):
		/*if (this.props.userID !== prevProps.userID) {
		  this.fetchData(this.props.userID);
		}*/
	}

	componentWillUnmount() {
		console.log("[componentWillUnmount] called");
	}

	shouldComponentUpdate(nextProps, nextState) {
		/*This method only exists as a performance optimization. 
		Do not rely on it to “prevent” a rendering, as this can lead to bugs. 
		Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. 
		PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.*/
		console.log("[shouldComponentUpdate] called");
		let result=false;
		if(nextProps!==this.props) {
			result = true;
		}
		return result;
	}

	static getDerivedStateFromProps(nextProps, prevState) {

		console.log("[getDerivedStateFromProps] called");

		// Store prevUserId in state so we can compare when props change.
		// Clear out any previously-loaded user data (so we don't render stale stuff).
		
		/*if (nextProps.userId !== prevState.prevUserId) {
		  return {
			prevUserId: nextProps.userId,
			profileOrError: null,
		  };
		}*/
	
		// No state update necessary
		return null;
	  }

	  getSnapshotBeforeUpdate(prevProps, prevState) {

		console.log("[getSnapshotBeforeUpdate] called");

		// Are we adding new items to the list?
		// Capture the scroll position so we can adjust scroll later.
		
		/*if (prevProps.list.length < this.props.list.length) {
		  const list = this.listRef.current;
		  return list.scrollHeight - list.scrollTop;
		}*/

		return null;
	  }

	  componentDidCatch(error, info) {

		console.log("[componentDidCatch] called");

		// Display fallback UI
		// this.setState({ hasError: true });
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, info);
	  }

	render() {
		console.log("[render()] called");
		const {name, lastName} = this.props;
		return (
			<div>				
				<div className="row">	
					<div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 col-l-6">
						<Label for="exampleName">Name</Label>
						<Input 
							type="text" 
							name="name" 
							id="exampleName" 
							placeholder="with a placeholder"
							value={name}
							onChange={(e)=> this.props.handleChange(e.target.value, "name")} />
					</div>
				</div>  
				<div className="row">
					<div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 col-l-6">
						<Label for="exampleLastName">Last Name</Label>
						<Input 
							type="text" 
							name="lastName" 
							id="exampleLastName" 
							placeholder="with a placeholder"
							value = {lastName} 
							onChange={(e)=> this.props.handleChange(e.target.value, "lastName")} />
					</div>
				</div>				
			</div>
		);
	}
}
export default SimpleFormComponent;
