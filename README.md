# Eat Da Burger!
A CRUD Application With Node.js/Express/MySQL/Handlebars/

## Description

This application is a basic full stack web app, allowing users to Create, Read, Update, and Delete content from a persistent database. The Front End HTML/CSS and elements are templated through the Handlebars View Engine, server and routing logic through Node.js and Express, and Database querying with MySQL.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as *available* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

A user can choose to ask for seconds, and add the burger back to the uneaten column. Users can also clear the plate, and delete any burger that is in the eaten column.

## Demo

The demo of the burger eating application can be found [here](http://michaelscottfox.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:misterfoxy/burger.git

Next, install the application dependencies.

	cd eat-da-burger
	npm install

Finally, run the node server locally.

	node server.js

Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.
