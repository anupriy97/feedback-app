import React, { Component } from 'react';
import './App.css';
import FeedbackForm from './FeedbackForm';
import Summary from './Summary';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	state = {
	};

	componentDidMount() {
		// this.callApi()
		// 	.then(res => this.setState({ response: res.express }))
		// 	.catch(err => console.log(err));
	}

	// callApi = async () => {
	// 	const response = await fetch('/api/hello');
	// 	const body = await response.json();

	// 	if (response.status !== 200) throw Error(body.message);

	// 	return body;
	// };

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
