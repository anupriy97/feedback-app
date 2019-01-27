# for the database VM
sudo apt update
sudo apt install mysql-server
sudo ufw allow mysql
systemctl start mysql
systemctl enable mysql
