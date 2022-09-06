<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Bugs Hunters
## Introduction

Bugs Hunters is an App where you can access to see all the players, see the ranking of the best players, create a player and more, Bugs Hunters it is an RPG game where a group of players assumes the role of programmers of the new metaverse where they must destroy bugs, which in said virtual reality take the form of giant insects that devour space itself. As players progress, destroying more bugs and overcoming the challenges that will be imposed on them in the metaverse, they will earn more points, which will allow them to improve their equipment and increase their ranking.

## Project Objetives

- Build a JavaScript App from scratch
- Afirm and conect all the learned concepts in the Carreer 
- Learn and practice GIT workflow / team work
- Use Scrum agile methodology

## Stack of Technologies

### Front End:
HTML, CSS, Javascript, React, Redux, SendGrid, Cloudinary, SASS, AWS

### Back End:
Node.js, Express, Passport, AWS

### Database:
PostgreSQL

## **Starting Instructions** 

__IMPORTANT:__ Necesary version of node and NPM 

 * __Node__: 12.18.3 or higher
 * __NPM__: 6.14.16 or higher

 
## BoilerPlate

The boilerPlate has two folders: `api` and `client`.
You can find the first folder 'client' in this repo and the second folder like 'PF-BackEnd' in this same github.

Inside `api` you must have to create a file called: `.env` 
that has the following form: 

```
DB_USER=postgress
DB_PASSWORD=12345
DB_HOST=localhost:5432
PORT=3001
DB_KEY=techmarket
ACCESS_TOKEN=*****

# Auth Config
AUTH_SECRET=****
AUTH_EXPIRES=1d
AUTH_ROUNDS=10
CLIENT_URL=http://localhost:3000
GOOGLE_CLIENT_ID=*****
GOOGLE_CLIENT_SECRET=*****
SENDGRID_API_KEY=*****
```

You have to replace `DB_USER` and `DB_PASSWORD` with your own credentials to connect to postgres database. This file will be ignored by github, as it contains sensitive information (the credentials).

The `DB_KEY` is a random security keyword, you can change or keep it. 
The `ACCESS_TOKEN` is a security keyword to Mercado Pago, you can create one in this platform and make a success buy. In this link https://www.mercadopago.com.ar/developers/es/docs/checkout-api/integration-test/test-cards you can get all information to check a success buy in TechMarket.

In Auth Config you must generated your own Google and SendGrid credential to use this functionalities.

## Next 
### _Connect the data base_

 - Go to your postgres database manager and create a new  database called `techmarket`, this is the name of the database to which we will connect.

### _Install the necesary package to run it_

- Open the project console
    + Inside `api` folder, run the command line, `npm install`
    + Inside `client` folder, run the command line, `npm install` 

### _Run the project_

- Open the project console
    + Inside `api` folder, run the command line, `npm start`
    + Inside `api` folder, run the command line, `node Api-Store.js` and `node Api-Users.js` to create standard products and users.
        
    + Inside `client` folder, run the command line, `npm start` (go to http://localhost:3000/) 

# For testing

- You can find in `api/index.js`
    + `conn.sync({ force: false })`, switch it between " true " ( if you want reset database in each loaded ) or " false "( if you dont want reset database in each loaded ) 

- You can use a testing admin user with login credentials, look inside Api-Users.js to find admin users and a standard user.

# Deploy Project 

Live Proyect TechMarket: https://techmarketfront.vercel.app/
- You can create a standard user to see all funcionality or use this user like admin to see admin funcionality:
    + email: juan@gmail.com
    + password: 123456

# Developers

- Federico Romero
    + Linkedin: https://www.linkedin.com/in/federico-romero-fullstack
    + Github: https://github.com/RomeroFederico
    + email: romerof14@gmail.com

- Enzo Sanchez
    + Linkedin: https://www.linkedin.com/in/enzo-sanchez-733b85165/
    + Github: https://github.com/Enzos97
    + email: enz997.ing.ind@gmail.com

- Lucas Battaglia
    + Linkedin: https://www.linkedin.com/in/battaglialucas/
    + Github: https://github.com/battaglialucas
    + email: lucassebastianbattaglia@gmail.com     

- Horacio Abitu
    + Linkedin: https://www.linkedin.com/in/horacioabitu/
    + Github: https://github.com/dev-back55
    + email: ahabitu@gmail.com

- Gabriel Pitrella
    + Linkedin: https://www.linkedin.com/in/gabrielpitrella
    + Github: https://github.com/gpitrella
    + email: gabrielpitrella@gmail.com

# Project Screens 

- Charging Page
![ChargingPage](https://res.cloudinary.com/djgghmpgh/image/upload/v1662477282/HallOfFameInitial_kesfiu.jpg)

- Home Page 
![HomePage](https://res.cloudinary.com/djgghmpgh/image/upload/v1662477119/HallOfFame_ai7rks.jpg)

- Search Player Page
![SearchPlayer](https://res.cloudinary.com/djgghmpgh/image/upload/v1662477287/HallOfFameSearch_hr4nog.jpg)

- Details Player Page
![DetailsPlayer](https://res.cloudinary.com/djgghmpgh/image/upload/v1662477284/HallOfFamePlayerDetail_ilrpoq.jpg)

- Create Player Page
![CreatePlayer](https://res.cloudinary.com/djgghmpgh/image/upload/v1662477282/HallOfFameCreatePlayer_vz4xob.jpg)

- About Page
![About](https://res.cloudinary.com/djgghmpgh/image/upload/v1662477285/HallOfFameAbout_k3ir5q.jpg)

- Login Page
![About](https://res.cloudinary.com/djgghmpgh/image/upload/v1662478479/HallOfFameSignIn_ivfelo.jpg)
