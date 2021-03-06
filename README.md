### Angualr Starter Kit

#### Note
This starter kit is built for Angular 1. Angular 2 starter kit will be available soon. Keep watching...

#### Motivation
If you are starting new project in AngularJs and you want to write moduler and maintainable application that can be use by
you or your team of any size and you dont want to spend more time on defining your folder structure. Then this starter kit
is for you.

This starter kit is created based on paste experiences from many different AngularJs application which now runs in production.
But we faced lot of problem for maintaning large codebase which was not structured properly. This is a attempt to create better
structure which will speed up development of large AngularJS application.

#### Style Guide
Before you start using this starter kit, Go through following style guide for better understanding.
* [Javascript Style Guide](https://github.com/airbnb/javascript)
* [AngularJs Style Guide](https://github.com/johnpapa/angular-styleguide)

#### How to setup

* Install [NodeJs](http://nodejs.org/) which is required for application setup and task automation.

* Install node http local server globally to serve your applocation.

   ``` npm install http-server -g ```

* Install [Bower](http://bower.io/) globally.

    ``` npm install -g bower ```

* Clone this repo. If you just want to start a new project without the commit history then you can do:

   ``` 
     git clone --depth=1 https://github.com/shamsher31/angular-starter-kit.git <your-project-name> 
     cd <your-project-name>  
   ```

* Install bower components and npm package by running following command.

   ``` 
      npm install 
      bower install
   ```

* Once all the bower and npm packges are installed, you can simply run following command to start your applicatoin.

   ``` npm start ```
   
* You can visit ``` http://localhost:8000 ``` in your browser to start using your application.

#### How to run test

* You can run following command for unit test.

   ``` npm test ```
   
* You can run following command for e2e test.
  
   ``` npm protractor ```
   
#### How to contribute

Feel free to suggest improvments and send a PR if you find any flaws in this starter kit.

### License
MIT © [Shamsher Ansari](https://github.com/shamsher)

