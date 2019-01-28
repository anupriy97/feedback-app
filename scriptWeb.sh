sudo apt update

# sudo apt install git
# git clone https://github.com/anupriy97/feedback-app.git

sudo apt install nodejs
sudo apt install npm

sudo apt install curl
# installing yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install --no-install-recommends yarn

unzip feedback-app.zip
cd feedback-app
sudo npm i nodemon -g
yarn

cd client
npm i
cd ..

ip=$(ip addr show | grep -oE "[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+" | tail -n2 | head -n1)
echo "This is the detected IP address of the internal network adapter : ${ip}"
echo "Do you want to change it [y/n]:"
read resp
if [ $resp = "y" ]
then
	echo "Enter IP address (Internal network):"
	read ip
	echo "Connecting database server via this new ip"
else
	echo "Connecting database server via the detected ip"
fi

sed -i "s/0.0.0.0/${ip}/g" server.js

yarn dev