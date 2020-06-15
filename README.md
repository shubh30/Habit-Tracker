# Habit Tracker

This applcation helps you to track your habits for and the current day and last 7 days.

1. Home view: Displays all the habits of a user who logged in and provide option to add and delete habits.

2. Displays the week status description of each habit and allows changing status of any of the last 7 days.

## Directory Structure:

1. assets folder: It contains all the static files like css, js, images.

2. config: All the configuration files like
   - mongoose.js
   - middleware.js
   - passport-local-strategy.js

3. Controller: It contains all the controllers for routes 
   - habits_controller.js
   - home_controller.js
   - users_controller.js
   -week-controller.js
   
4. Models: Schemas 
   - habit.js
   - user.js
   
5. Routes: files for routing the user request to the appropriate controllers
   - habits.js
   - index.js root file
   - users.js
   - weeks.js
   
6. Views: It contains all the ejs files that has to render after a success request accordingly.

## Starting the project:

1. Download as zip or clone and extract it to your system.
2. Open folder.
3. Open terminal and make the project folder as your current directory
4. Input following commands:

```
npm install express
npm install ejs
npm install mongoose
npm install passport
npm install connect-flash
npm install connect-mongo
npm install cookie-parser
npm install express-ejs-layouts
npm install express-session
npm install node-sass-middleware
npm install passport-local
```
5. To start the server, use command: npm start
6. Go to https://localhost/8000 on your browser to use the application
7. Now you are good to go.
