import React, { Component } from 'react';
import './FeedbackForm.css';

class FeedbackForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			q1: 3,
			q2: 3,
			q3: 3,
			q4: 3,
			q5: "",
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	reset = () => {
		this.setState({
			q1: 3,
			q2: 3,
			q3: 3,
			q4: 3,
			q5: "",
		})
	}

	giveFeedback = async e => {
		e.preventDefault();

		const response = await fetch('api/giveFeedback/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				q1: this.state.q1,
				q2: this.state.q2,
				q3: this.state.q3, 
				q4: this.state.q4, 
				q5: this.state.q5,  
			}),
		});

		const resp = await response.json();
		console.log(resp.message);
	}

	render() {
		return (
			<div className="formContainer">
				<div className="row">
					<form>
						<div>
							Are you satisfied overall with our products? 1 means extremely dissatisfied, 5 means extremely satisfied.
						</div>
						<input
							name="q1"
							type="range"
							min="1"
							max="5"
							value={this.state.q1}
							onChange={this.handleInputChange} />
						<br />
						<div>
							Do you find our products easy to use? 1 means they are not usable at all, 5 means they are extremely easy to use.
						</div>
						<input
							name="q2"
							type="range"
							min="1"
							max="5"
							value={this.state.q2}
							onChange={this.handleInputChange} />
						<br />
						<div>
							How much impact our products have made on your daily routine? 1 means no impact at all, 5 means a huge impact.
						</div>
						<input
							name="q3"
							type="range"
							min="1"
							max="5"
							value={this.state.q3}
							onChange={this.handleInputChange} />
						<br />
						<div>
							Would you recommend our products to your friends and family? 1 means strongly advice against our products, 5 means strongly recommend our products.
						</div>
						<input
							name="q4"
							type="range"
							min="1"
							max="5"
							value={this.state.q4}
							onChange={this.handleInputChange} />
						<br />
						<div>
							Any other feedback...
						</div>
						<textarea
							name="q5"
							rows="10"
							cols="50"
							value={this.state.q5}
							onChange={this.handleInputChange} />
						<div className="buttons">
							<button type="submit" className="button" onClick={this.giveFeedback}>Submit</button>
							<button type="submit" className="button" onClick={this.reset}>Reset</button>
						</div>
					</form>
				</div>
				<div className="row">
					<div>{this.state.q1}</div>
					<div>{this.state.q2}</div>
					<div>{this.state.q3}</div>
					<div>{this.state.q4}</div>
					<pre>{this.state.q5}</pre>
				</div>
			</div>
		);
	}
}

export default FeedbackForm;