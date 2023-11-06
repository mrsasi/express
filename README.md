# Express
   Fast, unopinionated, minimalist web framework for Node.js.
   
## Nodejs
   Node.js is an amazing tool for building networking services and applications.  It features to provide easy to use functionality that satisfies the needs of the Web Server use-case.

## Nodejs Installation
  To start, you should install the "Node Environment Setup" on your machine. There are two available methods for installation.
 
### Current version based installation.
  * Visit [nodejs.org](https://nodejs.org/en/) and download the current version.
  * After installation, check if the Node version is available or not.
  * Open CMD and run the following command.
     ```
     node --version
     ```
  * If you receive an error message, it means that Node is not installed on your machine. To resolve this error, please fix it and then run the command mentioned above.
  * Or else If you see the installed version of Node in CMD, your installation has been successful.

### NVM(Node Version Manager) Installation
  * It's very helpful for managing the Node version in project-based controllability.
  * You can switch between versions using CMD.
  * Installation Document [github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

## Express, a popular Node.js Framework
### Express Web Server
#### Installation
   * Create your application folder and then, inside the CMD (Command Prompt), run the following command:
      ```
      npm init -y
      ```
      
   * At that time, an automatically generated package.json file is created. This file handles and controls your NPM packages.
   
   * Next, add the Express NPM Package to your application folder using the following command in CMD.
      ```
      npm install express
      ```
#### Source Code
   * Now you're ready to create your first Express web server.
   * Create an index.js file and then add the following code for reading and writing.
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
   * Start the server using the following command:
   ```
   npm start
   ```
   * You can open your browser and navigate to port 1234 on localhost, where you should see the "Hello World!" message.

Reference:
 * [Flaviocopes-express](https://flaviocopes.com/express/)
      I am a big fan of Flaviocopes. They provide more useful Javascript resource and free books.
   
      learn more... [clike here](http://expressjs.com/)

## Conclusion
  Thank you very much for reading all the way here!

 If you like this document or have any suggestions/ideas to improve just let me know.

