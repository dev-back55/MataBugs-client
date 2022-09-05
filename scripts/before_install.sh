#!/bin/bash

#download node and npm
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
#. ~/.nvm/nvm.sh
#nvm install node

#create our working directory if it doesnt exist
#DIR="/home/ec2-user/app"
#if [ -d "$DIR" ]; then
#  echo "${DIR} exists"
#else
#  echo "Creating ${DIR} directory"
#  mkdir ${DIR}
#fi

echo 'run after_install.sh: ' >> /home/ec2-user/app/MataBugs-client/deploy.log

#echo 'Restart Nginx' >> /home/ec2-user/app/MataBugs-client/deploy.log
#sudo systemctl stop nginx >> /home/ec2-user/app/MataBugs-API/deploy.log

#give permission for everything in the express-app directory
echo 'Permisos Carpetas y Archivos *** ' >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo chmod -R 777 /home/ec2-user/app/MataBugs-client >> /home/ec2-user/app/MataBugs-client/deploy.log

echo 'cd /home/ec2-user/app/MataBugs-API' >> /home/ec2-user/app/MataBugs-client/deploy.log
cd /home/ec2-user/app/MataBugs-client >> /home/ec2-user/app/MataBugs-client/deploy.log

echo 'npm install' >> /home/ec2-user/app/MataBugs-client/deploy.log 
npm install >> /home/ec2-user/app/MataBugs-client/deploy.log

#echo 'copy example to env' >> /home/ec2-user/app/MataBugs-API/deploy.log
#sudo cp .env.example .env >> /home/ec2-user/app/MataBugs-API/deploy.log

echo 'npm run build' >> /home/ec2-user/app/MataBugs-client/deploy.log
sudo rm -r build >> /home/ec2-user/app/MataBugs-client/deploy.log
echo 'Ejecutando' >> /home/ec2-user/app/MataBugs-client/deploy.log
npm run build >> /home/ec2-user/app/MataBugs-client/deploy.log

#echo 'Permisos Carpeta Build *** ' >> /home/ec2-user/app/MataBugs-client/deploy.log
#sudo chmod -R -f 777 /home/ec2-user/app/MataBugs-client/build >> /home/ec2-user/app/MataBugs-client/deploy.log

#sudo cp -r /home/ec2-user/app/MataBugs-client/build/* /usr/share/nginx/html/


