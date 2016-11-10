

# FOODADVISER APP

FoodAdviser App is s service designed to make healthy eating easy.


# Getting Started


## Installing and configuring

> npm i

Create in project root the file .env and configure it. There must be specified:
1. PORT - port on which the application will be started.
2. MONGOURI - the path to the database store.
An example of .env, see below

> PORT=3000

> MONGOURI=mongodb://dbuser:password@ds044979.mlab.com:44979/foodadviser

Paste your credentials instead of dbuser and password.

Also, in project present file .env.example and you may rename it to .env


## Start All

Start whole project for production.
> npm start


## Build Frontend

For build frontend webpack has used.

1. Build for prodaction.
> npm run front_build

2. Build for development with watch.
> npm run front_watch


## Start server

1. Start server for prosuction.
> npm run server_start

2. Start server for development with watch and in debug mode.
> npm run server_watchdebug


# Description of implementation

## Description of Angular2 part of application

### Where you can find it?

http://localhost:3000/angular

or You can get it from Landing page

http://localhost:3000/ -> Main menu -> What to eat

There are two feature areas with it's own routers:
- Products
- Users

Product feature area has next functions:
- Show all products
- Find products with specific parameters
User can fill not all fields. Empty fields won't use for search.

Lazy-loading implemented on route http://localhost:3000/angular/admin
Can be reached by - http://localhost:3000/angular/ -> Admin
Admin chunk-file loaded only once at first success attempt.

In application implemented next types of guards:
1) canActivate guard - used on route http://localhost:3000/angular/admin
This guard allows activate admin route only for logged in users.

2) canLoad guard - used on route http://localhost:3000/angular/admin
This guard allows to load admin module chunk-file only for logged in users.

3) resolve guard - used on route http://localhost:3000/angular/users/edit/:id
Can be reached by - http://localhost:3000/angular/ -> Users -> press button Edit on User
This guard limits access to edit user profile.
User can edit only his own profile. All other attempts will be rejected.

## Description of Frontend

Landing page can be reached by address - http://localhost:3000/

### There implemented:
- Responsive menu with search bar
- Responsive slider
- Responsive info-block with articles
- Responsive footer with socials

### Used technology :
- Responsive slider with preview
- Different images for desktop and mobile
- 2x images for Retina display
- Flexbox for info-block and other sections
- BEM methodology for styles


## Description of Server

For demo EJS templater is used

For user login local strategy has used - authentication via email and password.
Information about user store in node session.

For testing test-user has created:
email: lisentia.ua@gmail.com
password: 12345


### List of RESTs

- get main page - http://localhost:3000/main
- get all users - http://localhost:3000/user
- get user by id - http://localhost:3000/user/:id
- get form for addition new user - http://localhost:3000/user/new
- add new user - http://localhost:3000/user/register
- get form for user update - http://localhost:3000/user/edit/:id (currently should be tested from REST Client like PostMan)
- update user - http://localhost:3000/user/update/:id (currently should be tested from REST Client like PostMan)
- delete user  - http://localhost:3000/user/del/:id (currently should be tested from REST Client like PostMan)
- het login form - http://localhost:3000/user/login
- authenticate user (perform login) - http://localhost:3000/user/authenticate
- logout user - http://localhost:3000/user/logout


