#!/bin/bash

#add npm and node to path
#export NVM_DIR="$HOME/.nvm"	
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
#npm install

#start our node app in the background
#node app.js > app.out.log 2> app.err.log < /dev/null & 
echo 'cd /home/ec2-user/app/MataBugs-client' >> /home/ec2-user/app/MataBugs-client/deploy.log
cd /home/ec2-user/app/MataBugs-client >> /home/ec2-user/app/MataBugs-client/deploy.log

echo 'npm install' >> /home/ec2-user/app/MataBugs-client/deploy.log 
sudo npm install >> /home/ec2-user/app/MataBugs-client/deploy.log
echo 'Run build' >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo npm run build >> /home/ec2-user/app/MataBugs-client/deploy.log

echo 'Copy build to nginx/html' >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo cp -R /home/ec2-user/app/MataBugs-client/build/* /usr/share/nginx/html/ >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo service nginx restart >> /home/ec2-user/app/MataBugs-API/deploy.log