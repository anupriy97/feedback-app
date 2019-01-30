import React, { Component } from 'react';
import './Summary.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Summary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			q1: 0,
			q2: 0,
			q3: 0,
			q4: 0,
			q5s: [],
			open: false,
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
		let bName = this.state.open ? "Hide Comments" : "Show Comments";
		return (
			<Container style={{ height: '100vh' }}>
				<Row style={{ backgroundColor: 'orange' }}>
					<div className="title"><b>Summary</b></div>
				</Row>
				<Col><button onClick={this.callApi} className="success">Refresh</button></Col>
        <Row>
					<table>
						<tbody><tr>
							<th>Question</th>
							<th>Average Feedback</th>
						</tr>
						<tr>
							<td>Are you satisfied overall with our products? 1 means extremely dissatisfied, 5 means extremely satisfied.</td>
							<td>{this.state.q1}</td>
						</tr>
						<tr>
							<td>Do you find our products easy to use? 1 means they are not usable at all, 5 means they are extremely easy to use.</td>
							<td>{this.state.q2}</td>
						</tr>
						<tr>
							<td>How much impact our products have made on your daily routine? 1 means no impact at all, 5 means a huge impact.</td>
							<td>{this.state.q3}</td>
						</tr>
						<tr>
							<td>Would you recommend our products to your friends and family? 1 means strongly advice against our products, 5 means strongly recommend our products.</td>
							<td>{this.state.q4}</td>
						</tr></tbody>
					</table> 
				</Row>
				<Row className="justify-content-md-center"><Col sm={true} xl={true} xs={true}><button onClick={e => this.setState({ open: !this.state.open })} className="danger">{bName}</button></Col></Row>
				{this.state.open && <ol>
									{this.state.q5s.map(({id, q5}) =>
										<li key={id}>{q5}</li>
									)}
								</ol>}
			</Container>
		);
	}
}

export default Summary;