# for the database VM
sudo apt update
sudo apt install mysql-server
sudo ufw allow mysql
sudo systemctl start mysql
sudo systemctl enable mysql
sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/mysql.conf.d/mysqld.cnf
sudo systemctl restart mysql.service

sudo mysql -u root feedback < dbInit.sql

# sudo mysql -u root -e "CREATE DATABASE feedback;"
# sudo mysql -u root -e "USE feedback; CREATE TABLE IF NOT EXISTS feedbacks(id INT PRIMARY KEY AUTO_INCREMENT, q1 INT NOT NULL, q2 INT NOT NULL, q3 INT NOT NULL, q4 INT NOT NULL, q5 VARCHAR(500));"
# sudo mysql -u root -e "CREATE USER 'webApp'@'%' IDENTIFIED BY 'webApp';"
# sudo mysql -u root -e "CREATE USER 'webApp'@'localhost' IDENTIFIED BY 'webApp';"
# sudo mysql -u root -e "GRANT ALL ON feedback.* to 'webApp'@'%';"
# sudo mysql -u root -e "GRANT ALL ON feedback.* to 'webApp'@'localhost';"
# sudo mysql -u root -e "FLUSH PRIVILEGES;"