import React, { Component } from "react";
import { Button } from 'reactstrap';

class AnotherPage extends Component {

	redirectHome=()=>{
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
                <h1>React-Redux-Boilerplate-Another-Page</h1>
				<Button 
					color="danger"
					onClick={()=>this.redirectHome()}>					
					Redirect Home Page
				</Button>						
			</div>
		);
	}
}
export default AnotherPage;
