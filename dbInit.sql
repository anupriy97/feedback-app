CREATE DATABASE feedback;
USE feedback;
CREATE TABLE IF NOT EXISTS feedbacks(id INT PRIMARY KEY AUTO_INCREMENT, q1 INT NOT NULL, q2 INT NOT NULL, q3 INT NOT NULL, q4 INT NOT NULL, q5 VARCHAR(500));
CREATE USER 'webApp'@'%' IDENTIFIED BY 'webApp';
CREATE USER 'webApp'@'localhost' IDENTIFIED BY 'webApp';
GRANT ALL ON feedback.* to 'webApp'@'%';
GRANT ALL ON feedback.* to 'webApp'@'localhost';
FLUSH PRIVILEGES;