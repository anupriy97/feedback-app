import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			q1: 0,
			q2: 0,
			q3: 0,
			q4: 0,
			q5s: [],
		}
	}

	componentDidMount() {
		this.callApi();
	}

	callApi = async () => {
		const response = await fetch('/api/getFeedback/');
		const body = await response.json();

		this.setState({
			q1: body.q1,
			q2: body.q2,
			q3: body.q3,
			q4: body.q4,
			q5s: body.q5s,
		})
	};

	render() {
		return (
			<div className="summaryContainer">
				<button onClick={this.callApi}>Refresh</button>
				<div>{this.state.q1}</div>
				<div>{this.state.q2}</div>
				<div>{this.state.q3}</div>
				<div>{this.state.q4}</div>
				<ul>
					{this.state.q5s.map(({id, q5}) =>
						<li key={id}>{q5}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Summary;