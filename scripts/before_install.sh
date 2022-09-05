#!/bin/bash

#download node and npm
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
#. ~/.nvm/nvm.sh
#nvm install node

#create our working directory if it doesnt exist
DIR="/home/ec2-user/app/MataBugs-client"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi

echo 'run after_install.sh: ' >> /home/ec2-user/app/MataBugs-client/deploy.log

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/app/ >> /home/ec2-user/app/MataBugs-client/deploy.log

echo 'cd /home/ec2-user/app/MataBugs-client' >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo cd /home/ec2-user/app/MataBugs-client >> /home/ec2-user/app/MataBugs-client/deploy.log

echo 'npm install' >> /home/ec2-user/app/MataBugs-client/deploy.log 
sudo npm install >> /home/ec2-user/app/MataBugs-client/deploy.log
echo 'Run build' >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo npm run build >> /home/ec2-user/app/MataBugs-client/deploy.log

echo 'Copy build to nginx/html' >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo cp -R /home/ec2-user/app/MataBugs-client/build/* /usr/share/nginx/html/ >> /home/ec2-user/app/MataBugs-client/deploy.log

