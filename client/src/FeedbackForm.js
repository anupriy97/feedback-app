import React, { Component } from 'react';
import './FeedbackForm.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

		this.reset();
	}

	render() {
		return (
			<Container style={{ height: '100vh' }}>
				<Row style={{ backgroundColor: 'orange' }}>
					<div className="title"><b>Please give your feedback...</b></div>
				</Row>
				<Row>
					<Col><form>
						<div className="ques">
							Are you satisfied overall with our products? 1 means extremely dissatisfied, 5 means extremely satisfied.
						</div>
						1<input
							name="q1"
							type="range"
							min="1"
							max="5"
							value={this.state.q1}
							onChange={this.handleInputChange} />
						5<br />
						<div className="ques">
							Do you find our products easy to use? 1 means they are not usable at all, 5 means they are extremely easy to use.
						</div>
						1<input
							name="q2"
							type="range"
							min="1"
							max="5"
							value={this.state.q2}
							onChange={this.handleInputChange} />
						5<br />
						<div className="ques">
							How much impact our products have made on your daily routine? 1 means no impact at all, 5 means a huge impact.
						</div>
						1<input
							name="q3"
							type="range"
							min="1"
							max="5"
							value={this.state.q3}
							onChange={this.handleInputChange} />
						5<br />
						<div className="ques">
							Would you recommend our products to your friends and family? 1 means strongly advice against our products, 5 means strongly recommend our products.
						</div>
						1<input
							name="q4"
							type="range"
							min="1"
							max="5"
							value={this.state.q4}
							onChange={this.handleInputChange} />
						5<br />
						<div className="ques">
							Any other feedback...
						</div>
						<textarea
							name="q5"
							maxLength="500"
							value={this.state.q5}
							onChange={this.handleInputChange} />
						<div>
							<button className="success" onClick={this.giveFeedback}>Submit</button>
							<button className="danger"  onClick={this.reset}>Reset</button>
						</div>
					</form></Col>
				</Row>
				{/*<Row>
					<div>{this.state.q1}</div>
					<div>{this.state.q2}</div>
					<div>{this.state.q3}</div>
					<div>{this.state.q4}</div>
					<pre>{this.state.q5}</pre>
				</Row>*/}
			</Container>
		);
	}
}

export default FeedbackForm;