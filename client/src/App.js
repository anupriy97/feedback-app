import React, { Component } from 'react';
import './App.css';
import FeedbackForm from './FeedbackForm';
import Summary from './Summary';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	state = {
	};

	componentDidMount() {
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/summary"
						render={(props) => {
							return (<Summary />);
						}}
					/>
					<Route
						exact
						path="/"
						render={(props) => {
							return (<FeedbackForm />);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
