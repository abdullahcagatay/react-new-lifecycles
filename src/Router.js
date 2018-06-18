import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AnotherPage from "./pages/another/AnotherPage";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/another" component={AnotherPage} />
			</Switch>
		);
	}
}
export default App;