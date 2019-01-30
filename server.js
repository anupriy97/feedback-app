const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const con = mysql.createConnection({
	host: '192.168.0.112',
	user: 'anupriy',
	password: 'anupriy',
	database: "feedback",
});

con.connect();

app.get('/api/getFeedback', (req, res) => {
	let getFeedback1 = "SELECT AVG(q1), AVG(q2), AVG(q3), AVG(q4) FROM feedbacks;";
	let getFeedback2 = 'SELECT id, q5 FROM feedbacks WHERE q5!="";';

	con.query(getFeedback1, (err1, result1) => {
		if (err1) {
			console.log(err1);
		} else {
			con.query(getFeedback2, (err2, result2) => {
				if (err2) {
					console.log(err2);
				} else {
					res.send({
						q1: result1[0]['AVG(q1)'],
						q2: result1[0]['AVG(q2)'],
						q3: result1[0]['AVG(q3)'],
						q4: result1[0]['AVG(q4)'],
						q5s: result2,
					});
				}
			});
		}
	});
});

app.post('/api/giveFeedback', (req, res) => {
	// console.log(req.body);

	// let createTable = "CREATE TABLE IF NOT EXISTS feedbacks(id INT PRIMARY KEY AUTO_INCREMENT, q1 INT NOT NULL, q2 INT NOT NULL, q3 INT NOT NULL, q4 INT NOT NULL, q5 VARCHAR(500));";

	// con.query(createTable, (err, result) => {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	let insertFeedback = "INSERT INTO feedbacks (q1, q2, q3, q4, q5) VALUES (" + req.body.q1 + ", " + req.body.q2 + ", " + req.body.q3 + ", " + req.body.q4 + ", '" + req.body.q5 + "');";
	con.query(insertFeedback, (err, result) => {
		if (err) {
			console.log(err);
			res.send({ message: "Feedback not received !" });
		} else {
			console.log("Feedback successfully added !");
			res.send({ message: "Received successfully !" });
		}
	});
	// 	}
	// });
});

app.listen(port, () => console.log(`Listening on port ${port}`));