# Sale Point Backend.github.io by Patricia Huancaya and Waheed Alam

About our Project: E-Commerce site created to connect users either buying or selling products in the convenience of their own home. It offers a wide range of products saving customers time and money. 

https://github.com/Mepkaz01/Project3-backend.github.io

## ER Diagram

![ERD Image](https://user-images.githubusercontent.com/82845234/122682128-ac098680-d1c5-11eb-9c48-fdc8b2e79780.png)


## User Stories

Two Models: User and Item
* CRUD for User table:
  1) Log In
  2) Sign Up
  3) Profile
  4) Profile Edit
  5) Profile Delete

* CRUD for Item table:
  1) Index/Item Listing
  2) Add Item
  3) Update Item
  4) Delete Item

## Technologies Used

In your terminal (gitbash or command prompt)
1) Create a repo on GitHub and clone to one of your files
2) Install Node.Js and Express
    * npm init
    * npm install express
    * change entry point to server.js
    * npm install nodemon
    * npm run start
3) Install EJS, Method-Override and Body-Parser
    * npm install ejs
    * npm install method-override
    * npm install body-parser
4) [Download Postgres](https://www.postgresql.org/download/)
5) Run psql in the terminal by entering psql -U postres
6) Install Sequelize, create database in psql, model generate and model seed
    * npm install sequelize
    * npm install pg 
    * npx sequelize
    * npx sequelize init
    * create database in psql by running CREATE DATABASE calendar_dev in psql
    * npx sequelize model:generate --name --attributes
    * npx sequelize db:migrate
    * npx sequelize seed:generate --name demo
    * npx sequelize db:seed:all
7) To undo migrate and seed
    * npx sequelize db:migrate:undo
    * npx sequelize db:seed:undo:all
8) npm install cors
9) npm install use-constant

## Solved problems and Approach taken

* Calling axios get from backend to frontend for user table - used the Project Wayfarer for guidance. Installed cors. 
* res-direct vs res.json - backend Controller needs to have res.json instead of res.redirect.



