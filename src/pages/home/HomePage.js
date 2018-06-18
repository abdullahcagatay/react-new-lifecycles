import React, { Component } from "react";
import { Button, Alert } from 'reactstrap';
import SimpleFormComponent from "../../components/SimpleFormComponent";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as homeActions from "../../reducers/home";
import { connect } from "react-redux";

class HomePage extends Component {
	/*REACT LIFECYCLE FUNCTIONS*/
	constructor(props) {
		super(props);
		this.state = {	
			lastName:"",
			name:""
		};
	}
	
	redirect=()=>{
		this.props.history.push('/another');
	}
	handleChange = (value, name) => {
		let newState = {...this.state};
		newState[name]=value;
		this.setState({...newState});
	}

	render() {
		const {name, lastName} = this.state;
		return (
			<div>
				<h1>React-Redux-Boilerplate-Home-Page</h1>
				<div>
					<SimpleFormComponent
						handleChange={this.handleChange}
						name={name}
						lastName= {lastName}
					/>	
				</div>
				<Button 
					color="info"
					onClick={
						()=> this.props.homeActionCreators.exampleActionCreator({name:this.state.name,lastName:this.state.lastName})
					}
					style={{marginTop:"30px"}}>					
					Update Redux Store
				</Button>
				<Button 
					color="danger"
					onClick={()=>this.props.homeActionCreators.resetReduxData()}
					style={{marginTop:"30px"}}>					
					Reset Redux Store
				</Button>
				<Button 
					color="danger"
					onClick={()=>this.redirect()}
					style={{marginTop:"30px",float:"right"}}>					
					Redirect Other Page
				</Button>				
				<Alert color="success" style={{marginTop:"30px"}}>
					<h4>---These data coming from Redux Store---</h4>					
					<p >Redux Button Clicked Status:{this.props.buttonClicked.toString()}</p> 
					<p>Entered Data : {JSON.stringify(this.props.enteredData)}</p> 
      			</Alert>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		homeActionCreators: bindActionCreators(homeActions, dispatch),
	}
};
const mapStateToProps = (state) => {
	return {		
		enteredData: state.home.enteredData,
		buttonClicked: state.home.buttonClicked
	}
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
