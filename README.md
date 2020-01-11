# Express Application
   Express is a Node.js Web Framework. Node.js is an amazing tool for building networking services and applications.  It features to provide easy to use functionality that satisfies the needs of the Web Server use-case.

## Nodejs Installation
  First, you go to install "Node Environment Setup" in your Machine.
 It's two way of install available.
 
### Current version based installation.
  * Go to the [nodejs.org](https://nodejs.org/en/) and install current version.
  * Installation after check your node version available or not.
  * Open CMD and run below command
     ```
     node --version
     ```
  * You got error message. that time Node not installed your machine. So, fix the error and after run above command.
  * If you got current version of node in CMD. Your installation has been successful.

### NVM(Node Version Manager) Installation
  * It's very helpful for the project bassed node version controllability.
  * CMD via you can move one version to another.
  * Installation Document [github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

## Express, a popular Node.js Framework
### Express Web Server
1)Installation
   * Create your applation folder and that inside CMD(Command prompt) via run below command
      ```
      npm init -y
      ```
     That time automatically generated package.json file, this file handle and control your NPM package.
   
   * Next add your [Express NPM Package](https://www.npmjs.com/package/express), CMD via applation folder below command.
      ```
      npm install express
      ```
2)Source Code
   * Now ready to create our first Express Web Server.
   * Create index.js file. and after read and write below code.
   ```
   const express = require('express');
   const app = express();
   const PORT=1234;
   
   app.get('/', (req, res) => res.send('Hello World!'))
   app.listen(PORT, () => console.log('Server ready'))
   
   ```
   * Save this to an index.js file in your applation folder, add below command in package.json file inside.
   ```
    "scripts": {
    "start": "node index.js",
    },
   ```
   * Start the server using
   ```
   npm start
   ```
   * You can open the browser to port 1234 on localhost and you should see the Hello World! message.

Reference:
 * [Flaviocopes-express](https://flaviocopes.com/express/)
      I am a big fan of Flaviocopes. They provide more useful Javascript resource and free books.

learn more... [clike here](http://expressjs.com/)

## Conclusion
  Thank you very much for reading all the way here!

  If you like this document or have any suggestion / idea to improve just let me know.

