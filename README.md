


![myapp](https://github.com/shyuuun/nodejs-todo-app/assets/69673796/15810356-ee4e-4f98-98c6-9a5eda08bd81)


<h1 align="center">To-Do App </h1>

A neo brutalist inspired To-Do app. 

## Built With
I created this app in the following technologies: 

* [![NodeJS]][NodeJS-url]
* [![Express.js]][Express.js-url]
* [![MongoDB]][MongoDB-url]

## Getting Started
This are the instructions on setting up your project locally. To get a local copy, follow these simple steps

### Prerequisites
 * NodeJS = https://nodejs.org/en

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/shyuuun/nodejs-todo-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your port number and mongodb details in /config/init.js
   ```sh
    const port = 3000;
    // Insert your mongodb details here
    const username = 'YOUR_USERNAME HERE' // 'YOUR USERNAME'
    const pass = 'YOUR_PASSWORD_HERE' // 'YOUR PASSWORD'
    const uri = `mongodb+srv://${username}:${pass}@`; // YOUR URI HERE
   ```


## Usage

After setting up your local copy, type 

```sh
  node app.js
```
or
```sh
  nodemon app
```

Open your browser and go to ``` http://127.0.0.1/<YOUR_PORT> ```

### Adding a task
Just click your task in the textbox and hit enter

![Untitled video - Made with Clipchamp (5)](https://github.com/shyuuun/nodejs-todo-app/assets/69673796/4e522db4-decd-4e14-b540-1f7ef0e7d193)

### Updating your task
Hit checkbox and update button!

![Untitled video - Made with Clipchamp (6)](https://github.com/shyuuun/nodejs-todo-app/assets/69673796/de2da181-52cf-4886-957c-139dc8c7cbb3)

### Delete your task
Select trashbin and *poop*

![Untitled video - Made with Clipchamp (8)](https://github.com/shyuuun/nodejs-todo-app/assets/69673796/2016b132-af48-43da-ae36-578970aa8a0e)



## Roadmap

- [] Login / Register System
    -[] another user model for our mongoDB
- [] React (I'm studying it right now)
- [] Fixing bugs?
  - [] weird card behaviour
  - [] Greeting and time fix
  - [] Fixing buttons
  












[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/



